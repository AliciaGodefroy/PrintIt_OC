const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideImg = document.querySelector('.banner-img');
let slideTxt = document.querySelector('.banner-txt');
let currentSlide = 0;

function updateSlide() {
  slideImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  slideTxt.innerHTML = slides[currentSlide].tagLine;
}

updateSlide();


//----------- Gestion des dots

// On récupère dans le DOM la div parent qui contient les dots
let dots = document.getElementById('dots');

//  On crée une boucle pour itérer dans le tableau slides et afficher le nombre de dots en fonction du nombre de slide
for (let i = 0; i < slides.length; i++) {
	let dots = document.getElementById('dots');
	let dot = document.createElement("div");
	dot.className = "dot dot"+i;
	if ( i === 0 ){dot.className = "dot " + "dot"+i + " dot_selected";}
	dots.appendChild(dot);
}


//----------- Gestion des flèches

let arrowRight = document.querySelector('.arrow_right'); //On récupère la flèche dans le DOM
arrowRight.addEventListener('click', function() { // On crée un événement au clic sur la flèche
  currentSlide++; // On incrémente +1 à la valeur de currentSlide pour passer à la slide suivante

  if (currentSlide >= slides.length) { // Si la slide active est >= à la longueur du tableau "slides" (donc si on arrive à la fin du tableau)
    currentSlide = 0; // On revient au début du tableau
  }
  updateSlide(); // On appelle notre fonction updateSlide()
});

let arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', function() {
  currentSlide--;

  if (currentSlide < 0) { // Si la slide active revient au début et est inférieure à 0 (le début du tableau)
    currentSlide = slides.length - 1; // On revient à la dernière slide du tableau 
  }
  updateSlide();
});