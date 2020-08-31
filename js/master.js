function dados() {
  var ran1 = Math.round(numRand(1, 6));
  var ran2 = Math.round(numRand(1, 6));

  var d61 = "img/dado" + ran1 + ".png";
  var d62 = "img/dado" + ran2 + ".png";

  document.querySelector("img.img-fluid.dice1").src = d61;
  document.querySelector("img.img-fluid.dice2").src = d62;

  if (ran1 > ran2) {
    document.querySelector("h1").innerHTML =
      "<i class='fa fa-dice-d6'></i> Jugador 2 Gana";
  } else if (ran2 > ran1) {
    document.querySelector("h1").innerHTML =
      "Jugador 1 Gana  <i class='fa fa-dice-d6'></i>";
  } else {
    document.querySelector("h1").innerHTML =
      "<i class='fa fa-dice'></i> Empate <i class='fa fa-dice'></i>";
  }
}
function numRand(min, max) {
  return min + Math.random() * (max - min);
}
