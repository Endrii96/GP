document.addEventListener('DOMContentLoaded', function() {
   
    const itemImageSrc = sessionStorage.getItem('selectedItemImageSrc');
    const itemPrice = sessionStorage.getItem('selectedItemPrice');

    if (itemImageSrc) {
       
        const itemImage = document.createElement('img');
        itemImage.src = itemImageSrc;
        itemImage.alt = "Selected Car Image";

       
        const cartImageContainer = document.getElementById('cart-image-container');
        cartImageContainer.appendChild(itemImage);
    }

    
    if (itemPrice) {
        const totalElement = document.getElementById('total');
        totalElement.textContent = `Total: €${itemPrice}`;
    }

    document.getElementById('checkout-btn').addEventListener('click', function() {
        
        alert('Checkout button clicked!');
    });
});