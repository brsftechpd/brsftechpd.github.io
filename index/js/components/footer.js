// Компонент подвала

class FooterComponent {
    constructor() {
        this.componentId = 'footer-component';
    }

    async load() {
        await loadComponentFromFile(this.componentId, 'index/components/footer.html');
    }
}

// Создаем глобальный экземпляр
const footerComponent = new FooterComponent();