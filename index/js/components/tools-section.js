// Компонент секции инструментов

class ToolsSectionComponent {
    constructor() {
        this.componentId = 'main-content-component';
    }

    async load() {
        await loadComponentFromFile(this.componentId, 'index/components/tool-section.html');
    }
}

// Создаем глобальный экземпляр
const toolsSectionComponent = new ToolsSectionComponent();