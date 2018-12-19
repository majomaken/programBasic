let express = require("express");
let app = express();

app.get('/', inicio);
app.get('/cursos', cursos);

function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong>Home</strong>");
}

function cursos(peticion, resultado)
{
  resultado.send("Este es el <strong>cursos</strong>");
}

app.listen(8989);
