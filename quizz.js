
function avancement() {
  var ava = document.getElementById("avancement");
  var prc = document.getElementById("pourcentage");
  prc.innerHTML = "question numéro " + ava.value ;
}

avancement(); //Initialisation

function modif(val) {
  var ava = document.getElementById("avancement");
  if((ava.value+val)<=ava.max && (ava.value+val)>0) {
     ava.value += val;
  }
  avancement();
}

var canvas=document.getElementById('mon_canvas');
var context=canvas.getContext('2d');
	


function verifprop(form2) {
if (form2.choix[0].checked) { alert("Vous avez sélectionnez la propsition " + form2.choix[0].value) };
if (form2.choix[1].checked) { alert("Vous avez sélectionnez la propsition " + form2.choix[1].value) };
if (form2.choix[2].checked) { alert("Vous avez sélectionnez la propsition " + form2.choix[2].value) };
if (form2.choix[3].checked) { alert("Vous avez sélectionnez la propsition " + form2.choix[3].value) };
}



