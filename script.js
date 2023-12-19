
var table = document.createElement("table");
table.setAttribute("id", "dataTable");


var thead = document.createElement("thead");


var tr = document.createElement("tr");


var th1 = document.createElement("th");
th1.innerText = "First Name";

var th2 = document.createElement("th");
th2.innerText = "Last Name";

var th3 = document.createElement("th");
th3.innerText = "Address";

var th4 = document.createElement("th");
th4.innerText = "Pincode";

var th5 = document.createElement("th");
th5.innerText = "Gender";

var th6 = document.createElement("th");
th6.innerText = "State";

var th7 = document.createElement("th");
th7.innerText = "Country";


tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
tr.appendChild(th6);
tr.appendChild(th7);


thead.appendChild(tr);


table.appendChild(thead);


document.body.appendChild(table);

function addRowAndLogHTML(fname, lname, address, pincode, gender, state, country) {
  
    var newRow = table.insertRow(table.rows.length);

   
    var cells = [];
    for (var i = 0; i < 7; i++) {
        cells[i] = newRow.insertCell(i);
    }

  
    cells[0].innerHTML = fname;
    cells[1].innerHTML = lname;
    cells[2].innerHTML = address;
    cells[3].innerHTML = pincode;
    cells[4].innerHTML = gender ? gender : '';
    cells[5].innerHTML = state;
    cells[6].innerHTML = country;

 
    console.log(document.body.innerHTML);
}


function valid() {
  
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    

    
    addRowAndLogHTML(fname, lname, address, pincode, gender ? gender.value : '', state, country);

    
    document.getElementById("myForm").reset();
}


document.getElementById("submitButton").addEventListener("click", valid);
