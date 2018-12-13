let imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

let lib = [];
lib.push(new Pakiman("Pokacho", 80, 50));
lib.push(new Pakiman("Cauchin", 100, 30));
lib.push(new Pakiman("Tocinauro", 120, 40));

// for (i = 0; i <= lib.length; i++)
// {
//   lib[i].show();
// }
// in me muestra el index y of el contenido gracias a ECMAScript2015
for (let pakin of lib)
{
  pakin.show();
}
