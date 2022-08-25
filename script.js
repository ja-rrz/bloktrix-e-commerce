let atcBtn = document.getElementById("atc-btn")
let cartItems = document.getElementById("cart-item")
function changeContent(){
 atcBtn.textContent = "Added to Cart"
 atcBtn.style.color = "black"
 atcBtn.style.backgroundColor = "rgb(156, 191, 221)"
 atcBtn.style.border = "1px black solid"
 cartItems.textContent = "(1)"
}