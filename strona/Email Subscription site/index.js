const scriptURL = 'https://script.google.com/macros/s/AKfycbw9-pb6654R7XuQ-VM69SeELBEdxfb5Hi1AEoan-gbB13-UfR9e2Tu172SEHovU6Kp4/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })