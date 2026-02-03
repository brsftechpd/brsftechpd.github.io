// Компонент карточки инструмента

class ToolCardComponent {
    constructor() {
        this.toolsGrid = null;
    }

    init() {
        this.toolsGrid = document.getElementById('toolsGrid');
        if (!this.toolsGrid) {
            console.error('Элемент toolsGrid не найден');
            return;
        }
        
        this.renderToolCards();
        this.bindCardEvents();
    }

    createToolCard(tool, index) {
        const overlay = tool.outdated ? `
            <div class="tool-card-overlay">
                <div class="outdated-text">не актуален</div>
            </div>
        ` : '';
        
        return `
            <div class="tool-card ${tool.outdated ? 'tool-card-unused' : ''}" 
                 style="animation-delay: ${0.1 + index * 0.1}s">
                <div class="tool-version">${tool.version}</div>
                <div class="tool-header">
                    <div class="tool-icon-wrapper ${tool.iconClass}">
                        <i class="${tool.icon}"></i>
                    </div>
                    <div class="tool-info">
                        <h3 class="tool-title">${tool.title}</h3>
                        <p class="tool-description">${tool.description}</p>
                    </div>
                </div>
                <div class="tool-footer">
                    <div class="tool-actions">
                        <button class="btn-instructions" data-tool-id="${tool.id}">
                            <i class="fas fa-question-circle"></i>
                            Подробней
                        </button>
                    </div>
                    <a href="${tool.link}" class="tool-link">
                        Открыть
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                ${overlay}
            </div>
        `;
    }

    renderToolCards() {
        if (!this.toolsGrid) return;
        
        this.toolsGrid.innerHTML = '';
        
        toolsConfig.forEach((tool, index) => {
            this.toolsGrid.innerHTML += this.createToolCard(tool, index);
        });
    }

    bindCardEvents() {
        // Привязываем события к кнопкам "Подробней"
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-instructions')) {
                const button = e.target.closest('.btn-instructions');
                const toolId = button.getAttribute('data-tool-id');
                if (toolId && window.showInstructions) {
                    window.showInstructions(toolId);
                }
            }
        });
    }
}

// Создаем глобальный экземпляр
const toolCardComponent = new ToolCardComponent();