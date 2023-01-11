let btn1 = document.getElementById("btng");
let citG = ["Victoire", "Gloire", "Longue vie"];
let citGM = ["pour les", "aux", "a  ", "au"];
let citGF = ["spartans", "Masterchief", "Cortana", "Abdel", "Loïc", "Moukhamad", "Ahmed"];

btn1.addEventListener("click", genererG);

function genererG(){
    let nbcitation = document.getElementById('choix');
    let regex = /^[1-5]$/;

    if(nbcitation.value.trim() == ""){
    let error = document.getElementById("error");

        error.innerHTML = "Selectionner un chiffre entre 1 et 5";
        error.style.color = "red";
    }

     else if (regex.test(nbcitation.value) == false) {
        let error = document.getElementById("error");

        error.innerHTML = "Selectionner un chiffre entre 1 et 5";
        error.style.color = "red";
        e.PreventDefault();
    }
    
    while (citspartan.firstChild){
        citspartan.removeChild(citspartan.firstChild);
    }

    for(i=0;i<nbcitation.value;i++) {
    let random = Math.floor(Math.random()*citG.length);
    let random2 = Math.floor(Math.random()*citGM.length);
    let random3 = Math.floor(Math.random()*citGF.length);
    let view = document.createElement("p");
    view.textContent =  citG[random] + " " + citGM[random2] + " " + citGF[random3];

    let view2 = document.getElementById("citspartan");
    view2.appendChild(view);
    view2.style.color = "white";
    view2.style.fontSize = "large"
    }
}

let btn2 = document.getElementById("btnd");
let citD = ["Mort", "Défaite", "Torture"];
let citDM = ["aux", "pour les", "depuis"];
let citDF = ["spartans", "les cieux", "enfers", "les terriens"];

btn2.addEventListener("click", genererD);

function genererD(){
    let nbcitation = document.getElementById('choix');

    if(nbcitation.value.trim() == ""){
        let error = document.getElementById("error");
        error.innerHTML = "Selectionner un chiffre entre 1 et 5";
        error.style.color = "red";
    }
    
    while (citcovenant.firstChild){
        citcovenant.removeChild(citcovenant.firstChild);
    }

    for(i=0;i<nbcitation.value;i++) {
    let random4 = Math.floor(Math.random()*citD.length);
    let random5 = Math.floor(Math.random()*citDM.length);
    let random6 = Math.floor(Math.random()*citDF.length);
    let view1 = document.createElement("p");
    view1.textContent =  citD[random4] + " " + citDM[random5] + " " + citDF[random6];

    let view3 = document.getElementById("citcovenant");
    view3.appendChild(view1);

    view3.style.color = "yellow";
    view3.style.fontSize = "large"
    }
}

let nbcitation = document.getElementById("choix");
nbcitation.addEventListener("keyup", (event) => {
    let touche = (event.key);
    if (touche === "Enter"){
        genererG();
        genererD();
    }
})
