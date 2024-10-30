<script>
  function addToCart(name, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name, price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${name} added to cart.`);
    window.location.href = 'cart.html';
  }

  function buyNow(name, price) {
    const cartItems = [{ name, price }]; // Direct purchase item as a new array
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = 'payment.html';
  }
</script>
