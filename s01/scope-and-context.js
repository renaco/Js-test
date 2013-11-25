// scope and context

var UserAge = function(age) {
 return {
  sayAge: function() {
    var adult = false;

    if (age >= 18){
     adult = true;
    }
  
    return age + ' years old'; //

  },
  isAdult: function() {
    return adult;
  }
 };
};

UserAge(23).sayAge();
UserAge(23).isAdult();


var UserAge = function(age) {
 return {
  adult: false,
  sayAge: function() {
    return age + 'years old';
  },
  isAdult: function() {
    this.adult = age >= 18;
    return this.adult;
  }
 };
};