/*console.log("Anushree M???");
let a=2;
let b=3;
let c= a+b;
console.log(c);*/

/*const a=[1,2,3];
console.log(a);
const b=["a" ,"n", "u"];
console.log(b);*/

// function Sampleload(){
//     let sample= document.getElementById("SampleInjection");
//     console.log(sample.)
// }
// //  let valid =[ 1,2,3,4];
//  for(let i=0; i < valid; i++);
//  console.log(valid(i))

//  function clonecontent(){
//     int integrals =("hello " , "welcome", "heyy","forloop");
//     for(int i=0; i<integrate)
//  }
function createN(){
    let elementf = document.createElement("li");
    let xo= document.getElementById("inputvalue");
    let ult = document.getElementById("ultest");
    elementf.innerHTML=xo.value + "<button onclick = 'deleteContent(event)'> Delete </button>"
    ult.append(elementf);
}
function deleteContent(event){
    let eve= event.target;
    eve.parentNode.remove();
}