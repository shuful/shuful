const products = [
    { id: 1, name: 'veil', price: 1000, img: 'veil 1,hiluna.jpg' },
    { id: 2, name: 'Product 2', price: 1500, img: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: 2000, img: 'image3.jpg' },
    { id: 4, name: 'Product 4', price: 2500, img: 'image4.jpg' },
    { id: 5, name: 'Product 5', price: 3000, img: 'image5.jpg' },
    { id: 6, name: 'Product 6', price: 3500, img: 'image6.jpg' }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            document.querySelectorAll('.content').forEach(div => div.classList.add('hidden'));
            section.classList.remove('hidden');
        });
    });
});

function loadProducts() {
    const container = document.querySelector('.products-grid');
    products.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₦${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const container = document.getElementById('cart-items');
    container.innerHTML = '';
    cart.forEach(product => {
        container.innerHTML += `<p>${product.name} - ₦${product.price}</p>`;
    });
    if(cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
    }
    document.getElementById('cart-count').innerText = cart.length;
}
