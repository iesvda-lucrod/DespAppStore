//CART
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    console.log("adtocart1");
    const product = { id: productId, quantity: 1 }; // Basic structure
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSummary();
}

function updateCartSummary() {
    const cartSummary = document.getElementById('cart-summary');
    cartSummary.innerHTML = '';
    cart.forEach(item => {
        const productInCart = document.createElement('div');
        productInCart.innerHTML = `Product ID: ${item.id} - Quantity: ${item.quantity}`;
        cartSummary.appendChild(productInCart);
    });
}

function getCartSummary() {
    return cart;
}

updateCartSummary();

//export {addToCart, getCartSummary};