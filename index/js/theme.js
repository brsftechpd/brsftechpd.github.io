// Управление темой

class ThemeManager {
    constructor() {
        this.themeSwitch = null;
        this.themeIcon = null;
        this.body = document.body;
    }

    init() {
        this.themeSwitch = document.getElementById('themeSwitch');
        if (this.themeSwitch) {
            this.themeIcon = this.themeSwitch.querySelector('i');
            this.setupTheme();
            this.bindEvents();
        } else {
            console.warn('Кнопка переключения темы не найдена. Попробуйте позже.');
            // Попробуем снова через короткое время
            setTimeout(() => this.init(), 100);
        }
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
            this.setLightTheme();
        } else {
            this.setDarkTheme();
        }
    }

    setDarkTheme() {
        this.body.classList.remove('theme-light');
        this.body.classList.add('theme-dark');
        if (this.themeIcon) {
            this.themeIcon.classList.remove('fa-sun');
            this.themeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', 'dark');
    }

    setLightTheme() {
        this.body.classList.remove('theme-dark');
        this.body.classList.add('theme-light');
        if (this.themeIcon) {
            this.themeIcon.classList.remove('fa-moon');
            this.themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', 'light');
    }

    toggleTheme() {
        if (this.body.classList.contains('theme-dark')) {
            this.setLightTheme();
        } else {
            this.setDarkTheme();
        }
    }

    bindEvents() {
        if (this.themeSwitch) {
            this.themeSwitch.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Создаем глобальный экземпляр
const themeManager = new ThemeManager();