// aggiungo un event listener al form
document.getElementById('add-item-form').addEventListener('submit', function (event) {
  // evito che venga eseguito il submit come da standard HTML
  event.preventDefault();

  var taskText = document.getElementById('new-item-text').value;
  // placeholder per la funzione di aggiunta elemento in lista
  saveTask(taskText, addItem);

  // svuoto il campo di input
  document.getElementById('new-item-text').value = '';
});

// carico gli elementi

loadTasks(addItem);

function addItem(data) {
  if (data !== undefined && 'description' in data)  {
    var itemText = data.description;

    if (itemText.trim().length !== 0) {
      var itemList = document.getElementById('tasks-list');
      var newItem = document.createElement('li');
  
      newItem.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');
      newItem.setAttribute('data-id', data.id);
      // elemento span
      var spanElement = document.createElement('span');
      spanElement.innerText = itemText;
  
      // elemento div contenente i bottoni
      var buttons = document.createElement('div');
  
      buttons.innerHTML = '<button type="button" class="btn btn-warning btn-sm" onclick="editTask(this.parentNode.parentNode)"><i class="fas fa-pen-to-square"></i></button>'
        + '<button type="button" class="btn btn-danger btn-sm" onclick="deleteItem(this.parentNode.parentNode)"><i class="fas fa-trash-alt"></i></button>';
  
      newItem.appendChild(spanElement);
      newItem.appendChild(buttons);
  
      itemList.appendChild(newItem);
    }
  }
}

function deleteItem(elementToRemove) {
  var taskId = parseInt(elementToRemove.dataset.id); 
  
  deleteTask(taskId, data => elementToRemove.remove());
}


