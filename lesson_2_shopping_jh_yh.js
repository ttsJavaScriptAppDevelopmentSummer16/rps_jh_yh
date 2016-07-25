var shopping = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
console.log(shopping);

shopping.push('froot loops');
console.log(shopping);

shopping[4] = 'fair trade coffee';
console.log(shopping);

shopping.splice (2,3, 'rice', 'beans');
console.log(shopping);

var cart = [];
console.log(cart);

cart = shopping.pop();

console.log(cart);
console.log(shopping);

var x = shopping.shift();

console.log("X = " + x);
console.log("SHOPPING = " + shopping);
console.log("CART = " + cart);

cart = cart + ",  "+ x;
console.log(cart);
// console.log("RIGHT SO FAR");

var i = shopping.length;
console.log("i = " + i);

while (i > shopping.length){

    cart = shopping.pop();

    var x = shopping.shift();

    console.log("X = " + x);
    console.log("SHOPPING = " + shopping);
    console.log("CART = " + cart);

    cart = cart + ",  "+ x;
    console.log(cart);
    i--;
}
cart.reverse();
console.log(cart);
