let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
function addToCart(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.title} added to cart!`);
        });
}

// Optional: view cart in console for now
function showCart() {
    console.log("Cart Items:", JSON.parse(localStorage.getItem("cart") || "[]"));
}
