function Creatgrid(columns, rows) {
    let container = document.querySelector('#container');
    for(let i = 0; i < columns; i++) {
        let column = document.createElement('div'); // creat columns
        column.classList.add('column');
        for (j = 0; j < rows; j++) {
            var row = document.createElement('div') // creat row
            row.classList.add('row');
            column.appendChild(row);
            Topaint(row)
        
        }
        container.appendChild(column);
        
        
    }
}


function Topaint(element) {
    element.addEventListener('mouseenter', e => element.classList.add('black'))
}

Creatgrid(16, 16)





/* function Creatsquare(containeridstring, number){
    let container = document.getElementById(`${containeridstring}`)
    for(let i = 0; i <= number; i++){
    let square = document.createElement('div')
    square.classList.add('grid')
    square.setAttribute('id', `square${i}`)
    square.textContent = `${i}`
    container.appendChild(square)
}

} */

 
