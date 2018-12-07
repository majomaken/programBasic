let keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};
document.addEventListener("keyup", dibujarTeclado);

let canvas = document.getElementById("area_de_dibujo");
let paper = canvas.getContext("2d");
let x = 150;
let y = 150;

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

    switch (evento.keyCode)
     {
      case keys.UP:
        dibujarLinea(colorcito, x, y, x, y - move, paper);
        y = y - move;
      break;
      case keys.DOWN:
        dibujarLinea(colorcito, x, y, x, y + move, paper);
        y = y + move;
      break;
      case keys.LEFT:
        dibujarLinea(colorcito, x, y, x - move, y, paper);
        x = x - move;
      break;
      case keys.RIGTH:
        dibujarLinea(colorcito, x, y, x + move, y, paper);
        x = x + move;
      break;
    }

  };
