
let cart=[];
function addToCart(id){
let p=products.find(x=>x.id==id);
cart.push(p);
alert(p.name + " added to cart");
}
