const r11=document.getElementById("r11");
const r12=document.getElementById("r12");
const r13=document.getElementById("r13");
const r21=document.getElementById("r21");
const r22=document.getElementById("r22");
const r23=document.getElementById("r23");
const r31=document.getElementById("r31");
const r32=document.getElementById("r32");
const r33=document.getElementById("r33");
let conta=0;
const submit=document.getElementById("invio");
const risultato=document.getElementById("risultato");

submit.onclick= function()
{
    conta=0;
    
    if(r12.checked)
    {
        conta++;
        

    }
    if(r23.checked)
    {
        conta++

    }
    if(r33.checked)
    {
             conta++;
    }
    risultato.textContent = "Punteggio: " + conta + "/3";

}