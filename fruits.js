function addFruit()
{
    var fruitTable= document.getElementById('fruitTable');
    var name= document.getElementById('name').value;
    var price= document.getElementById('price').value;
    var origin= document.getElementById('origin');
    var originValue = origin.options[origin.selectedIndex].value;
    var qty= document.getElementById('qty').value;

    var actions="<a onclick=editFruit(this)>Edit</a><a onclick=deleteFruit(this)>Delete</a>";
    var row = fruitTable.insertRow(-1);
    var nameTd = row.insertCell(0);
    var priceTd = row.insertCell(1);
    var orginTd = row.insertCell(2);
    var qtyTd = row.insertCell(3);
    var totalTd = row.insertCell(4);
    var actionTd = row.insertCell(5);


    nameTd.innerHTML=name;
    priceTd.innerHTML=price;
    orginTd.innerHTML=originValue;
    qtyTd.innerHTML=qty;
    totalTd.innerHTML= getCalculatedPrice(price,qty)
    actionTd.innerHTML=actions;
    row.id=name;

    clear();
}

function getCalculatedPrice(val1,val2)
{
    var total= parseInt(val1)* parseInt(val2);
    return total;
}

function editFruit(row)
{
    var allTds= row.parentNode.parentNode.getElementsByTagName('td');
    console.log(allTds);

   document.getElementById('name').value=allTds[0].innerText;
   document.getElementById('price').value=allTds[1].innerText;
   document.getElementById('origin').value=allTds[2].innerText;
   document.getElementById('qty').value=allTds[3].innerText;

}

function deleteFruit(row)
{
    document.getElementById("fruitTable").deleteRow(row.parentNode.parentNode.rowIndex);
}

function clear()
{
    document.getElementById('name').value=''
    document.getElementById('price').value=''
    document.getElementById('origin').value=''
    document.getElementById('qty').value=''
}