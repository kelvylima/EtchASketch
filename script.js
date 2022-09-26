function Creatgrid(columns, rows) {
    let container = document.querySelector('#container');
    container.innerHTML =  ''
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

function Getconfirmbuttonvalue(){
var subbutton = document.getElementById('confirmbutton')
subbutton.addEventListener('click', () => {
    let gridsize = Tocheckradio()
    Creatgrid(gridsize, gridsize)
})

}

console.log(Getconfirmbuttonvalue())
function Tocheckradio(){
    var radios = document.getElementsByName('gridsize');
    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked) {
            var radiovalue = radios[i].value
        }
    }
    return radiovalue
}

