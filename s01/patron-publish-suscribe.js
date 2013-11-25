// patron publish / suscribe


var UserNotifier = (function(){

  var channels = {};

  return {
    publish : function(channel) {
      if (!channels[channel]){
        return false;
      }
     
      var subscribers = channels[channel],
      subscribers_length = subscribers.length,
      i;

      var args = Array.prototype.slice.call(arguments, 1);
     
      for (i = 0; i < subscribers_length; i++) {
        subscribers[i].func.apply(null, args);
      }

      return this;
    },
    subscribe : function(channel, email, func) {
    if (channels[channel] == undefined) {
      channels[channel] = [];
    }

    channels[channel].push({
      email : email,
      func : func
    });

    return email;
   },
   
   unsuscribe : function(email) {
    for (var c in channels) {
     var channel = channels[c];
     for (var i = 0; i < channel.length; i++) {
      if (channel[i].email === email) {
        channel.splice(i, 1);
        return email;
      }
     }
    }

    return this;
   }
  };
})();