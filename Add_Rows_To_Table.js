//add row to bottom

    function addRowtoBottom() 
    {
        let table1 = document.getElementById("table_1");
        let row1 = document.createElement("tr");
        let tabledata = document.createElement("td");
        let tabledata1= document.createElement("td");
        let tabledata2= document.createElement("td");
        let tabledata3= document.createElement("td");
        let tabledata4= document.createElement("td");
        
        var ln = document.getElementById("table_1").rows.length;
        tabledata.innerText = ln;
    
        table1.appendChild(row1);
        table1.appendChild(tabledata);
        table1.appendChild(tabledata1);
        table1.appendChild(tabledata2);
        table1.appendChild(tabledata3);
        table1.appendChild(tabledata4);
       // console.log("\nRow added to Bottom");
       // console.log("No.of Rows: "+ ln);
    };

//add row to top
count = 1
function addRowtoTop()
{
    let table1 = document.getElementById("table_1")
    let row1 = table1.insertRow(1)
    row1.insertCell(0)
    row1.insertCell(1)
    row1.insertCell(2)
    row1.insertCell(3)
    row1.insertCell(4)
   // var ln = document.getElementById("table_1").rows.length;
   // ln = ln - 1;
 

	var b = document.getElementById("table_1").querySelectorAll("td");

    
    var index1 = 1;
    for(let i = 0; i<b.length; i=i+5)
    {
        b[i].innerText = index1;
        index1++;
    }
   // console.log("\nRow added to Top");
	//console.log("No.of Rows: " + ln);
	//console.log("No.of Cols: " + b.length);
 };
