// Главный файл инициализации приложения

class App {
    constructor() {
        this.components = [];
    }

    async init() {
        console.log('Инициализация приложения...');
        
        // Загружаем компоненты в порядке их отображения
        await this.loadComponents();
        
        // Инициализируем менеджер темы ПОСЛЕ загрузки компонентов
        themeManager.init();
        
        // Инициализируем компоненты, которые требуют дополнительной настройки
        this.initComponents();
        
        console.log('Приложение инициализировано успешно!');
    }

    async loadComponents() {
        const componentLoaders = [
            backgroundEffects.load(),
            headerComponent.load(),
            toolsSectionComponent.load(),
            footerComponent.load(),
            modalComponent.load()
        ];
        
        // Загружаем все компоненты параллельно
        await Promise.all(componentLoaders);
    }

    initComponents() {
        // Инициализируем карточки инструментов
        toolCardComponent.init();
    }
}

// Создаем и запускаем приложение
const app = new App();