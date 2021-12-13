const rows = document.querySelectorAll('.row');
const colors = ['blue', 'green', 'aquamarine', 'yellow', 'orange', 'orangered', 'red'];

const onDragOver = (event) => {
    event.preventDefault();
}

const onDrop = (event) => {
    event.preventDefault();
    const draggedCardId = event.dataTransfer.getData('id');
    const draggedCard = document.getElementById(draggedCardId);
    event.target.appendChild(draggedCard); 
}

rows.forEach((row, index) => {
    const label = row.querySelector('.label');
    label.style.backgroundColor = colors[index];
    row.ondragover = onDragOver;
    row.ondrop = onDrop;
})


//click and drag//
const cards = document.querySelectorAll('.card');

const onDragStart = (event) => {
    event.dataTransfer.setData('id', event.target.id);
    setTimeout(() => {
        event.target.style.visibility = 'hidden';
    }, 50)
}

const onDragEnd = (event) => {
    event.target.style.visibility = 'visible';
}

cards.forEach((card) => {
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
})

//card-container//
const cardBox = document.querySelector('#card-container');

const onDropCard = (event) => {
    const id = event.dataTransfer.getData('id');
    cardBox.appendChild(document.getElementById(id));
}

cardBox.ondrop = onDropCard;
cardBox.ondragover = (event) => event.preventDefault();