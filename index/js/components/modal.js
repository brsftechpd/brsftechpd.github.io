// Компонент модального окна

class ModalComponent {
    constructor() {
        this.componentId = 'modal-component';
        this.modal = null;
        this.closeModalBtn = null;
        this.modalTitle = null;
        this.modalDescription = null;
        this.modalFeatures = null;
        this.modalFullLink = null;
    }

    async load() {
        await loadComponentFromFile(this.componentId, 'index/components/modal.html');
        this.initElements();
        this.bindEvents();
    }

    initElements() {
        this.modal = document.getElementById('instructionModal');
        this.closeModalBtn = document.getElementById('closeModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalDescription = document.getElementById('modalDescription');
        this.modalFeatures = document.getElementById('modalFeatures');
        this.modalFullLink = document.getElementById('modalFullLink');
    }

    bindEvents() {
        if (this.closeModalBtn) {
            this.closeModalBtn.addEventListener('click', () => this.hide());
        }

        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.hide();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
                this.hide();
            }
        });
    }

    show() {
        if (this.modal) {
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    hide() {
        if (this.modal) {
            this.modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    setContent(toolId) {
        const toolData = instructions[toolId];
        
        if (!toolData) {
            alert('Инструкция для этого инструмента находится в разработке.');
            return false;
        }
        
        if (this.modalTitle) this.modalTitle.textContent = toolData.title;
        if (this.modalDescription) this.modalDescription.textContent = toolData.description;
        
        if (this.modalFeatures) {
            this.modalFeatures.innerHTML = '';
            toolData.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                this.modalFeatures.appendChild(li);
            });
        }
        
        if (this.modalFullLink) this.modalFullLink.href = toolData.fullLink;
        
        return true;
    }
}

// Создаем глобальный экземпляр
const modalComponent = new ModalComponent();

// Делаем функцию доступной глобально для кнопок
window.showInstructions = function(toolId) {
    if (modalComponent.setContent(toolId)) {
        modalComponent.show();
    }
};