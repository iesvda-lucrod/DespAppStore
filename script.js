document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    // Fetch products from the PostgREST API
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
            // Render products in the UI
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product');

                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p><strong>Price:</strong> $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;

                productList.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});


// Function to add a product to the cart




//Adding products
const addProductForm = document.getElementById('add-product-form');
addProductForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            description,
            price
        })
    })
    .then(response => response.json())
    .then(product => {
        console.log('Product added:', product);
        //location.reload(); // Reload the page to update product list
    })
    .catch(error => console.error('Error adding product:', error));
});
