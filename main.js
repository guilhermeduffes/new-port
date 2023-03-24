document.getElementById("cards").onmousemove = e => {
	for (const card of document.getElementsByClassName("card")) {
		const rect = card.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	};
}

function buttonCV() {
	window.open("assets/CV.pdf", "_blank");
}

var icon = document.querySelector('.icon');
var options = document.querySelector('.options');

icon.addEventListener('click', function () {
	options.classList.toggle('active');
});

var idiomaSelecionado = document.querySelector(".idioma");
var bandeira = document.querySelector(".bandeira");

idiomaSelecionado.addEventListener("change", function () {
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

function scrollForHome() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

function scrollAboutMe() {
	const element = document.getElementById("sobre-mim2");
	element.scrollIntoView({
		behavior: "smooth"
	});
};

function scrollForProjects() {
	const element = document.getElementById("projetos");
	element.scrollIntoView({
		behavior: "smooth"
	});
};

function scrollForHabilities(){
	const element = document.getElementById("pai-habilidades");
	element.scrollIntoView({
		behavior:"smooth"
	});
};

function linkForInsta(){
	window.open("https://www.instagram.com/bx_crip");
};

function linkForWhatsapp(){
	window.open("https://wa.me/+5521971235386");
};

function linkForLinkedin(){
	window.open("https://www.linkedin.com/in/guilherme-duffes-b83146240/");
};