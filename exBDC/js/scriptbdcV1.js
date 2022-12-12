
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
//AVEC JSPDF - FONCTIONNE MAIS LA PAGE APPRAIT BLANCHE;
/*
var leFormulaire = document.getElementById('bdcbaieBlue');
var fileToPrint = document.querySelector('#bdcbaieBlue');
var buttonGnr = document.getElementById('genererBDC');
 function generatePDF() {
     var pdf = new jsPDF({
     orientation: 'l',
     unit: 'mm',
     format: 'a4',
     putOnlyUsedFonts:true
     });
 // pdf.text("Generate a PDF with JavaScript", 20, 20);
 // pdf.text("published on APITemplate.io", 20, 30);
 // pdf.tableBDC = document.getElementById('bdcbaieBleu');
 // pdf.addPage();
 // pdf.text(20, 20, 'The second page');
     // pdf.
     pdf.save('');}       
     buttonGnr.addEventListener('click', generatePDF);/**/


// AVEC HTML2PDF - FONCTIONNE----------------------------
const button = document.getElementById('genererBDC');
     function generatePDF() {
         // Choose the element that your content will be rendered to.
         const element = document.getElementById('invoice');
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

     button.addEventListener('click', generatePDF);


/*
     //________________________________________________________________________ AVEC HTML2PDF - NE FONCTIONNE PAS
 const button = document.getElementById('genererBDC');
     function generatePDF() {
         // Choose the element that your content will be rendered to.
         const element = document.getElementById('invoice');
         // Choose the element and save the PDF  for your user.
         html2pdf()
         .from(element)
         .save('');
     }
     button.addEventListener('click', generatePDF);
     
*/


     // const button = document.getElementById('genererBDC');
     // window.jsPDF = window.jspdf.jsPDF;*/
     /*
     function generatePDF(){
         var doc = new jsPDF({
             orientation: 'l',
             unit: 'mm',
             format: 'a4',
             putOnlyUsedFonts:true
             });
         
         var elementToPrint = document.querySelector("#bdcbaieBleu");
         console.log(elementToPrint);
         doc.html(elementToPrint,{
             callback: function(doc) {
                 doc.save('formulaire.pdf');
             },
             margin:[10, 10, 10, 10],
             autoPaging: 'text',
             x: 0,
             y: 0,
             width: 190,
             windowWidth: 675
         });
     }*/
     //button.addEventListener('click', generatePDF); */
     /*
     var formSelected = document.getElementById('bdcbaieBlue');
     //CREER LA SELECTION DES INPUTS
     var inputNumSubmitted = document.querySelectorAll("input[type=text]").value ;
     var inputTxtSubmitted = document.querySelectorAll("input[type=number]").value ;
     var inputDateSubmitted = document.querySelectorAll("input[type=datetime]").value ;
     // const button = document.getElementById('genererBDC');
     // button.addEventListener('click',console.log(inputTxtSubmitted, inputDateSubmitted, inputNumSubmitted));
     function inputSubmitted(inputType){
         for(var i = 0; i < inputType.length; i++) {
             if(inputType[i].type.toLowerCase() == 'text') {
                 console.log(inputType[i].value);
             }
         }
     }
     inputSubmitted(inputTxtSubmitted);
     inputSubmitted(inputNumSubmitted);
     inputSubmitted(inputDateSubmitted);



     formSelected.addEventListener('submit',function(event){
         event.preventDefault()


     })

     function generatePDF(){
         
     }*/
