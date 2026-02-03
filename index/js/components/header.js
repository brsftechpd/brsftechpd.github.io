// Компонент шапки

class HeaderComponent {
    constructor() {
        this.componentId = 'header-component';
    }

    async load() {
        await loadComponentFromFile(this.componentId, 'index/components/header.html');
        // Тема инициализируется в theme.js
    }
}

// Создаем глобальный экземпляр
const headerComponent = new HeaderComponent();