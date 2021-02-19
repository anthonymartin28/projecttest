import data from '../Quizz/index.json'; // This import style requires "esModuleInterop", see "side notes"



document.write("<body><nav><ul><li class='Accueil'><a href='accueil.html'>Accueil</a></li><li class='choix'><a href='#'>Choisir son quiz</a><ul class='submenu'><li><a href='quizz.html'>notre quiz</a></li<li><a href=main1()>animaux</a></li><li><a href='main2();'>culture générale</a></li><li><a href='main3();'>histoire</a></li></ul></li></ul></nav><h1>Voici un quiz pour voir si vous connaissez bien les animaux </h1></body>");



//document.write("<header><h1> créér votre quiz </h1></header>"); 
document.write("<body>");
//document.write("<form><div><label for='number'>Nombre de questions ?</label><input type='number' id='in' name='amount' value='1' min='1' max='8'></div><div><button>valider</button id='out'></div></form>");


window.onload
let tabrep1 = [];
let tabrep2 = [];
let tabrep3 = [];



let q1 = "<fieldset><legend>"+data.questions.question1.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix1' VALUE='0'>"+data.questions.question1.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix1' VALUE='1'>"+data.questions.question1.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix1' VALUE='2'>"+data.questions.question1.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix1' VALUE='3'>"+data.questions.question1.choices[3]+"<BR></label></li></ul></fieldset>";
let q2 = "<fieldset><legend>"+data.questions.question2.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix2' VALUE='0'>"+data.questions.question2.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix2' VALUE='1'>"+data.questions.question2.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix2' VALUE='2'>"+data.questions.question2.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix2' VALUE='3'>"+data.questions.question2.choices[3]+"<BR></label></li></ul></fieldset>";
let q3 = "<fieldset><legend>"+data.questions.question3.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix3' VALUE='0'>"+data.questions.question3.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix3' VALUE='1'>"+data.questions.question3.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix3' VALUE='2'>"+data.questions.question3.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix3' VALUE='3'>"+data.questions.question3.choices[3]+"<BR></label></li></ul></fieldset>";
let q4 = "<fieldset><legend>"+data.questions.question4.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix4' VALUE='0'>"+data.questions.question4.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix4' VALUE='1'>"+data.questions.question4.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix4' VALUE='2'>"+data.questions.question4.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix4' VALUE='3'>"+data.questions.question4.choices[3]+"<BR></label></li></ul></fieldset>";
let q5 = "<fieldset><legend>"+data.questions.question5.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix5' VALUE='0'>"+data.questions.question5.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix5' VALUE='1'>"+data.questions.question5.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix5' VALUE='2'>"+data.questions.question5.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix5' VALUE='3'>"+data.questions.question5.choices[3]+"<BR></label></li></ul></fieldset>";
let q6 = "<fieldset><legend>"+data.questions.question6.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix6' VALUE='0'>"+data.questions.question6.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix6' VALUE='1'>"+data.questions.question6.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix6' VALUE='2'>"+data.questions.question6.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix6' VALUE='3'>"+data.questions.question6.choices[3]+"<BR></label></li></ul></fieldset>";
let q7 = "<fieldset><legend>"+data.questions.question7.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix7' VALUE='0'>"+data.questions.question7.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix7' VALUE='1'>"+data.questions.question7.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix7' VALUE='2'>"+data.questions.question7.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix7' VALUE='3'>"+data.questions.question7.choices[3]+"<BR></label></li></ul></fieldset>";
let q8 = "<fieldset><legend>"+data.questions.question8.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix8' VALUE='0'>"+data.questions.question8.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix8' VALUE='1'>"+data.questions.question8.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix8' VALUE='2'>"+data.questions.question8.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix8' VALUE='3'>"+data.questions.question8.choices[3]+"<BR></label></li></ul></fieldset>";

let q9 = "<fieldset><legend>"+data.questions.question9.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix9' VALUE='0'>"+data.questions.question9.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix9' VALUE='1'>"+data.questions.question9.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix9' VALUE='2'>"+data.questions.question9.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix9' VALUE='3'>"+data.questions.question9.choices[3]+"<BR></label></li></ul></fieldset>";
let q10 = "<fieldset><legend>"+data.questions.question10.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix10' VALUE='0'>"+data.questions.question10.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix10' VALUE='1'>"+data.questions.question10.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix10' VALUE='2'>"+data.questions.question10.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix10' VALUE='3'>"+data.questions.question10.choices[3]+"<BR></label></li></ul></fieldset>";
let q11 = "<fieldset><legend>"+data.questions.question11.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix11' VALUE='0'>"+data.questions.question11.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix11' VALUE='1'>"+data.questions.question11.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix11' VALUE='2'>"+data.questions.question11.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix11' VALUE='3'>"+data.questions.question11.choices[3]+"<BR></label></li></ul></fieldset>";
let q12 = "<fieldset><legend>"+data.questions.question12.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix12' VALUE='0'>"+data.questions.question12.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix12' VALUE='1'>"+data.questions.question12.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix12' VALUE='2'>"+data.questions.question12.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix12' VALUE='3'>"+data.questions.question12.choices[3]+"<BR></label></li></ul></fieldset>";
let q13 = "<fieldset><legend>"+data.questions.question13.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix13' VALUE='0'>"+data.questions.question13.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix13' VALUE='1'>"+data.questions.question13.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix13' VALUE='2'>"+data.questions.question13.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix13' VALUE='3'>"+data.questions.question13.choices[3]+"<BR></label></li></ul></fieldset>";
let q14 = "<fieldset><legend>"+data.questions.question14.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix14' VALUE='0'>"+data.questions.question14.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix14' VALUE='1'>"+data.questions.question14.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix14' VALUE='2'>"+data.questions.question14.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix14' VALUE='3'>"+data.questions.question14.choices[3]+"<BR></label></li></ul></fieldset>";
let q15 = "<fieldset><legend>"+data.questions.question15.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix15' VALUE='0'>"+data.questions.question15.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix15' VALUE='1'>"+data.questions.question15.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix15' VALUE='2'>"+data.questions.question15.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix15' VALUE='3'>"+data.questions.question15.choices[3]+"<BR></label></li></ul></fieldset>";
let q16 = "<fieldset><legend>"+data.questions.question16.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix16' VALUE='0'>"+data.questions.question16.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix16' VALUE='1'>"+data.questions.question16.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix16' VALUE='2'>"+data.questions.question16.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix16' VALUE='3'>"+data.questions.question16.choices[3]+"<BR></label></li></ul></fieldset>";

let q17 = "<fieldset><legend>"+data.questions.question17.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix17' VALUE='0'>"+data.questions.question17.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix17' VALUE='1'>"+data.questions.question17.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix17' VALUE='2'>"+data.questions.question17.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix17' VALUE='3'>"+data.questions.question17.choices[3]+"<BR></label></li></ul></fieldset>";
let q18 = "<fieldset><legend>"+data.questions.question18.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix18' VALUE='0'>"+data.questions.question18.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix18' VALUE='1'>"+data.questions.question18.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix18' VALUE='2'>"+data.questions.question18.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix18' VALUE='3'>"+data.questions.question18.choices[3]+"<BR></label></li></ul></fieldset>";
let q19 = "<fieldset><legend>"+data.questions.question19.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix19' VALUE='0'>"+data.questions.question19.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix19' VALUE='1'>"+data.questions.question19.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix19' VALUE='2'>"+data.questions.question19.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix19' VALUE='3'>"+data.questions.question19.choices[3]+"<BR></label></li></ul></fieldset>";
let q20 = "<fieldset><legend>"+data.questions.question20.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix20' VALUE='0'>"+data.questions.question20.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix20' VALUE='1'>"+data.questions.question20.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix20' VALUE='2'>"+data.questions.question20.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix20' VALUE='3'>"+data.questions.question20.choices[3]+"<BR></label></li></ul></fieldset>";
let q21 = "<fieldset><legend>"+data.questions.question21.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix21' VALUE='0'>"+data.questions.question21.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix21' VALUE='1'>"+data.questions.question21.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix21' VALUE='2'>"+data.questions.question21.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix21' VALUE='3'>"+data.questions.question21.choices[3]+"<BR></label></li></ul></fieldset>";
let q22 = "<fieldset><legend>"+data.questions.question22.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix22' VALUE='0'>"+data.questions.question22.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix22' VALUE='1'>"+data.questions.question22.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix22' VALUE='2'>"+data.questions.question22.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix22' VALUE='3'>"+data.questions.question22.choices[3]+"<BR></label></li></ul></fieldset>";
let q23 = "<fieldset><legend>"+data.questions.question23.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix23' VALUE='0'>"+data.questions.question23.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix23' VALUE='1'>"+data.questions.question23.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix23' VALUE='2'>"+data.questions.question23.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix23' VALUE='3'>"+data.questions.question23.choices[3]+"<BR></label></li></ul></fieldset>";
let q24 = "<fieldset><legend>"+data.questions.question24.title+"?</legend><ul><li><label><input TYPE='radio' NAME='choix24' VALUE='0'>"+data.questions.question24.choices[0]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix24' VALUE='1'>"+data.questions.question24.choices[1]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix24' VALUE='2'>"+data.questions.question24.choices[2]+"<BR></label></li><li><label><input TYPE='radio' NAME='choix24' VALUE='3'>"+data.questions.question24.choices[3]+"<BR></label></li></ul></fieldset>";




let tab1 = [q1,q2,q3,q4,q5,q6,q7,q8];
let tab2 = [q9,q10,q11,q12,q13,q14,q15,q16];
let tab3 = [q17,q18,q19,q20,q21,q22,q23,q24];



/*
for (let i : number = 0 ; i < 8 ; i++)
{
    var tir : number = getRandomInt(tab.length);
    document.write(tab[tir]);
    tab.splice(tir,1);
}
*/



function getRandomInt(max:number) 
{
    return Math.floor(Math.random() * Math.floor(max));
}



function main1()
{
    for (let i : number = 0 ; i < 8 ; i++)
    {   
        var tir : number = getRandomInt(tab1.length);
        document.write(tab1[tir]);
        tab1.splice(tir,1);
    }
}



let score : number;

let tabrepy : any = [];
function main2()
{
    for (let i : number = 0 ; i < 8 ; i++)
    {
        var tir : number = getRandomInt(tab2.length);
        document.write(tab2[tir]);
        tab2.splice(tir,1);
    }
    document.write("<form><div><button align='center'>valider</button id='out'></div></form></br></br>");


    tabrep2 = [data.questions.question9.correctAnswer,data.questions.question10.correctAnswer,data.questions.question11.correctAnswer,data.questions.question12.correctAnswer,data.questions.question13.correctAnswer,data.questions.question14.correctAnswer,data.questions.question15.correctAnswer,data.questions.question16.correctAnswer,];
    console.log(tabrep2);

    let choixx;
    let valeur:any;
    for (let i : number = 0 ; i < 4 ; i++)
    {

        tabrepy.push(document.getElementById(choixx).value);
        console.log(tabrepy);

    }
}



function main3()
{
    for (let i : number = 0 ; i < 8 ; i++)
    {
        var tir : number = getRandomInt(tab3.length);
        document.write(tab3[tir]);
        tab3.splice(tir,1);
    }
}



main2()
document.write("<form><div><button>valider</button id='out'></div></form>");





document.write("</body>");
