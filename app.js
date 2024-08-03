document.addEventListener('DOMContentLoaded', () => {
    const userBalance = document.getElementById('user-balance');
    const mineBtn = document.getElementById('mine-btn');

    // Функция для получения идентификатора пользователя (например, из localStorage)
    const getUserId = () => {
        return localStorage.getItem('user_id') || 'default_user_id';
    };

    // Пример установки начального баланса
    userBalance.textContent = '0.05 BTC';

    // Обработчик кнопки "Майнить"
    mineBtn.addEventListener('click', () => {
        const userId = getUserId();
        fetch(http://127.0.0.1:8000/mine?user_id=${userId})
            .then(response => response.text())
            .then(data => {
                alert(data);  // Показываем ответ от сервера пользователю
                // Обновляем баланс пользователя в интерфейсе
                fetch(http://127.0.0.1:8000/get_balance?user_id=${userId})
                    .then(response => response.text())
                    .then(balanceData => {
                        userBalance.textContent = balanceData.split(' ')[2] + ' BTC';
                    });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});