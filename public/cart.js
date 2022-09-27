const calculateSubtotal = () => {
    let subtotal = 0;

    document.querySelectorAll('.item').forEach(item => {
        subtotal += parseInt(item.querySelector('h5').innerHTML.replace('$', ''));
    });

    document.querySelector('.subtotal span').innerHTML = '$' + subtotal;
    document.querySelector('.vat span').innerHTML = '$' + Math.floor(subtotal * 0.2);
    document.querySelector('.total span').innerHTML = '$' + (subtotal + Math.floor(subtotal * 0.2));
};


document.querySelectorAll(".number .minus, .number .plus").forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.querySelector('h5').innerHTML = '$' + parseInt(e.target.parentNode.parentNode.querySelector('h4').innerHTML.replace('$', '')) * e.target.parentNode.querySelector('input').value;
        
        calculateSubtotal();
    });
});

document.querySelectorAll('.shoping-conteiner a.close').forEach(item => {
    item.addEventListener('click', (e) => {
        calculateSubtotal();
    })
});

window.onload = () => {
    calculateSubtotal();
};