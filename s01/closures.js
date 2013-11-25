var UserName = function(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;

  var sayHi = function() {
   return 'Hello, my name is ' + fullName;
  };

 return sayHi();
};

UserName('Renan', 'Romero');