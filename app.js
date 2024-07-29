document.addEventListener('DOMContentLoaded', () => {
    const userBalance = document.getElementById('user-balance');
    const transferBtn = document.getElementById('transfer-btn');
    const mineBtn = document.getElementById('mine-btn');


    // Пример установки начального баланса
    userBalance.textContent = '0.05 BTC';


    // Обработчик кнопки "Перевести"
    transferBtn.addEventListener('click', () => {
        alert('Переход к переводу');
        // Здесь можно добавить код для открытия страницы перевода
    });



    mineBtn.addEventListener('click', () => {
        fetch('http://127.0.0.1:8000/mine_block')
            .then(response => response.text())
            .then(data => {
                const balance = parseFloat(userBalance.textContent)
                userBalance.textContent = (balance + 0.01) + 'BTC'
            })
    })


});