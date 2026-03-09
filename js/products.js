
let products=[
{id:1,name:"Ride Hard Sticker",price:29,image:"https://via.placeholder.com/200"},
{id:2,name:"Biker Mode Sticker",price:29,image:"https://via.placeholder.com/200"},
{id:3,name:"Garage Life Sticker",price:39,image:"https://via.placeholder.com/200"}
];

let html="";
products.forEach(p=>{
html+=`
<div class="productCard">
<img src="${p.image}">
<h3>${p.name}</h3>
<p class="price">₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>
`;
});

document.getElementById("products").innerHTML=html;
