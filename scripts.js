// Interactivity demo 2

console.log('hello')

//zoom the moon
var body = document.querySelector('body')
var button = document.querySelector('.trigger')

button.addEventListener('click' , zoom)

function zoom() {
  console.log('it worked')

  if (body.id == 'zoom') {
    body.id = ''
  } else{
    body.id = 'zoom'
  }
}
