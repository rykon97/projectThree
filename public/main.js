document.querySelector('#cart').addEventListener('click', (e) => {
    document.querySelector('.cart__overlay').classList.toggle('hidden');
});

document.querySelector('.cart .close').addEventListener('click', (e) => {
    document.querySelector('.cart__overlay').classList.toggle('hidden');
});