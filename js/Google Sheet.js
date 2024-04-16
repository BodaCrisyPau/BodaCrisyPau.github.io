const scriptURL = 'https://script.google.com/macros/s/AKfycbyDZY-XxvZPy0Zrjb2J5zDv0FW45zUZnglDKiF9b0jzDVfIW_8RYGK7m8Qc_5tb1wpU/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
