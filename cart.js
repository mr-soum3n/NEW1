let cart = []

function addToCart(name, price){

cart.push({name,price})

renderCart()

}


function renderCart(){

const list = document.getElementById("cart-items")

const totalEl = document.getElementById("cart-total")

list.innerHTML = ""

let total = 0

cart.forEach(item =>{

const li = document.createElement("li")

li.textContent = item.name + " - ₹" + item.price

list.appendChild(li)

total += item.price

})

totalEl.textContent = total

}


function checkout(){

let order = cart.map(i=>i.name + " ₹"+i.price).join("%0A")

let total = document.getElementById("cart-total").textContent

window.location.href =
"mailto:frostwolfcustom@gmail.com?subject=FWC Sticker Order&body=Order:%0A"+order+"%0A%0ATotal: ₹"+total

}
