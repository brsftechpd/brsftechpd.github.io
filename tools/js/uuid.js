class UUIDToolsApp {
    constructor() {
        this.config = UUID_CONFIG;
        this.state = {
            selectedType: 'profile',
            activeTab: 'uuid',
            stats: this.loadStats(),
            errorTimers: {} // Для хранения таймеров очистки ошибок
        };
        
        this.elements = {};
    }

    init() {
        this.renderContent();
        this.setupEventListeners();
        this.updateStatsDisplay();
        
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

                        <!-- Сервисы мобильного приложения -->
                        <div class="button-group">
                            <div class="group-title">Сервисы мобильного приложения</div>
                            <div class="check-buttons" id="mobileAppButtons"></div>
                        </div>

                        <!-- Запросы в ММЦ -->
                        <div class="button-group">
                            <div class="group-title">Запросы в ММЦ</div>
                            <div class="additional-buttons" id="mmcButtons"></div>
                        </div>

                        <!-- Остальные проверки -->
                        <div class="button-group">
                            <div class="group-title">Остальные проверки</div>
                            <div class="other-checks-buttons" id="otherChecksButtons"></div>
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

                    <!-- Вкладка UTC время -->
                    <div class="tab-content" id="tab-utc">
                        <button class="utc-btn" id="utcTimeBtn">
                            <i class="fas fa-clock"></i> Получить UTC время
                        </button>

                        <div class="result-container">
                            <div class="result-label">С миллисекундами:</div>
                            <div class="result-wrapper">
                                <div class="result" id="utcTimeResult">Нажмите кнопку</div>
                                <button class="copy-btn" id="utcCopyBtn" title="Копировать">
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        </div>

                        <div class="result-container">
                            <div class="result-label">Без миллисекунд:</div>
                            <div class="result-wrapper">
                                <div class="result" id="utcTimeResultSimple">Нажмите кнопку</div>
                                <button class="copy-btn" id="utcCopyBtnSimple" title="Копировать">
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.initializeElements();
        this.initMobileAppButtons();
        this.initMmcButtons();
        this.initOtherChecksButtons();
    }

    initializeElements() {
        this.elements = {
            numberInput: document.getElementById('numberInput'),
            formatBtn: document.getElementById('formatBtn'),
            formattedResult: document.getElementById('formattedResult'),
            copyBtn: document.getElementById('copyBtn'),
            toggleContainer: document.getElementById('toggleContainer'),
            mobileAppButtons: document.getElementById('mobileAppButtons'),
            mmcButtons: document.getElementById('mmcButtons'),
            otherChecksButtons: document.getElementById('otherChecksButtons'),
            tabsContent: document.getElementById('tabsContent'),
            kigInput: document.getElementById('kigInput'),
            searchKigBtn: document.getElementById('searchKigBtn'),
            passportInput: document.getElementById('passportInput'),
            passportRegisteredBtn: document.getElementById('passportRegisteredBtn'),
            passportProfileBtn: document.getElementById('passportProfileBtn'),
            passportMissingBtn: document.getElementById('passportMissingBtn'),
            utcTimeBtn: document.getElementById('utcTimeBtn'),
            utcTimeResult: document.getElementById('utcTimeResult'),
            utcTimeResultSimple: document.getElementById('utcTimeResultSimple'),
            utcCopyBtn: document.getElementById('utcCopyBtn'),
            utcCopyBtnSimple: document.getElementById('utcCopyBtnSimple')
        };
    }

    initMobileAppButtons() {
        const mobileServices = this.config.urlTemplates.mobileServices;
        Object.values(mobileServices).forEach(service => {
            const button = document.createElement('button');
            button.className = `check-btn ${service.gradient}`;
            button.innerHTML = `<i class="${service.icon}"></i> ${service.name}`;
            button.addEventListener('click', () => this.openCheckUrl(service.url, this.elements.numberInput.value));
            this.elements.mobileAppButtons.appendChild(button);
        });
    }

    initMmcButtons() {
        const mmcRequests = this.config.urlTemplates.mmcRequests;
        Object.values(mmcRequests).forEach(request => {
            const button = document.createElement('button');
            button.className = `check-btn ${request.gradient}`;
            button.innerHTML = `<i class="${request.icon}"></i> ${request.name}`;
            button.addEventListener('click', () => this.openCheckUrl(request.url, this.elements.numberInput.value));
            this.elements.mmcButtons.appendChild(button);
        });
    }

    initOtherChecksButtons() {
        const otherChecks = this.config.urlTemplates.otherChecks;
        Object.values(otherChecks).forEach(check => {
            const button = document.createElement('button');
            button.className = `check-btn ${check === otherChecks.yandexService ? 'yandex-service-btn' : 
                              check === otherChecks.addressRepeated ? 'warning-group-btn' : 
                              check === otherChecks.residenceRegistrationError ? 'danger-group-btn' : 'mso-group-btn'}`;
            button.innerHTML = `<i class="${check.icon || 'fas fa-search'}"></i> ${check.name}`;
            button.addEventListener('click', () => this.openCheckUrl(check.url, this.elements.numberInput.value));
            this.elements.otherChecksButtons.appendChild(button);
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

        // Форматирование UUID
        this.elements.formatBtn.addEventListener('click', () => this.formatUUID());
        this.elements.numberInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.formatUUID();
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

        // Примеры КИГ
        document.querySelectorAll('.example-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.elements.kigInput.value = btn.dataset.kig;
            });
        });

        // Проверка паспорта
        this.elements.passportRegisteredBtn.addEventListener('click', () => this.openPassportUrl('registered'));
        this.elements.passportProfileBtn.addEventListener('click', () => this.openPassportUrl('profile'));
        this.elements.passportMissingBtn.addEventListener('click', () => this.openPassportUrl('missing'));
        this.elements.passportInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.openPassportUrl('registered');
        });
        
        // Ввод в поле паспорта - без ограничений
        this.elements.passportInput.addEventListener('input', (e) => {
            // Убираем любую валидацию при вводе
            e.target.classList.remove('error');
        });

        // UTC время
        this.elements.utcTimeBtn.addEventListener('click', () => this.getUTCTime());
        this.elements.utcCopyBtn.addEventListener('click', () => {
            this.copyToClipboard(this.elements.utcTimeResult.textContent);
        });
        this.elements.utcCopyBtnSimple.addEventListener('click', () => {
            this.copyToClipboard(this.elements.utcTimeResultSimple.textContent);
        });

        // Валидация ввода UUID
        this.elements.numberInput.addEventListener('input', (e) => {
            this.validateUUIDInput(e.target);
        });

        // Очистка статистики
        document.getElementById('sidebarClearStatsBtn').addEventListener('click', () => {
            this.clearStats();
        });
    }

    // Обработчик вставки из буфера обмена
    handlePaste(e) {
        const activeElement = document.activeElement;
        
        // Если фокус на каком-то поле ввода, не обрабатываем
        if (activeElement === this.elements.numberInput || 
            activeElement === this.elements.passportInput || 
            activeElement === this.elements.kigInput) {
            return;
        }
        
        // Получаем текст из буфера обмена
        const text = e.clipboardData.getData('text/plain');
        const cleanText = text.replace(/\D/g, '');
        
        if (cleanText.length > 0) {
            e.preventDefault();
            
            // Проверяем длину - если 23 символа, вставляем в поле UUID
            if (cleanText.length === 23) {
                this.elements.numberInput.value = cleanText;
                this.elements.numberInput.focus();
            }
            // Если 10 символов, вставляем в поле паспорта (но не ограничиваем вводом только цифр)
            else if (cleanText.length === 10) {
                this.elements.passportInput.value = cleanText;
                this.elements.passportInput.focus();
            }
            // Если 9 символов и соответствует формату КИГ, вставляем в поле КИГ
            else if (cleanText.length === 9 && /^(AA|AB)\d{7}$/.test(cleanText.toUpperCase())) {
                this.elements.kigInput.value = cleanText.toUpperCase();
                this.elements.kigInput.focus();
            }
            // Во всех остальных случаях вставляем в поле UUID (обрезаем до 23 символов)
            else {
                this.elements.numberInput.value = cleanText.slice(0, 23);
                this.elements.numberInput.focus();
            }
        }
    }

    // Метод для показа ошибки с анимацией (только при нажатии на кнопки)
    showInputError(inputElement) {
        // Очищаем предыдущий таймер для этого элемента
        if (this.state.errorTimers[inputElement.id]) {
            clearTimeout(this.state.errorTimers[inputElement.id]);
        }
        
        // Убираем предыдущий класс ошибки
        inputElement.classList.remove('error');
        
        // Небольшая задержка для сброса анимации
        setTimeout(() => {
            // Добавляем класс ошибки
            inputElement.classList.add('error');
            
            // Устанавливаем таймер для удаления класса ошибки через 2 секунды
            this.state.errorTimers[inputElement.id] = setTimeout(() => {
                inputElement.classList.remove('error');
                delete this.state.errorTimers[inputElement.id];
            }, 2000);
        }, 10);
    }

    // Вспомогательные методы
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
            
            this.updateStats(cleanNumber);
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

    getUTCTime() {
        const now = new Date();
        const utcTimeWithMs = now.toISOString();
        const utcTimeSimple = now.toISOString().split('.')[0] + 'Z';
        
        this.elements.utcTimeResult.textContent = utcTimeWithMs;
        this.elements.utcTimeResultSimple.textContent = utcTimeSimple;
        this.copyToClipboard(utcTimeWithMs);
    }

    copyToClipboard(text) {
        if (!text || text.includes('Нажмите кнопку') || text === '/s3b-pudsmmu-prod/') {
            return;
        }

        navigator.clipboard.writeText(text).catch(console.error);
    }

    validateUUIDInput(input) {
        input.value = input.value.replace(/\D/g, '').slice(0, 23);
    }

    validateKIGInput(input) {
        let value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 9);
        input.value = value;
    }

    // Работа с вкладками
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

    // Статистика
    getStatsKey() {
        const today = new Date().toISOString().split('T')[0];
        return `${this.config.stats.storageKeyPrefix}${today}`;
    }

    loadStats() {
        const statsKey = this.getStatsKey();
        const savedStats = localStorage.getItem(statsKey);
        
        if (savedStats) {
            return JSON.parse(savedStats);
        }
        
        return {
            total: 0,
            unique: [],
            repeated: 0
        };
    }

    saveStats() {
        const statsKey = this.getStatsKey();
        localStorage.setItem(statsKey, JSON.stringify(this.state.stats));
        this.updateStatsDisplay();
    }

    updateStats(uuid) {
        this.state.stats.total++;
        
        if (!this.state.stats.unique.includes(uuid)) {
            this.state.stats.unique.push(uuid);
        }
        
        this.state.stats.repeated = this.state.stats.total - this.state.stats.unique.length;
        this.saveStats();
    }

    updateStatsDisplay() {
        const sidebarStatTotal = document.getElementById('sidebarStatTotal');
        const sidebarStatUnique = document.getElementById('sidebarStatUnique');
        const sidebarStatRepeated = document.getElementById('sidebarStatRepeated');
        const sidebarStatsContainer = document.getElementById('sidebarStatsContainer');
        
        if (sidebarStatTotal) sidebarStatTotal.textContent = this.state.stats.total;
        if (sidebarStatUnique) sidebarStatUnique.textContent = this.state.stats.unique.length;
        if (sidebarStatRepeated) sidebarStatRepeated.textContent = this.state.stats.repeated;
        if (sidebarStatsContainer) {
            sidebarStatsContainer.style.display = this.state.stats.total > 0 ? 'block' : 'none';
        }
    }

    clearStats() {
        if (this.state.stats.total === 0) return;
        
        if (confirm('Очистить статистику за сегодня?')) {
            this.state.stats = {
                total: 0,
                unique: [],
                repeated: 0
            };
            this.saveStats();
        }
    }
}