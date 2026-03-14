let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image){

cart.push({
name:name,
price:price,
image:image
});

localStorage.setItem("cart", JSON.stringify(cart));

alert("Product added to cart");

updateCartCount();
}

function updateCartCount(){

let cartCount = document.getElementById("cart-count");

if(cartCount){
cartCount.innerText = cart.length;
}

}

updateCartCount();

