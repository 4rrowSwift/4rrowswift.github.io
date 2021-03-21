let burger = document.getElementById('menu');
burger.onclick = function () {
	let list = burger.classList;
	let body = document.getElementById('menu__body');
	if (list[list.length - 1] != '_active') {
		body.classList.add('_active');
		list.add('_active');
	}
	else {
		body.classList.remove('_active');
		list.remove('_active');
	}
}
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();