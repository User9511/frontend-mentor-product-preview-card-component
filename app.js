const checkoutButton = document.getElementById("btn-id")
const cartLogo = document.getElementById("cart-id")

checkoutButton.onclick = function() {
  cartLogo.classList.toggle('rotate');
}