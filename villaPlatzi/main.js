let vp = document.getElementById("villaplatzi");
let paper = vp.getContext("2d");
let map = "tile.png";

let image = new Image();
image.src = map;
image.addEventListener("load", draw);

function draw()
{
  paper.drawImage(image, 0, 0);
};



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
