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