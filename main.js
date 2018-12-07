let dibujo = document.getElementById("dibujo");
let lienzo = dibujo.getContext("2d");
let lineas = 30;
let l = 0;
// Super porder para ver lo que las variables tienen por dentro

while(l < lineas)
{
  let yi = 10 * l;
  let xf = 10 * (l + 1);
  dibujarLinea("blue", 0, yi, xf, 300);
  l++;
}

dibujarLinea("#AFA",1,1,1,299);
dibujarLinea("#AFA",1,299,299,299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
};
