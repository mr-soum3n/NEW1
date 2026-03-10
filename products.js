fetch("stickers.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("sticker-container")

data.forEach(sticker => {

const card = document.createElement("div")
card.className = "product-card"

card.innerHTML = `
<img src="${sticker.image}">
<h3>${sticker.name}</h3>
<p class="price">₹${sticker.price}</p>
<button onclick="addToCart('${sticker.name}',${sticker.price})">
Add to Cart
</button>
`

  "badge":"HOT"
  
container.appendChild(card)

})

})


let visibleProducts = 8;

function renderProducts(data){

const container = document.getElementById("sticker-container");
container.innerHTML="";

data.slice(0,visibleProducts).forEach(sticker =>{

const card=document.createElement("div");
card.className="product-card";

card.innerHTML=`
<img src="${sticker.image}">
<h3>${sticker.name}</h3>
<p class="price">₹${sticker.price}</p>
<button>Add to Cart</button>
`;

container.appendChild(card);

});

}

document.getElementById("showMoreBtn").onclick=function(){
visibleProducts += 4;
loadProducts();
};
