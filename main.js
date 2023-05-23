let nameInput = document.querySelector("#nameInput");
let submitButton = document.querySelector("#submitButton");
let table = document.querySelector('table')

let ctr = 0;
submitButton.addEventListener('click', () => {

    //console.log("testing!")
    let newRow = document.createElement('tr');

    if(ctr % 2 === 0){
        newRow.className = "mid";
    }
    
    console.log(nameInput.value)
    newRow.innerHTML = 
        `<td>${nameInput.value}</td>
         <td>30</td>
         <td>Maryland</td>`

    table.appendChild(newRow);

    ctr++;
    
})