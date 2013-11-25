// dom.js

var dom = newDom();

var container_1_h1 = dom.get('h1');
var container_1 = container_1_h1.parentNode;

container_1.addEventListener('click', function(e){
 console.log('capturing clik en #container-1');
}, true);

container_1.addEventListener('click', function(e){
  console.log('bubbling click en #container-1');
}, false);

container_1_h1.addEventListener('click', function(e){
  console.log('capturing click en #container-1 h1');
}, true);

container_1_h1.addEventListener('click', function(e){
  console.log('bubbling click en #container-1 h1');
}, false);



