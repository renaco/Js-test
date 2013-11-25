var container_3 = document.getElementById('container-3');

var container_2_5 = document.createElement('div');
container_2_5.id = 'container-2-5';

var container_2_5_h2 = document.createElement('h2');
container_2_5_h2.innerText = 'Subtitulo 2.5';

container_2_5.appendChild(container_2_5_h2);
document.body.insertBefore(container_2_5, container_3);

document.body.removeChild(container_3);