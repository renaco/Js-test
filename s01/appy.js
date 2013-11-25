var sumTotal = function() {
  var prices = arguments, total = 0;

  for (var i = 1; i < arguments.length; i++) {
    var price = arguments[i];
    total = total + price;
  }

  return total;
};


var addToCart = function(user, book) {
  user.cart.push(book);

  var total = [0.00];
  
for (var i = 0; i < user.cart.length; i++) {
  var purchasedBook = user.cart[i];
  total.push(purchasedBook.price);
}

user.total = sumTotal.apply(this, total);
};