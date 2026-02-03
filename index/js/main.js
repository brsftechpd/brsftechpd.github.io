// Точка входа приложения

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await app.init();
    } catch (error) {
        console.error('Ошибка инициализации приложения:', error);
        // Показываем пользователю сообщение об ошибке
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #ef4444;
            color: white;
            padding: 1rem;
            text-align: center;
            z-index: 10000;
        `;
        errorDiv.textContent = 'Произошла ошибка при загрузке приложения. Пожалуйста, обновите страницу.';
        document.body.appendChild(errorDiv);
    }
});