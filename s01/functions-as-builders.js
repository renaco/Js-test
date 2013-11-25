
var User = function User(attributes) {
this.id = attributes.id;
this.email = attributes.email;
this.nickname = attributes.nickname;
};

var user = new User({
 id: 616,
 email:'renanromeroruiz@gmail.com',
 nickname: 'renaco'
});