var dmofntPrt = document.getElementById('Fenetres-Portes');
var dmovltBtt = document.getElementById('Volets-Battants');
var dmovltRlt = document.getElementById('Volets-Roulants');
var dmoprsJls = document.getElementById('Persiennes-Jalouses');
var dmoprtGrg = document.getElementById('Portes-de-Garage');
var dmoStr = document.getElementById('Stores');
var i;
const casetoHide = [];
casetoHide[0] = dmofntPrt;
casetoHide[1] = dmovltBtt;
casetoHide[2] = dmovltRlt;
casetoHide[3] = dmoprsJls;
casetoHide[4] = dmoprtGrg;
casetoHide[5] = dmoStr;
// HIDE THE SUB OPTION
console.log(casetoHide.length);
for (var i = 0; i < casetoHide.length; i++) {
    casetoHide[i].style.display = 'none';
    console.log(casetoHide[i].id); //OK
}

// console.log(" dmoOptions = "+dmoOptions+"| dmoOptions.value = "+dmoOptions.value+"| dmoOptions.item = "+dmoOptions.item+"| dmoOptions.length = "+dmoOptions.length);
// console.log(dmoOptions.value);
// console.log(dmoOptions.item);
// console.log(dmoOptions.length);


/*
var selectFamille = document.querySelectorAll('.dmo-f-prod-option');

 
    // var dmoOptions = document.getElementsByClassName(elemSelected);
    console.log('Entrer dans la fonction');
    for (var i = 0; i<selectFamille.length; i++) {
        // var valueSlcted = selectFamille[i].getAttribute('value');
        // console.log('Entrer dans le for');
        // console.log("valueSlcted = "+valueSlcted);
        // console.log("casetoHide[i].id = "+casetoHide[i].id);
        casetoShow = casetoHide ;
        console.log(casetoShow);
      selectFamille.addEventListener("click", function()
      {
        var valueSlcted = selectFamille[i].getAttribute('value');
         if (valueSlcted === casetoShow[i].id) {
            console.log('Entrer dans le if ok');
            console.log("valueSlcted = "+valueSlcted);
            casetoShow[i].style.display = 'inline';
            // var espaceAjout = document.createElement('div').appendChild(valueSlcted);
            // document.getElementById('spaceEssai').appendChild(espaceAjout);
        } else {
            console.log('Entrer dans le if no');
            casetoShow[i].style.display = 'none';   
        }
        
    },false);
    };*/





// console.log(dmoOptions[i].value); //OK
        // console.log(dmoOptions[i].label);
            // console.log(casetoHide[i].id);
            // console.log(dmoOptions[i].value);
/*

var selectFamille = document.querySelectorAll('.dmo-f-prod-option');

function showOptions(elemSelected){
    var dmoOptions = document.getElementsByClassName(elemSelected);
    console.log('Entrer dans la fonction');
    for (var i = 0; i<selectFamille.length; i++) {
        var valueSlcted = selectFamille[i].getAttribute('value');
        console.log('Entrer dans le for');
        console.log("valeSlcted= "+valueSlcted);
        console.log("casetoHide[i].id = "+casetoHide[i].id);
        if (valueSlcted === casetoHide[i].id) {
            console.log('Entrer dans le if ok');
            // console.log(casetoHide[i].id);
            // console.log(dmoOptions[i].value);
            casetoHide[i].style.display = 'inline';
        } else {
            console.log('Entrer dans le if no');
            casetoHide[i].style.display = 'none';   
        }
        // console.log(dmoOptions[i].value); //OK
        // console.log(dmoOptions[i].label);
    }

};
selectFamille.addEventListener("click",showOptions('dmo-f-prod-option'),false);


*/