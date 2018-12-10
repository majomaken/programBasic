let vp = document.getElementById("villaplatzi");
let paper = vp.getContext("2d");

let background = {
  url: "tile.png",
  cargaOK: false
};

let cow = {
  url: "vaca.png",
  cargaOK: false
};

let quantity = aleatorio(1, 50);

background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load", loadBackground);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCow);

// let pig = new Image();
// pig.src = "cerdo.png";
// pig.addEventListener("load", loadPig);
//
// let chicken = new Image();
// chicken.src = "pollo.png";
// chicken.addEventListener("load", loadChicken);

//Canvas trabaja por capas
function loadBackground()
{
  background.cargaOK = true;
  draw();
};
function loadCow()
{
  cow.cargaOK = true;
  draw();
};

function draw()
{
  if (background.cargaOK)
  {
    paper.drawImage(background.image, 0, 0);
  }
  if (cow.cargaOK)
  {
    console.log(quantity);
    for (var v = 0; v < quantity; v++)
    {
      let x = aleatorio(0, 420);
      let y = aleatorio(0, 420);
      paper.drawImage(cow.image, x, y);
    }
  }
};

// function drawCow()
// {
//   paper.drawImage(cow, 10, 10);
// };
//
// function drawPig()
// {
//   paper.drawImage(pig, 10, 300);
// };
//
// function drawChicken()
// {
//   paper.drawImage(chicken, 300, 150);
// };


let z;
// document.write(z);

for(var i=0; i<20; i++)
{
  //-5, 5
  z = aleatorio(10, 20);
  // document.write(z + ", ");
}

function aleatorio(min, maxi)
{
  let result;
  result = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return result;
};

// Dibujar aleatoriamente vacas, cerdos y pollos.
