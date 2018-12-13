
class Pakiman
{
  constructor(n, l , a)
  {
    this.imagen = new Image();
    this.name = n;
    this.life = l;
    this.atack = a;

    this.imagen.src = imagenes[this.name];
  }
  speak()
  {
    alert(this.name);
  }
  show()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>"+ this.name +"</strong> <br />");
    document.write("Life: "+ this.life + "<br />");
    document.write("Atack: "+ this.atack);
    document.write("</p>");
    document.write("<hr />");
  }
}
