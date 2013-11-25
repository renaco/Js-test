// objects and functions

var user = {
 cart: [],
 total: 0
};


var book1 = {
 name: 'Javascript: The Good Parts',
 author: 'Douglas Crockford',
 price: 29.99,
 pages: 172,
 releaseDate: new Date('2008-5-1')
};

var book2 = {
 name : 'Javascript: The Definitive Guide',
 author : 'David Flanagan',
 price: 49.99,
 pages: 1100,
 releaseDate: new Date('2011-4-1')
};

addToCart(user, book1);
user.total;


addToCart(user, book2);
user.total;