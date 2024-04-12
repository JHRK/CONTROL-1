function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}


// from http://inertia-momentum-scroll.webflow.io/vanilla-js-version 
// CJHersh https://webflow.com/CJHersh
//valeu amigo CJHersh, teu código está sendo muito bem aproveitado aqui

const body = document.body;
const main = document.getElementById('main');

let sx = 0;
let sy = 0;

let dx = sx;
let dy = sy;

body.style.height = main.clientHeight + 'px';

main.style.position = 'sticky';
main.style.top = 0;
main.style.left = 0;


window.addEventListener('scroll', scroll);

function scroll() {

  sx = window.scrollX;
  sy = window.scrollY;
}



window.requestAnimationFrame(render);

function render() {

  dx = lerp(dx, sx, 0.05);
  dy = lerp(dy, sy, 0.05);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  console.log(dy);
  

  main.style.transform = `translate(-${dx}px, -${dy}px)`;
  

  window.requestAnimationFrame(render);
}


function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}
