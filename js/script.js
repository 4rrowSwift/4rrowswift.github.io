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
const animItems = document.querySelectorAll('._anim-items');
let amountAnimItems = animItems.length;
if (amountAnimItems > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < amountAnimItems; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}
			else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);

}

function getPosition(e) {
	var x = y = 0;

	if (!e) {
		var e = window.event;
	}

	if (e.pageX || e.pageY) {
		x = e.pageX;
		y = e.pageY;
	} else if (e.clientX || e.clientY) {
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	return { top: y, left: x, }
}

function getCoords(e) {
	var box = e[0].getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};
}

function setMargin() {
	var elem = document.getElementsByClassName("but");
	var start = getCoords(elem);
	var end = getPosition(event);
	return {
		marginLeft: end.left - start.left,
		marginTop: end.top - start.top
	}
}

function CircleBig() {
	var circle = document.getElementsByClassName("circle");
	var margin = setMargin();
	circle[0].setAttribute("style", `margin-left: ${margin.marginLeft}px; margin-top: ${margin.marginTop}px; top: -50px; left: -50px`);
	setTimeout( function(e){circle[0].setAttribute("style", `margin-left: ${margin.marginLeft}px; margin-top: ${margin.marginTop}px; transition: .7s; transform: scale(420,420);`)}, 100);
}

function CircleSmoll() {
	var circle = document.getElementsByClassName("circle");
	circle[0].style.width = "10px";
	circle[0].style.height = "10px";
}