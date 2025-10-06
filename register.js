let obj = document.getElementById("form").addEventListener("submit", function(event){
event.preventDefault();
let frm = document.getElementById("newform");
let inp = document.getElementById("Theoutput");
let fromDate = new FormData(event.target);
console.log("formData" + fromDate);
console.log(fromData.get("Firstname"));
console.log(fromData.get("userId"));
let objectN = object.FrontEntries(fromData.Entries());
console.log(objectN);
console.log(objectN.firstname);
})