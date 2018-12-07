let keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};
// ver en casa -->>> https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=842:lista-de-eventos-javascript-on-click-dblclick-mouseover-mouseout-change-submit-keypress-cu01159e&catid=78&Itemid=206
// document.addEventListener("onmouseenter", dibujarTeclado);
let canvas = document.getElementById("area_de_dibujo");
let paper = canvas.getContext("2d");
let x = 150;
let y = 150;

let click = document.addEventListener("onclick", canvas);
let doble = document.addEventListener("ondblclick",canvas);
let doonmousedownble = document.addEventListener("onmousedown", canvas);
let onmouseenter = document.addEventListener("onmouseenter",canvas);
let onmouseleave = document.addEventListener("onmouseleave",canvas);
let onmousemove = document.addEventListener("onmousemove",canvas);
let onmouseover = document.addEventListener("onmouseover",canvas);11
let onmouseout = document.addEventListener("onmouseout",canvas);
let onmouseup = document.addEventListener("onmouseup",canvas);
let contextmenu = document.addEventListener("contextmenu",canvas);

console.log(click);
console.log(doble);
console.log(doonmousedownble);
console.log(onmouseenter);
console.log(onmouseleave);
console.log(onmousemove);
console.log(onmouseover);
console.log(onmouseout);
console.log(onmouseup);
console.log(contextmenu);

dibujarLinea("red", 149, 149, 151, 151, paper);

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  };

  function dibujarTeclado(evento)
  {
    let colorcito = "blue";
    let move = 10;
    if (canvas.click = true)
    {
      console.log(canvas.click);
      dibujarLinea(colorcito, x, y, x, y + 10, paper);

    }




  };
