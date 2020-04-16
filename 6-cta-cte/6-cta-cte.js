function getValue(value) {
    value = value.replace("$","");
    value = value.replace(",",".");
    value = parseFloat(value);
    return value;
}

function format(sym, num){
    let value = Number(num);
    let symbol = sym;
    let res = num.toString().split(".");
    if(res.length == 1 || res[1].length < 3){
        value = value.toFixed(2);
    }
    value = value.replace(".",",");
    value = symbol + value;
    return value;
}

function updateTotal(num){
    let total = document.getElementById("total");
    let value = num;
    total.innerText = value;
}

function getMonto() {
    let monto = document.getElementById("monto").value;
    monto = getValue(monto);
    return monto;   
}

function getTotal() {
    let total = document.getElementById("total").innerText;
    total = getValue(total);
    return total;
}

function getDate() {
    let date = new Date;
    let day = format0s(date.getUTCDate());
    let month = format0s(date.getUTCMonth() + 1);
    let year = date.getUTCFullYear();
    let res = day+"/"+month+"/"+year;
    return res;
}

function format0s(value){
    let res = value;
    if(value<10){
        res = "0" + value;
    }
    return res;
}

function updateTable(value1, value2, css){
    let table = document.getElementById("table");
    let row = table.insertRow();
    let date = row.insertCell(0);
    let amount = row.insertCell(1);
    let subtotal = row.insertCell(2);
    date.innerHTML = getDate();
    amount.innerText = value1;
    subtotal.innerHTML = value2;
    amount = amount.classList.add(css);
}

function extraer(){
   let monto = getMonto();
   let total = getTotal() - monto;
   monto = format("$-",monto);
   total = format("$",total);
   updateTotal(total);
   updateTable(monto,total,"text-danger");
}

function depositar(){
    let monto = getMonto();
    let total = getTotal() + monto;
    monto = format("$",monto);
    total = format("$",total);
    updateTotal(total);
    updateTable(monto,total,"text-success");
}


