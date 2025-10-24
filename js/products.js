const API = "https://dummyjson.com/products";
const container = document.getElementById("product-container");

// Fetch products
async function fetchProducts(category = "") {
    let url = API;
    if(category) url = `${API}/category/${category}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.products; // array of products
}

// Render products
async function renderProducts(category = "") {
    const products = await fetchProducts(category);
    container.innerHTML = ""; // clear previous
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style.border = "1px solid #ccc";
        card.style.padding = "10px";
        card.style.width = "200px";
        card.style.textAlign = "center";

        card.innerHTML = `
            <img src="${p.thumbnail}" alt="${p.title}" style="width:150px; height:150px;">
            <h4>${p.title}</h4>
            <p>$${p.price}</p>
            <p>Rating: ${p.rating}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;

        container.appendChild(card);
    });
}

// Load all products initially
renderProducts();

// Add category button event listeners
document.querySelectorAll("#categories button").forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;
        renderProducts(category);
    });
});
