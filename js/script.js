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