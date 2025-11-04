let x = 2;
let y = 5;
let z = 2;


function Nasobek(){
    let vysledek = x * y * z;
    console.log(vysledek);
}

function Soucet(){
    let vysledek = x + z;
    console.log(vysledek);
}

Nasobek(5)
Soucet(2)

function nactiHodnoty(){
    let cis1 = Number(document.getElementById("cis1").value);
    let cis2 = Number(document.getElementById("cis2").value);
    let cis3 = Number(document.getElementById("cis3").value);

    let vysledek = pocetniOperace();

    document.getElementById("vystup").innerHTML += " " + vysledek;

    
}