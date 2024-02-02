// tooltips 

var tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//smooth scroll con jquery

$("a").click(function () {
	if (this.hash !== "") {
		var hash = this.hash;
		$("html, body").animate({
			scrollTop: $(hash).offset().top
		}, 250); // 1000 me parecía muy lento
	}
});

// para que el navbar cambie de color al bajar 

// seleccionamos al nav desde la clase .navbar
var navbar = document.querySelector('.navbar');
//escuchamos el evento scroll de la ventana que contiene nuestro DOM
window.addEventListener('scroll', function () {
	// cuando el scroll en el eje vertical sea mayor a 500 pixeles, 
	//agregaremos al nav la clase .navbar-scrolled que creamos en style.css
	if (window.scrollY > 500) {
		navbar.classList.add('navbar-scrolled');
	// y aqui removemos esa clase .navbar-scrolled para que vuelva a ser transparente	
	} else if (window.scrollY <= 500) {
		navbar.classList.remove('navbar-scrolled');
	}
});