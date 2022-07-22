function clicked(element) {
  // console.log(element);
  element.innerText = 'CLICKED';
  element.style.backgroundColor = 'hotpink';
}

function increment(element) {
  // console.log(element.innerText);
  element.innerText++;
}

function picked(element) {
  alert('You picked ' + element.value);
}

function hide(element) {
  element.remove();
}

function switchPic(element) {
  element.src = './images/deku.webp'
}