const angulo1 = 30;
const angulo2 = 60;
const angulo3 = 90;

if (angulo1 + angulo2 + angulo3 == 180){
    console.log(true)
}

else if (angulo1 < 0 && angulo2 < 0 && angulo3 <0) {
    console.log("O valor inserido é invalido!")
}

else {
    console.log(false)
}