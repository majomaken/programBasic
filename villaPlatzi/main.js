let z = aleatorio(10, 20);
document.write(z);

function aleatorio(min, maxi)
{
  let result;

  result = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return result;
};
