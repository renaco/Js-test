// prototype

User.prototype.getEmail = function() {
 return this.email;
};

user = new User({});
user.setEmail('renanromeroruiz@gmail.com');
user.getEmail();


String.prototype.capitalize = function() {
 var firstLetter = this[0].toUpperCase();
 var remainder = Array.prototype.slice.call(this, 1).join('');
 return firstLetter + remainder;
};

"título".capitalize();