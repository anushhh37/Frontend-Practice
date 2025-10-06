function submitbtn(event){
    event.preventDefault();  

    let nme = document.getElementById("name");
    let nme1 = document.createElement("td");
    nme1.innerText = nme.value;

    let dsh = document.getElementById("dish");
    let dsh1 = document.createElement("td");
    dsh1.innerText = dsh.value;
    
    let qn = document.getElementById("quantity");
    let qn1 = document.createElement("td");
    qn1.innerText = qn.value;

    let tme = document.getElementById("time");
    let tme1 = document.createElement("td");
    tme1.innerText = tme.value;

    let pay = document.getElementById("payment");
    let pay1 = document.createElement("td");
    pay1.innerText = pay.value;

    let trr= document.createElement("tr");
    trr.append(nme1,dsh1,qn1,tme1,pay1);

    let data = document.getElementById("table")
    data.append(trr);

    document.getElementById("form").reset();

}