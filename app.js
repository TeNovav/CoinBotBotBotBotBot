document.addEventListener('DOMContentLoaded', () => {
    const userBalance = document.getElementById('user-balance');
    const mineBtn = document.getElementById('mine-btn');

    // Функция для получения идентификатора пользователя (например, из localStorage)
    const getUserId = () => {
        return localStorage.getItem('user_id') || 'default_user_id';
    };


    // Обработчик кнопки "Майнить"
    mineBtn.addEventListener('click', () => {
        const userId = getUserId();
        fetch('http://127.0.0.1:8000/mine_block')
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});