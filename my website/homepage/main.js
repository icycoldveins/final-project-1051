/*learned from tutorial https://www.youtube.com/watch?v=C7NsIRhoWuE&ab_channel=KevinBriggs*/
function check(){
var q1=document.quiz.q1.value;
var q2=document.quiz.q2.value;
var q3=document.quiz.q3.value;
var q4=document.quiz.q4.value;
var correct=0;
    if (q1=="Shiba"){
        correct++;
    }
    if (q2=="doritos"){
        correct++;
    }
    if (q3=="pokemon platinum"){
        correct++;
    }
    if (q4=="big noses"){
        correct++;
    }
var collection=["try again","Good Job You got a 100%!!"];
var range;
    if(correct<3){
        range=0
    }
    if(correct>3){
        range=1
    }    
    document.getElementById("results").style.visibility="visible";
    document.getElementById("collection").innerHTML=collection[range];
    document.getElementById("correct").innerHTML="your score is "+correct;
}