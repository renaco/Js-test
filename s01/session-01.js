

var book = {
  name: 'Javascript: The Good Parts',
  author: 'Douglas Crockford',
  price: 29.99,
  pages:172,
  releaseDate: new Date('2008-5-1')
};


var attribute = attributes


for in (attributes in book) {
  console.log(attribute + ' : ' + book[attribute]);
}



book.releaseDate instanceof Date;

book.releaseDate instanceof Object;

book.pages instanceof Number;

book.name instanceof String;

typeof book.pages;

typeof book.releaseDate;

typeof book.name;

book.hasOwnProperty('pages');
// true

book.hasOwnProperty('SoldOut');
// false

