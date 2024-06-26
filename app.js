document.addEventListener('DOMContentLoaded', () => {
    const userBalance = document.getElementById('user-balance');
    const historyBtn = document.getElementById('history-btn');
    const transferBtn = document.getElementById('transfer-btn');

    // Пример установки начального баланса
    userBalance.textContent = '0.05 BTC';

    // Обработчик кнопки "История счета"
    historyBtn.addEventListener('click', () => {
        alert('Переход к истории счета');
        // Здесь можно добавить код для открытия истории счета
    });

    // Обработчик кнопки "Перевести"
    transferBtn.addEventListener('click', () => {
        alert('Переход к переводу');
        // Здесь можно добавить код для открытия страницы перевода
    });
});