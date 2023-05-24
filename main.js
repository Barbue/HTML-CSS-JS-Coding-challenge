let add1Button = document.querySelector("#add1");
let remove1Button = document.querySelector("#remove1");
let table = document.querySelector('table')
let counter = document.querySelector('#paragraph')
let tableRow = document.querySelector('tr')
let dataCell = document.querySelector('td')


let ctr = 0;
add1Button.addEventListener('click', () => {
    
    let newTd = document.createElement('td');
   
    newTd.innerHTML = `&#9733`
    tableRow.appendChild(newTd)
         
        
    if (ctr >= 5){tableRow.deleteCell(dataCell)}
    if (ctr >= 5) { return }
        
    ctr++
    counter.innerHTML = ctr
        

})


remove1Button.addEventListener('click', () => {
    
    tableRow.deleteCell(dataCell)
    
    if (ctr === 0){ return 0 }
    
    ctr--
    counter.innerHTML = ctr
})