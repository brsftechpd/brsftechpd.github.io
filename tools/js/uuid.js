class UUIDToolsApp {
    constructor() {
        this.config = UUID_CONFIG;
        this.state = {
            selectedType: 'profile',
            activeTab: 'uuid',
            errorTimers: {} // Для хранения таймеров очистки ошибок
        };
        
        this.elements = {};
    }

    init() {
        this.renderContent();
        this.setupEventListeners();
        
        // Добавляем обработчик paste для всего документа
        document.addEventListener('paste', (e) => this.handlePaste(e));
    }

    renderContent() {
        const content = document.getElementById('content');
        if (!content) return;

        content.innerHTML = `
            <div class="uuid-container">
                <div class="tabs-content" id="tabsContent">
                    <!-- Вкладка UUID -->
                    <div class="tab-content active" id="tab-uuid">
                        <!-- Переключатель профиль/фото -->
                        <div class="toggle-container" id="toggleContainer">
                            <div class="toggle-option active" data-value="profile">
                                <i class="fas fa-user"></i>
                                <span>Профиль</span>
                            </div>
                            <div class="toggle-option" data-value="photo">
                                <i class="fas fa-image"></i>
                                <span>Фото</span>
                            </div>
                            <div class="toggle-slider"></div>
                        </div>

                        <!-- Форма ввода UUID -->
                        <div class="input-with-button">
                            <div class="input-group">
                                <input type="tel" id="numberInput" placeholder="Введите UUID" maxlength="23">
                                <div class="input-icon">
                                    <i class="fas fa-hashtag"></i>
                                </div>
                            </div>
                            <button class="format-btn-compact" id="formatBtn" title="Форматировать">
                                <i class="fas fa-wand-magic-sparkles"></i>
                            </button>
                        </div>

                        <!-- Результат -->
                        <div class="result-container">
                            <div class="result-label">Результат:</div>
                            <div class="result-wrapper">
                                <div class="result" id="formattedResult">/s3b-pudsmmu-prod/</div>
                                <button class="copy-btn" id="copyBtn" title="Копировать">
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Сервисы приложения -->
                        <div class="button-group">
                            <div class="group-title">Сервисы приложения (Бэкенд)</div>
                            <div class="check-buttons" id="AppButtons"></div>
                        </div>

                        <!-- Запросы от мобильного приложения -->
                        <div class="button-group">
                            <div class="group-title">Запросы от мобильного приложения (Фронтенд)</div>
                            <div class="additional-buttons" id="RequestButtons"></div>
                        </div>

                        <!-- Сервисы ММЦ и ЕЦХД -->
                        <div class="button-group">
                            <div class="group-title">Сервисы ММЦ и ЕЦХД, ЕРЗ (Внешние сервисы)</div>
                            <div class="other-checks-buttons" id="MMCButtons"></div>
                        </div>
                    </div>

                    <!-- Вкладка Поиск по КИГ -->
                    <div class="tab-content" id="tab-kig">
                        <div class="input-with-button">
                            <div class="input-group">
                                <input type="text" id="kigInput" placeholder="Введите КИГ (9 символов)" maxlength="9">
                                <div class="input-icon">
                                    <i class="fas fa-id-card"></i>
                                </div>
                            </div>
                            <button class="format-btn-compact" id="searchKigBtn" title="Найти">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>

                        <div class="kig-info">
                            <i class="fas fa-info-circle"></i> Формат: AA/AB + 7 цифр (пример: AA1234567)
                        </div>
                    </div>

                    <!-- Вкладка Проверка паспорта -->
                    <div class="tab-content" id="tab-passport">
                        <div class="input-with-button">
                            <div class="input-group">
                                <input type="text" id="passportInput" placeholder="Введите номер паспорта">
                                <div class="input-icon">
                                    <i class="fas fa-passport"></i>
                                </div>
                            </div>
                        </div>

                        <div class="button-group">
                            <div class="group-title">Проверки</div>
                            <div class="passport-buttons-grid">
                                <button class="passport-btn passport-registered-btn" id="passportRegisteredBtn">
                                    <i class="fas fa-check-circle"></i> Регистрация
                                </button>
                                <button class="passport-btn passport-profile-btn" id="passportProfileBtn">
                                    <i class="fas fa-search"></i> Найти профиль
                                </button>
                                <button class="passport-btn passport-missing-btn" id="passportMissingBtn">
                                    <i class="fas fa-times-circle"></i> Отсутствие
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Вкладка Адресный JSON (вместо UTC) -->
                    <div class="tab-content" id="tab-utc">
                        <!-- Секция: Идентификаторы -->
                        <div class="address-section">
                            <div class="address-section-title">
                                <span class="address-section-indicator"></span> Идентификаторы и метаданные
                            </div>
                            <div class="address-form-group">
                                <label for="uuidField">UUID <span class="address-required-mark">*</span></label>
                                <div class="address-input-with-button">
                                    <div class="address-input-group">
                                        <input type="tel" id="uuidField" placeholder="Введите UUID" maxlength="23" class="address-input">
                                        <div class="input-icon">
                                            <i class="fas fa-hashtag"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="address-row">
                                <div class="address-form-group">
                                    <label for="timestampField">Timestamp</label>
                                    <input type="text" id="timestampField" placeholder="2026-06-06T12:00:00.000000Z" class="address-input">
                                </div>
                                <div class="address-form-group">
                                    <label for="changeDateField">ChangeDate</label>
                                    <input type="text" id="changeDateField" placeholder="2026-06-06T12:00:00Z" class="address-input">
                                </div>
                            </div>
                            <div class="address-btn-group">
                                <button type="button" class="address-btn address-btn-secondary" id="setCurrentTimeBtn">
                                    <i class="fas fa-clock"></i> Текущее время
                                </button>
                                <button type="button" class="address-btn address-btn-ghost" id="clearTimeBtn">
                                    <i class="fas fa-undo"></i> Очистить время
                                </button>
                            </div>
                        </div>

                        <!-- Секция: Адрес -->
                        <div class="address-section">
                            <div class="address-section-title">
                                <span class="address-section-indicator"></span> Адрес
                            </div>
                            <div class="address-form-group">
                                <label for="addressNameField">Полный адрес <span class="address-required-mark">*</span></label>
                                <input type="text" id="addressNameField" placeholder="г. Москва, ул. Тверская, д. 7, кв. 15" class="address-input">
                            </div>
                            <div class="address-row address-row-address">
                                <div class="address-form-group">
                                    <label for="streetField">Улица</label>
                                    <input type="text" id="streetField" placeholder="Тверская" class="address-input">
                                </div>
                                <div class="address-form-group">
                                    <label for="houseField">Дом</label>
                                    <input type="text" id="houseField" placeholder="7" class="address-input">
                                </div>
                                <div class="address-form-group">
                                    <label for="flatField">Квартира <span class="address-optional-mark">необяз.</span></label>
                                    <input type="text" id="flatField" placeholder="15" class="address-input">
                                </div>
                            </div>
                        </div>

                        <!-- Секция: Геолокация -->
                        <div class="address-section">
                            <div class="address-section-title">
                                <span class="address-section-indicator"></span> Геолокация и регион
                            </div>
                            <div class="address-form-group">
                                <label for="latlonField">Координаты (широта, долгота) <span class="address-required-mark">*</span></label>
                                <input type="text" id="latlonField" placeholder="55.7558, 37.6173" class="address-input">
                            </div>
                            <div class="address-row" style="margin-top: 12px;">
                                <div class="address-form-group">
                                    <label for="provinceField">Федеральный округ</label>
                                    <input type="text" id="provinceField" value="Центральный федеральный округ" class="address-input">
                                </div>
                                <div class="address-form-group">
                                    <label for="cityField">Город <span class="address-optional-mark">необяз.</span></label>
                                    <input type="text" id="cityField" placeholder="Москва" class="address-input">
                                </div>
                            </div>
                        </div>

                        <button type="button" class="address-btn address-btn-primary address-btn-full" id="generateJsonBtn">
                            Сгенерировать JSON и скопировать в буфер обмена
                        </button>

                        <div class="address-output-container">
                            <div class="address-output-header">
                                <span><i class="fas fa-file-code"></i> Результат</span>
                                <button type="button" class="address-btn address-btn-ghost" id="copyOutputBtn">
                                    <i class="fas fa-copy"></i> Копировать
                                </button>
                            </div>
                            <div class="address-output" id="addressOutput"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.initializeElements();
        this.initAppButtons();
        this.initRequestButtons();
        this.initMMCButtons();
        this.initAddressConstructor();
    }

    initializeElements() {
        this.elements = {
            numberInput: document.getElementById('numberInput'),
            formatBtn: document.getElementById('formatBtn'),
            formattedResult: document.getElementById('formattedResult'),
            copyBtn: document.getElementById('copyBtn'),
            toggleContainer: document.getElementById('toggleContainer'),
            AppButtons: document.getElementById('AppButtons'),
            RequestButtons: document.getElementById('RequestButtons'),
            MMCButtons: document.getElementById('MMCButtons'),
            tabsContent: document.getElementById('tabsContent'),
            kigInput: document.getElementById('kigInput'),
            searchKigBtn: document.getElementById('searchKigBtn'),
            passportInput: document.getElementById('passportInput'),
            passportRegisteredBtn: document.getElementById('passportRegisteredBtn'),
            passportProfileBtn: document.getElementById('passportProfileBtn'),
            passportMissingBtn: document.getElementById('passportMissingBtn'),
            // Элементы конструктора адресов
            uuidField: document.getElementById('uuidField'),
            timestampField: document.getElementById('timestampField'),
            changeDateField: document.getElementById('changeDateField'),
            addressNameField: document.getElementById('addressNameField'),
            streetField: document.getElementById('streetField'),
            houseField: document.getElementById('houseField'),
            flatField: document.getElementById('flatField'),
            latlonField: document.getElementById('latlonField'),
            provinceField: document.getElementById('provinceField'),
            cityField: document.getElementById('cityField'),
            addressOutput: document.getElementById('addressOutput'),
            generateJsonBtn: document.getElementById('generateJsonBtn'),
            copyOutputBtn: document.getElementById('copyOutputBtn'),
            setCurrentTimeBtn: document.getElementById('setCurrentTimeBtn'),
            clearTimeBtn: document.getElementById('clearTimeBtn')
        };
    }

    initAppButtons() {
        const appServices = this.config.urlTemplates.appServices;
        Object.values(appServices).forEach(service => {
            const button = document.createElement('button');
            button.className = `check-btn ${service.gradient}`;
            button.innerHTML = `<i class="${service.icon}"></i> ${service.name}`;
            button.addEventListener('click', () => this.openCheckUrl(service.url, this.elements.numberInput.value));
            this.elements.AppButtons.appendChild(button);
        });
    }

    initRequestButtons() {
        const requestsMobileApp = this.config.urlTemplates.requestsMobileApp;
        Object.values(requestsMobileApp).forEach(request => {
            const button = document.createElement('button');
            button.className = `check-btn ${request.gradient}`;
            button.innerHTML = `<i class="${request.icon}"></i> ${request.name}`;
            button.addEventListener('click', () => this.openCheckUrl(request.url, this.elements.numberInput.value));
            this.elements.RequestButtons.appendChild(button);
        });
    }

    initMMCButtons() {
        const mmcServices = this.config.urlTemplates.mmcServices;
        Object.values(mmcServices).forEach(service => {
            const button = document.createElement('button');
            button.className = `check-btn ${service.gradient}`;
            button.innerHTML = `<i class="${service.icon}"></i> ${service.name}`;
            button.addEventListener('click', () => this.openCheckUrl(service.url, this.elements.numberInput.value));
            this.elements.MMCButtons.appendChild(button);
        });
    }

    setupEventListeners() {
        // Переключение вкладок
        document.getElementById('tabsNavigation').addEventListener('click', (e) => {
            const tabBtn = e.target.closest('.uuid-tab-btn');
            if (tabBtn) {
                this.switchTab(tabBtn.dataset.tab);
            }
        });

        // Переключатель профиль/фото
        this.elements.toggleContainer.addEventListener('click', (e) => {
            const option = e.target.closest('.toggle-option');
            if (option && !option.classList.contains('active')) {
                document.querySelectorAll('.toggle-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
                this.state.selectedType = option.dataset.value;
            }
        });

        // Форматирование UUID - проверяем только numberInput
        this.elements.formatBtn.addEventListener('click', () => {
            // Проверяем только значение в numberInput
            const inputValue = this.elements.numberInput.value.trim();
            if (!this.isValidUserId(inputValue)) {
                this.showInputError(this.elements.numberInput);
                return;
            }
            this.formatUUID();
        });
        
        this.elements.numberInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                // Проверяем только значение в numberInput
                const inputValue = this.elements.numberInput.value.trim();
                if (!this.isValidUserId(inputValue)) {
                    this.showInputError(this.elements.numberInput);
                    return;
                }
                this.formatUUID();
            }
        });

        // Копирование результата
        this.elements.copyBtn.addEventListener('click', () => {
            this.copyToClipboard(this.elements.formattedResult.textContent);
        });

        // Поиск по КИГ
        this.elements.searchKigBtn.addEventListener('click', () => this.searchByKIG());
        this.elements.kigInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchByKIG();
        });
        this.elements.kigInput.addEventListener('input', (e) => {
            this.validateKIGInput(e.target);
        });

        // Проверка паспорта
        this.elements.passportRegisteredBtn.addEventListener('click', () => this.openPassportUrl('registered'));
        this.elements.passportProfileBtn.addEventListener('click', () => this.openPassportUrl('profile'));
        this.elements.passportMissingBtn.addEventListener('click', () => this.openPassportUrl('missing'));
        this.elements.passportInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.openPassportUrl('registered');
        });
        
        this.elements.passportInput.addEventListener('input', (e) => {
            e.target.classList.remove('error');
        });

        // Валидация ввода UUID (для numberInput)
        this.elements.numberInput.addEventListener('input', (e) => {
            this.validateUUIDInput(e.target);
        });

        // Валидация ввода UUID для конструктора
        if (this.elements.uuidField) {
            this.elements.uuidField.addEventListener('input', (e) => {
                this.validateUUIDInput(e.target);
            });
        }
    }

    // Обработчик вставки из буфера обмена
    handlePaste(e) {
        const activeElement = document.activeElement;
        
        // Список полей, которые НЕ должны обрабатываться автоматически
        const excludedFields = [
            this.elements.numberInput,
            this.elements.passportInput,
            this.elements.kigInput,
            this.elements.uuidField
        ];
        
        // Если фокус на любом из исключённых полей — пропускаем
        if (excludedFields.includes(activeElement)) {
            return;
        }
        
        // Для всех остальных полей (включая поля конструктора адресов) — разрешаем стандартную вставку
        // Ничего не делаем, браузер сам вставит данные
        // Но нам нужно определить, если вставка была вне полей ввода, то перенаправить в UUID
        const isInputField = activeElement?.tagName === 'INPUT' || activeElement?.tagName === 'TEXTAREA';
        
        if (!isInputField) {
            // Если вставка вне полей ввода — обрабатываем как раньше
            const text = e.clipboardData.getData('text/plain');
            const cleanText = text.replace(/\D/g, '');
            
            if (cleanText.length > 0) {
                e.preventDefault();
                
                if (cleanText.length === 23) {
                    this.elements.numberInput.value = cleanText;
                    this.elements.numberInput.focus();
                }
                else if (cleanText.length === 10) {
                    this.elements.passportInput.value = cleanText;
                    this.elements.passportInput.focus();
                }
                else if (cleanText.length === 9 && /^(AA|AB)\d{7}$/.test(cleanText.toUpperCase())) {
                    this.elements.kigInput.value = cleanText.toUpperCase();
                    this.elements.kigInput.focus();
                }
                else {
                    this.elements.numberInput.value = cleanText.slice(0, 23);
                    this.elements.numberInput.focus();
                }
            }
        }
        // Если фокус на любом другом поле ввода (включая поля конструктора) — разрешаем стандартную вставку
        // Ничего не делаем, браузер обработает сам
    }

    showInputError(inputElement) {
        // Сначала очищаем предыдущие таймеры для этого элемента
        if (this.state.errorTimers[inputElement.id]) {
            clearTimeout(this.state.errorTimers[inputElement.id]);
            delete this.state.errorTimers[inputElement.id];
        }
        
        // Убираем класс ошибки, чтобы перезапустить анимацию
        inputElement.classList.remove('error');
        
        // Небольшая задержка для перезапуска анимации
        setTimeout(() => {
            inputElement.classList.add('error');
            // Устанавливаем таймер для автоматического снятия ошибки через 2 секунды
            this.state.errorTimers[inputElement.id] = setTimeout(() => {
                inputElement.classList.remove('error');
                delete this.state.errorTimers[inputElement.id];
            }, 2000);
        }, 10);
    }

    cleanNumber(number) {
        return number.replace(/\D/g, '');
    }

    isValidUserId(userId) {
        return this.cleanNumber(userId).length === 23;
    }

    formatWithSeparators(number) {
        const clean = this.cleanNumber(number);
        return clean.match(/.{1,4}/g).join('/');
    }

    formatUUID() {
        const inputValue = this.elements.numberInput.value.trim();
        
        // Дополнительная проверка на случай, если вызвали без предварительной проверки
        if (!this.isValidUserId(inputValue)) {
            this.showInputError(this.elements.numberInput);
            return;
        }

        try {
            const cleanNumber = this.cleanNumber(inputValue);
            const formattedNumber = this.formatWithSeparators(cleanNumber);
            const prefix = this.state.selectedType === 'photo' ? '/s3b-pudsmmu-prod/' : '/s3b-pudsmmu-cached-prod/';
            const result = prefix + formattedNumber;
            
            this.elements.formattedResult.textContent = result;
            this.copyToClipboard(result);

        } catch (error) {
            this.showInputError(this.elements.numberInput);
        }
    }

    openCheckUrl(urlTemplate, userId) {
        if (!this.isValidUserId(userId)) {
            this.showInputError(this.elements.numberInput);
            return;
        }
        
        const cleanUserId = this.cleanNumber(userId);
        window.open(urlTemplate.replace(/{userId}/g, cleanUserId), '_blank');
    }

    openPassportUrl(type) {
        const passportValue = this.elements.passportInput.value.trim();
        
        if (!passportValue) {
            this.showInputError(this.elements.passportInput);
            return;
        }

        const passportChecks = this.config.urlTemplates.passport;
        let url;
        
        switch(type) {
            case 'registered':
                url = passportChecks.registered.url.replace(/{pasport}/g, passportValue);
                break;
            case 'profile':
                url = passportChecks.profile.url.replace(/{pasport}/g, passportValue);
                break;
            case 'missing':
                url = passportChecks.missing.url.replace(/{pasport}/g, passportValue);
                break;
        }

        if (url) {
            window.open(url, '_blank');
        }
    }

    searchByKIG() {
        const kigValue = this.elements.kigInput.value.trim().toUpperCase();
        
        if (!kigValue || !/^(AA|AB)\d{7}$/.test(kigValue)) {
            this.showInputError(this.elements.kigInput);
            return;
        }

        const url = this.config.urlTemplates.kig.search.url.replace(/{kig}/g, kigValue);
        window.open(url, '_blank');
    }

    validateUUIDInput(input) {
        // Очищаем от нецифровых символов и обрезаем до 23 символов
        const cleaned = input.value.replace(/\D/g, '');
        if (cleaned !== input.value) {
            input.value = cleaned;
        }
        if (input.value.length > 23) {
            input.value = input.value.slice(0, 23);
        }
    }

    validateKIGInput(input) {
        let value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 9);
        input.value = value;
    }

    switchTab(tabId) {
        document.querySelectorAll('.uuid-tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`.uuid-tab-btn[data-tab="${tabId}"]`);
        const activeTab = document.getElementById(`tab-${tabId}`);
        
        if (activeBtn) activeBtn.classList.add('active');
        if (activeTab) activeTab.classList.add('active');
        
        this.state.activeTab = tabId;
    }

    // ============= Методы для конструктора адресов =============

    initAddressConstructor() {
        // Кнопки времени
        if (this.elements.setCurrentTimeBtn) {
            this.elements.setCurrentTimeBtn.addEventListener('click', () => this.setCurrentTimeAddress());
        }
        if (this.elements.clearTimeBtn) {
            this.elements.clearTimeBtn.addEventListener('click', () => this.clearTimeFieldsAddress());
        }

        // Генерация и копирование
        if (this.elements.generateJsonBtn) {
            this.elements.generateJsonBtn.addEventListener('click', () => this.generateAndCopyAddress());
        }
        if (this.elements.copyOutputBtn) {
            this.elements.copyOutputBtn.addEventListener('click', () => this.copyOutputDirectlyAddress());
        }

        // Автоустановка времени (без уведомления)
        this.setCurrentTimeAddressSilent();

        // Фокус на UUID
        if (this.elements.uuidField) this.elements.uuidField.focus();
    }

    setCurrentTimeAddressSilent() {
        const now = new Date();
        const isoWithMs = now.toISOString();
        const timestamp = isoWithMs.slice(0, -1) + '000Z';
        const changeDate = isoWithMs.split('.')[0] + 'Z';
        if (this.elements.timestampField) this.elements.timestampField.value = timestamp;
        if (this.elements.changeDateField) this.elements.changeDateField.value = changeDate;
    }

    showToastAddress(message, type = 'success') {
        let toast = document.querySelector('.address-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'address-toast';
            toast.innerHTML = `
                <span class="address-toast-icon"></span>
                <span class="address-toast-message"></span>
                <button class="address-toast-close">&times;</button>
            `;
            const container = document.querySelector('#tab-utc');
            if (container) container.appendChild(toast);
            else document.body.appendChild(toast);
        }
        
        const toastIcon = toast.querySelector('.address-toast-icon');
        const toastMessage = toast.querySelector('.address-toast-message');
        const closeBtn = toast.querySelector('.address-toast-close');

        toast.className = 'address-toast';
        toast.classList.add(type);
        toastIcon.textContent = type === 'success' ? '✓' : '⚠';
        toastMessage.textContent = message;

        clearTimeout(toast._timeout);
        toast.classList.add('show');
        toast._timeout = setTimeout(() => toast.classList.remove('show'), 3000);

        closeBtn.onclick = () => toast.classList.remove('show');
    }

    setCurrentTimeAddress() {
        this.setCurrentTimeAddressSilent();
        this.showToastAddress('Установлено текущее время', 'success');
    }

    clearTimeFieldsAddress() {
        if (this.elements.timestampField) this.elements.timestampField.value = '';
        if (this.elements.changeDateField) this.elements.changeDateField.value = '';
        this.showToastAddress('Поля времени очищены', 'success');
    }

    highlightJSON(jsonString) {
        return jsonString
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(
                /("(\\u[a-fA-F0-9]{4}|\\[^u]|[^"\\])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
                function(match) {
                    let cls = 'address-json-number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) cls = 'address-json-key';
                        else cls = 'address-json-string';
                    } else if (/true|false/.test(match)) {
                        cls = 'address-json-number';
                    } else if (/null/.test(match)) {
                        cls = 'address-json-null';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                }
            )
            .replace(/[{}[\]]/g, '<span class="address-json-bracket">$&</span>');
    }

    generateAndCopyAddress() {
        // Сброс ошибок
        document.querySelectorAll('.address-input.input-error').forEach(el => el.classList.remove('input-error'));

        const uuid = this.elements.uuidField.value.trim();
        const timestamp = this.elements.timestampField.value.trim();
        const changeDate = this.elements.changeDateField.value.trim();
        const addressName = this.elements.addressNameField.value.trim();
        const flatInput = this.elements.flatField.value.trim();
        const flat = flatInput === '' ? null : flatInput;
        const street = this.elements.streetField.value.trim();
        const house = this.elements.houseField.value.trim();
        const latlonStr = this.elements.latlonField.value.trim();
        const province = this.elements.provinceField.value.trim();
        const cityInput = this.elements.cityField.value.trim();
        const city = cityInput === '' ? null : cityInput;

        let hasError = false;
        const required = [
            { id: 'uuidField', value: uuid, name: 'UUID' },
            { id: 'addressNameField', value: addressName, name: 'Полный адрес' },
            { id: 'latlonField', value: latlonStr, name: 'Координаты' }
        ];
        required.forEach(f => {
            if (!f.value) {
                document.getElementById(f.id).classList.add('input-error');
                if (!hasError) this.showToastAddress('Заполните обязательное поле: ' + f.name, 'error');
                hasError = true;
            }
        });
        if (hasError) return;

        // Проверка длины UUID
        if (uuid.length !== 23) {
            document.getElementById('uuidField').classList.add('input-error');
            this.showToastAddress('UUID должен содержать ровно 23 цифры', 'error');
            return;
        }

        const parts = latlonStr.split(',').map(s => s.trim());
        if (parts.length !== 2) {
            document.getElementById('latlonField').classList.add('input-error');
            this.showToastAddress('Координаты должны быть в формате "широта, долгота"', 'error');
            return;
        }
        const lat = parseFloat(parts[0]);
        const lon = parseFloat(parts[1]);
        if (isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
            document.getElementById('latlonField').classList.add('input-error');
            this.showToastAddress('Некорректные координаты', 'error');
            return;
        }

        const jsonObj = {
            locality: null,
            vegetation: null,
            addressName: addressName,
            flat: flat,
            street: street,
            house: house,
            province: province,
            city: city,
            point: { lat: lat, lon: lon },
            timestamp: timestamp || null,
            district: null,
            changeDate: changeDate || null,
            savedToDbTimestamp: null,
            isOtherSpace: null,
            uuid: uuid
        };

        const jsonString = JSON.stringify(jsonObj, null, 2);
        this.elements.addressOutput.innerHTML = this.highlightJSON(jsonString);

        navigator.clipboard.writeText(jsonString).then(() => {
            this.showToastAddress('JSON скопирован в буфер обмена', 'success');
        }).catch(() => {
            this.showToastAddress('Не удалось скопировать автоматически', 'error');
        });
    }

    copyOutputDirectlyAddress() {
        const text = this.elements.addressOutput.textContent || '';
        if (!text.trim()) {
            this.showToastAddress('Сначала сгенерируйте JSON', 'error');
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            this.showToastAddress('JSON скопирован', 'success');
        }).catch(() => {
            this.showToastAddress('Ошибка копирования', 'error');
        });
    }

    // Вспомогательный метод для копирования в буфер обмена
    copyToClipboard(text) {
        if (!text) return;
        navigator.clipboard.writeText(text).catch(() => {
            // Запасной вариант через execCommand
            try {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            } catch (err) {
                // Игнорируем ошибку
            }
        });
    }
}