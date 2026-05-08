// Эффект наведения на карточки (усиление неона)
const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Имитация анимации печати в чате (демо)
const chatPreview = document.querySelector('.chat-preview');
if (chatPreview) {
    setInterval(() => {
        const indicator = document.querySelector('.typing-indicator');
        if (indicator) {
            indicator.style.opacity = indicator.style.opacity === '0.3' ? '1' : '0.3';
        }
    }, 500);
}

// ========== КЛЮЧЕВОЙ МОМЕНТ ==========
// Перехватываем клики по всем элементам, кроме кнопки с id 'chatBtn'
document.addEventListener('click', function(e) {
    // Если клик был по кнопке чата или её родителю-ссылке – ничего не делаем
    const target = e.target;
    const chatButton = document.getElementById('chatBtn');
    if (chatButton && (target === chatButton || chatButton.contains(target))) {
        return; // пропускаем, переход по ссылке сработает стандартно
    }
    // Для всех остальных кнопок .card-btn показываем alert
    const btn = target.closest('.card-btn');
    if (btn && btn.id !== 'chatBtn') {
        e.preventDefault();
        e.stopPropagation();
        alert('Демо-режим. Функционал будет доступен в следующей версии.');
    }
}, false);
