//SELECTIONNER LE BON FORMULAIRE SELON L'OPTION CHOISI-------------------------------------------

var buttonBDC = document.getElementsByClassName('genererBDC');
var hiddenForm = document.getElementsByClassName('tableauBDC');
var nmSlctForm = document.getElementsByClassName('selectF');
var closeBTNBDC = document.getElementsByClassName('closeBtn');
console.log(buttonBDC);
//ON CACHE LES BONs DE COMMANDE----
for (var i=0;i<hiddenForm.length;i++){
  hiddenForm[i].style.display = 'none';
}

//ON MONTRE LES BONS DE COMMANDE----
function showBDC(number)
{
    var i = number;
     if (nmSlctForm[i].value === hiddenForm[i].id){
        hiddenForm[i].style.display = 'block';
        hiddenForm[!i].style.display = 'none';
        buttonBDC[i].style.display = 'block';
     } 
    else{
        hiddenForm[!i].style.display = 'none';
        buttonBDC[!i].style.display = 'none';
    }
   }

function closeBDC(){
        hiddenForm[i].style.display='none';
        buttonBDC[i].style.display = 'none';
}

// FIELDSET CACHET ET SIGNATURE -------------EN SUSPEND POUR LE MOMENT..
    //    var canvas = document.getElementById("signatureNote");

    //    function resizeCanvas() {
    //        var ratio = Math.max(window.devicePixelRatio || 1, 1);
    //        canvas.width = canvas.offsetWidth * ratio;
    //        canvas.height = canvas.offsetHeight * ratio;
    //        canvas.getContext("2d").scale(ratio, ratio);
    //    }
    //    window.onresize = resizeCanvas;
    //    resizeCanvas();

    //    var signaturePad = new SignaturePad(canvas, {
    //     backgroundColor: 'rgb(250,250,250)'
    //    });

    //    document.getElementById("clear").addEventListener('click', function(){
    //     signaturePad.clear();
    //    });

// GENERER UN PDF    
			function generatePDF(elementSlct) {
				// Choose the element that your content will be rendered to.
                var selectedForm = document.getElementById(elementSlct);
                console.log(selectedForm);
				const element = selectedForm;
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
                .save(elementSlct + 'formulairehtml2pdf.pdf');
			}

			// button.addEventListener('click', generatePDF(element));
            // generatePDF('BAIEBLEU');
            // generatePDF('AF');
            // generatePDF('BELM');


