function addToCart(product, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ product, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product} added to cart!`);
}

function buyNow(product, price) {
    addToCart(product, price);
    window.location.href = "C:\Users\mohan\OneDrive\Documents\E-commerceWebsite\cart.html";
}
