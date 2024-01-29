// aggiungo un event listener al form
document.getElementById('add-item-form').addEventListener('submit', function (event) {
  // evito che venga eseguito il submit come da standard HTML
  event.preventDefault();

  // placeholder per la funzione di aggiunta elemento in lista
  saveTask(??, ??);

  // svuoto il campo di input
  document.getElementById('new-item-text').value = '';
});


