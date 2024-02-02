// tooltips con código de Bootstrap v5.3

var tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//smooth scroll con jquery 3.7.1

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
	// cuando el scroll en el eje vertical sea mayor a 1000 pixeles, 
	//agregaremos al nav la clase .bg-dark de Bootstrap
	if (window.scrollY > 1000) {
		navbar.classList.add('bg-dark');
	// y aqui removemos esa clase .bg-dark de Bootstrap para que vuelva a ser transparente	
	} else if (window.scrollY <= 1000) {
		navbar.classList.remove('bg-dark');
	}
});