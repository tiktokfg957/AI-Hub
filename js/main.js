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
        if (indicator) indicator.style.opacity = indicator.style.opacity === '0.3' ? '1' : '0.3';
    }, 500);
}

// Клики на кнопки (пока просто alert)
document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        alert('Демо-режим. Функционал будет доступен в следующей версии.');
    });
});
