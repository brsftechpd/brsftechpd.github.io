// Утилиты для работы с проектом

// Функция для загрузки HTML компонентов
async function loadComponent(componentId, htmlContent) {
    const element = document.getElementById(componentId);
    if (element) {
        element.innerHTML = htmlContent;
        return true;
    }
    return false;
}

// Функция для загрузки компонента из файла
async function loadComponentFromFile(componentId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки ${filePath}: ${response.status}`);
        }
        const html = await response.text();
        return await loadComponent(componentId, html);
    } catch (error) {
        console.error('Ошибка загрузки компонента:', error);
        return false;
    }
}

// Функция для форматирования шаблона
function formatTemplate(template, data) {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
        return data[key] !== undefined ? data[key] : match;
    });
}