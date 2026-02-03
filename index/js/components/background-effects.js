// Компонент фоновых эффектов

class BackgroundEffects {
    constructor() {
        this.componentId = 'background-effects-component';
    }

    async load() {
        const html = `
            <div class="background-effects">
                <div class="gradient-orbs"></div>
                <div class="gradient-orbs"></div>
                <div class="grid-pattern"></div>
            </div>
        `;
        
        await loadComponent(this.componentId, html);
        this.initMouseMoveEffect();
    }

    initMouseMoveEffect() {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            const orbs = document.querySelectorAll('.gradient-orbs');
            orbs.forEach((orb, index) => {
                const speed = index === 0 ? 0.02 : 0.01;
                orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }
}

// Создаем глобальный экземпляр
const backgroundEffects = new BackgroundEffects();