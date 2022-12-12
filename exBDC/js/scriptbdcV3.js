//SELECTIONNER LE BON FORMULAIRE SELON L'OPTION CHOISI-------------------------------------------
//ON CACHE LES BONs DE COMMANDE----
var hiddenForm = document.getElementsByClassName('tableauBDC');
var nmSlctForm = document.getElementsByClassName('selectF');
var closeBTNBDC = document.getElementsByClassName('closeBtn');
for (var i=0;i<hiddenForm.length;i++){
  hiddenForm[i].style.display = 'none';
//   closeBTNBDC[i].style.display = 'none';
}

// console.log(hiddenForm);
// console.log(nmSlctForm);
// console.log(nmSlctForm[1].value);//PERMET DE SELECTION LA VALEUR
// console.log(hiddenForm[1].id);//PERMET DE SELECTIONNER L'ID DU CONTENU
//ON MONTRE LES BONS DE COMMANDE----
function showBDC(number)
{
    var i = number;
    // console.log('cest cliquée');
    // console.log(hiddenForm.length);
    // for (let i = 0;i < hiddenForm.length; i++)
    // for (let i = number ;i != hiddenForm[i]; i++){
    //     // console.log(hiddenForm[i].id + ' pour ' + nmSlctForm[i].value);
     if (nmSlctForm[i].value === hiddenForm[i].id){
        hiddenForm[i].style.display = 'block';
        // closeBTNBDC[i].style.display = 'inline';
        hiddenForm[!i].style.display = 'none';
        // closeBTNBDC[!i].style.display = 'none';
     } 
    // else if (hiddenForm[i].id !== nmSlctForm[i].value) {
    //     hiddenForm[i].style.display = 'none';
    // }
    else{
        hiddenForm[!i].style.display = 'none';
        // closeBTNBDC[!i].style.display = 'none';

    }
   }
//   return;
// }
// var btnshowForm = document.getElementById("selectedFournisseur");
// btnshowForm.addEventListener('click',showBDC(number));
// showBDC(0);
// showBDC(1);
// showBDC(2);

function closeBDC(){
        hiddenForm[i].style.display="none";
        // hiddenForm[!i].style.display="none";
}
// closeBDC(0);
// closeBDC(1);
// closeBDC(2);


/*var selectedFournisseurValue = document.getElementsByClassName('selectF').value;
console.log(selectedFournisseurValue);
// var btnslctFournisseur = document.getElementById('selectedFournisseur');
var btnslctFournisseur = document.getElementsByClassName('selectF');
function showBDC(element){
    for(i = 0 ; i < hiddenForm.length; i++)
    {
         if (element == selectedFournisseurValue){
        hiddenForm[i].style.display="inherit";
        console.log('selected :'+ selectedFournisseurValue);
    }else{
        hiddenForm[i].style.display="none";
    } 
    return;
    }
    }

// btnslctFournisseur.addEventListener('click', showBDC);
showBDC('BELM');
showBDC('AF');
showBDC('BAIEBLEU');*/

/*
// FIELDSET CACHET ET SIGNATURE
       var canvas = document.getElementById("signatureNote");

       function resizeCanvas() {
           var ratio = Math.max(window.devicePixelRatio || 1, 1);
           canvas.width = canvas.offsetWidth * ratio;
           canvas.height = canvas.offsetHeight * ratio;
           canvas.getContext("2d").scale(ratio, ratio);
       }
       window.onresize = resizeCanvas;
       resizeCanvas();

       var signaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgb(250,250,250)'
       });

       document.getElementById("clear").addEventListener('click', function(){
        signaturePad.clear();
       })


// GENERER UN PDF    
    const button = document.getElementById('genererBDC');
			function generatePDF(elementSlct) {
				// Choose the element that your content will be rendered to.
				const element = document.getElementById(elementSlct);
                var opt = {
                    margin:       1,
                    image:        { type: 'jpeg', quality: 0.98 },
                    html2canvas:  { scale: 4 },
                    jsPDF:        { unit: 'pt', format: 'a3', orientation: 'landscape' }
                  };
				// Choose the element and save the PDF  for your user.
				html2pdf()
                .set(opt)
                .from(element)
                .save('formulairehtml2pdf.pdf');
			}

			button.addEventListener('click', generatePDF(element));
            generatePDF('BAIEBLEU');
            generatePDF('AF');
            generatePDF('BELM');*/


