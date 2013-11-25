// patron module

var users = [];
  function add_user(user){
    user.push(user);
  }
  
  function remove_user(){
    var index = users.indexOf(user);
  }
  
  function count_users() {
    return users.length;
  }
  
  var UserModule =(function() {
   var users = [];
   
   return {
     add : function(user){
       user.push(user);
     },
     remove : function(user) {
       users.splice(user.indexOf(user), 1);
     },
     count : function() {
       return users.length;
     },
     list : function() {
        return users;
     }
   };
  })();