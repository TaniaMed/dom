function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

let entireAmount = 0;
let numberOfProducts = 0;
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    container.addEventListener('click', function(event) {
        let dataPrice = event.target.getAttribute('data-price');
        entireAmount += Number(dataPrice);
        numberOfProducts += 1;
        
        const cartCount = document.getElementById('cart-count');
        cartCount.innerHTML = numberOfProducts;
        
        const cartTotalPrice = document.getElementById('cart-total-price');
        getPriceFormatted(cartTotalPrice)
        cartTotalPrice.innerHTML = getPriceFormatted(entireAmount);
    });
});
 