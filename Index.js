let Email = 'bela.krzebek@outlook.de';
let Tel = '01792900577'

function copyEmail() {

navigator.clipboard.writeText(Email);

}

function copyTel() {

navigator.clipboard.writeText(Tel);
        
}


const alertPlaceholder = document.getElementById('liveAlertPlaceholder1')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('clip1')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Email copied!', 'success')
  })
}

const alertPlaceholder1 = document.getElementById('liveAlertPlaceholder2')
const appendAlert1 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder1.append(wrapper)
}

const alertTrigger1 = document.getElementById('clip2')
if (alertTrigger1) {
  alertTrigger1.addEventListener('click', () => {
    appendAlert1('Email copied!', 'success')
  })
}