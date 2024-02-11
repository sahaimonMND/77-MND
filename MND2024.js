function checkVillage(val) {
  let element = document.getElementById('oth');
  if (val=="select one...."||val=="others")
  element.style.display ='block';
  else
  element.style.display = 'none';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxbrQeLlgE0JJYhgBZ3QCOFKBPdIq5kbrK1lSJnmxKQJicehjcz5NXyGKDWFFcoOK1rKQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e=> {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)} )
  .then (response => alert ("တင်ဂုဏ်ရအဴ တသိုက်စိုတ် တသိုက်ကာယ ကဵုဂွံဍိုက်ပေင်ညိ"))
  .then (() => {window.location.reload(); })
  .catch(error => console.error ('Error!', error.message))
})