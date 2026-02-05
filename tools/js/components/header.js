// Компонент шапки для всех инструментов
class Header {
    constructor(config) {
        this.config = config;
        this.body = document.body;
    }

    render() {
        return `
            <header class="header" id="mainHeader">
                <div class="container">
                    <!-- Кнопка "На главную" -->
                    <button class="home-btn" id="homeBtn" aria-label="На главную">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    
                    <!-- Логотип -->
                    <div class="logo">
                        <div class="logo-icon">
                            <i class="${this.config.icon}"></i>
                        </div>
                        <div class="logo-text">
                            <div class="logo-title">
                                ${this.config.title}
                                <span class="logo-version">${this.config.version}</span>
                            </div>
                            <div class="logo-subtitle">${this.config.description}</div>
                        </div>
                    </div>
                    
                    <!-- Переключение темы -->
                    <div class="nav-controls">
                        <button class="theme-switch" id="themeSwitch" aria-label="Переключить тему">
                            <i class="fas fa-moon"></i>
                        </button>
                    </div>
                </div>
            </header>
        `;
    }

    initEventListeners() {
        // Кнопка "На главную"
        const homeBtn = document.getElementById('homeBtn');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                window.location.href = '/';
            });
        }

        // Переключение темы
        const themeSwitch = document.getElementById('themeSwitch');
        if (themeSwitch) {
            this.setupTheme();
            themeSwitch.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const themeIcon = document.querySelector('.theme-switch i');
        
        if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
            this.setLightTheme();
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        } else {
            this.setDarkTheme();
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    }

    setDarkTheme() {
        this.body.classList.remove('theme-light');
        this.body.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
    }

    setLightTheme() {
        this.body.classList.remove('theme-dark');
        this.body.classList.add('theme-light');
        localStorage.setItem('theme', 'light');
    }

    toggleTheme() {
        const themeIcon = document.querySelector('.theme-switch i');
        
        if (this.body.classList.contains('theme-dark')) {
            this.setLightTheme();
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        } else {
            this.setDarkTheme();
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    }
}