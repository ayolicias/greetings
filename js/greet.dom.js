var greetcount = document.querySelector('.greetcount');
var greetMeBtnElement = document.querySelector('.greetMeBtn');
var counter = document.querySelector('.count');
var greetingElement = document.querySelector('.greeting');
var inputName = document.querySelector('.inputName');
var Reset = document.querySelector('.Reset');

// getting old data from localstorage
var storednames = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')) : {};

var greets = Greet(storednames);
counter.innerHTML = greets.count();

function greetDom(){
  var greetMeBtnElement = document.querySelector("input[name='language']:checked");
  if (greetMeBtnElement){
    var greetinglanguage = greetMeBtnElement.value;
    var name = inputName.value.toLowerCase();

    if (name === ''){
        greetingElement.innerHTML = "Enter Name";
        return;
    }
    else{
      var message = greets.greetkey(greetinglanguage, name);
      greets.calculate(greetinglanguage, name);
        localStorage.setItem('Names',JSON.stringify(greets.storedMap()));

        greetingElement.innerHTML = message;
        counter.innerHTML = greets.count();
    }



  } else {
    greetingElement.innerHTML = "select language";
  }
}
greetMeBtnElement.addEventListener('click', greetDom);


function resetButton(){
      localStorage.clear();
      location.reload();

  }

Reset.addEventListener('click',resetButton);
