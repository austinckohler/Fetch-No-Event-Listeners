document.addEventListener('DOMContentLoaded', function(event) {
  console.log('all content is loaded')

const button = document.createElement('button')
button.innerText = 'All bagels!'
document.body.appendChild(button)

button.addEventListener('click', (event) => {
 fetchBagels()
})

function fetchBagels(){ 
  fetch('http://bagel-api-fis.herokuapp.com/bagels')
  .then(response => response.json())
  .then(bagels => renderBagels(bagels))
}

function renderBagels(bagels){
  const bagelList = document.getElementById('bagel-list')
  
  bagels.map(bagel => {
    const bagelLi = document.createElement('li')
    bagelLi.innerText = bagel.type
    createDeleteButton(bagelLi)
    bagelList.appendChild(bagelLi)
  })
}

function createDeleteButton(bagelLi) {
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'delete'
  bagelLi.appendChild(deleteButton)
  deleteButton.addEventListener('click', (event) => { 
    // event.target.parentNode.remove()
    event.path[1].remove()
  })
}




})