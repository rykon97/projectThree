document.querySelector('#cart').addEventListener('click', (e) => {
    document.body.style.position = 'fixed';
    document.querySelector('.cart__overlay').classList.toggle('hidden');
});

document.querySelector('.cart .close').addEventListener('click', (e) => {
    document.body.style.position = 'static';
    document.querySelector('.cart__overlay').classList.toggle('hidden');
});

document.querySelector('.cart__overlay').addEventListener('click', (e) => {
    if(e.target.classList.contains('cart__overlay')) {
        document.body.style.position = 'static';
        document.querySelector('.cart__overlay').classList.toggle('hidden');
    }
});

document.querySelectorAll(".best-selling__cart").forEach(item => {
    item.querySelectorAll('span')[0].addEventListener('click', (e) => {
        const element = e.target.parentNode.parentNode.parentNode.parentNode;

        document.querySelector('.cart__bag').innerHTML += `
        <div class="cart__item">
            <a class="cart__image" href=""></a>
            <div class="cart__info">
                <h1>${element.querySelector('.best-selling__name').innerHTML}</h1>
                <h3 class="cart__color">Color:  Yellow</h3>
                <h3 class="cart__size">Size: L</h3>
                <span> - 4 +</span><span>${element.querySelector('.best-selling__cost').innerHTML}</span>
            </div>
        </div>`;
    });
});

document.querySelectorAll(".number").forEach(item => {
    item.querySelector('.minus').addEventListener('click', () => {
        const input = parseInt(item.querySelector('input').value);
        if(input > 1) {
            item.querySelector('input').value = input - 1;
            
        }
    });
    
    item.querySelector('.plus').addEventListener('click', () => {
        const input = parseInt(item.querySelector('input').value);
        if(input < 100) {
            item.querySelector('input').value = input + 1;
        }
    });
});

document.querySelectorAll(".size-wish").forEach(item => {
    item.querySelectorAll('a').addEventListener('click', (e) => {
        
    });
});