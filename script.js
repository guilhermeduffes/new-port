var icon = document.querySelector('.icon');
var options = document.querySelector('.options');

icon.addEventListener('click', function() {
  options.classList.toggle('active');
});


var idiomaSelecionado = document.querySelector(".idioma");
var bandeira = document.querySelector(".bandeira");

idiomaSelecionado.addEventListener("change", function() {
  var idiomaselect = idiomaSelecionado.value;

  switch (idiomaselect) {
    case "pt":
      bandeira.src = "pt.png";
      window.location.assign("index.html");
      break;
    case "en":
      bandeira.src = "en.png";
      window.location.assign("index-en.html");
      break;
    case "es":
      bandeira.src = "es.png";
      window.location.assign("index-es.html");
      break;
  }
});


function buttonProjetos(){
  window.location.assign("#projetos");
}

function buttonCV(){

}

function buttonSobreMim(){
  window.open("sobremim.html");
}

function buttonSkills(){
  window.open("skills.html");
}


document.getElementById("home1").addEventListener('click',function()  {
  window.location.assign("index.html");
}); 

// document.getElementById("sobre-mim").addEventListener('click',function()  {
//   window.open("sobremim.html");
// }); 

document.getElementById("insta").addEventListener('click',function()  {
  window.open("https://www.instagram.com/bx_crip");
}); 

document.getElementById("whatsapp").addEventListener('click',function()  {
  window.open("https://wa.me/+5521971235386");
});

document.getElementById("linkedin").addEventListener('click',function()  {
  window.open("https://wa.me/+5521971235386");
});

function scrollParaTopo(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function scrollAboutMe(){
  var element = document.getElementById('sobre-mim2');
  element.scrollIntoView({ 
    behavior: 'smooth' 
  });
}



