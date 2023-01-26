// SELECTIONNER LES QUESTIONS-REPONSES--------------
var selectOption = document.getElementsByName('dmo-f-produits')[0];
var selctSubOption = document.getElementsByClassName('dmosuboptionOne');
var dmosubOption = document.getElementsByClassName('dmoQuest');
console.log(selectOption);
console.log(selctSubOption);
var selectbdcOption = document.getElementsByName('bdc-frns-name')[0];
var selectbdcsubOption = document.getElementsByClassName('bdcsubOptionOne');
var bdcQuestOpt = document.getElementsByClassName('bdcForm');
// HIDE SUB OPTION
function hideOption(optionToHide){
    for (var i = 0; i < optionToHide.length; i++) {
        optionToHide[i].style.display = 'none';
        // console.log(optionToHide[i].id); //OK
    }
}
hideOption(selctSubOption);
hideOption(dmosubOption);
hideOption(selectbdcsubOption);
hideOption(bdcQuestOpt);

// ECOUTEUR EVENT SUR PAGE EN CHARGEMENT + SHOW OPTION--------------------------
window.onload = function () {

    selectOption.onchange = function showSubOption() {
        hideOption(selctSubOption); //Enlever le choix effectuer précedement
        console.log('We entered!');
        var slctsubOption = document.getElementById(this.value);
        if (!slctsubOption) alert('No sub question!');
        slctsubOption.style.display = 'block';
    }
    for(var i=0; i<selctSubOption.length; i++)
    selctSubOption[i].onchange = function () {
      hideOption(dmosubOption);
      var dmosbOpt = document.getElementById(this.value);
      if(!dmosbOpt) alert('Il n y a pas d element :' + this.value);
      dmosbOpt.style.display = 'block';
    }

    selectbdcOption.onchange = function (){
        hideOption(selectbdcsubOption);
        hideOption(bdcQuestOpt);
        var slctbdcsubOption = document.getElementById(this.value);
        if(!slctbdcsubOption)alert('il n y a pas d element:' + this.value);
        slctbdcsubOption.style.display = 'block';
    }
    for(var i=0; i<selectbdcsubOption.length; i++)
    selectbdcsubOption[i].onchange = function () {
      hideOption(bdcQuestOpt);
      var bdcformOpt = document.getElementById(this.value);
      if(!bdcformOpt) alert('Il n y a pas d element :' + this.value);
      bdcformOpt.style.display = 'block';
    }

}
