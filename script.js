// Title
const colors = ['pink', 'green', 'blue', 'yellow', 'purple', 'red'];
function initializeTitle() {
	const titleBig = document.querySelector('.header-title-big');
	let temp = '';
	let index = 0;
	let delay = 0;
	for (let letter of titleBig.innerText) {
		let computetedDelay = (titleBig.innerText.length - delay) / 5;
		temp += `<span style="--primary: var(--${colors[index]}); animation-delay: -${computetedDelay}s"><span style="animation-delay: -${computetedDelay}s;">${letter}</span></span>`;
		delay++;
		index++;
		if (index >= colors.length) {
			index = 0;
		}
	}
	titleBig.innerHTML = temp;
}
initializeTitle();

// Menu
function toggleMenu() {
	const menu = document.querySelector('.menu');
	if (parseInt(menu.dataset.active) == 1) {
		menu.dataset.active = 0;
	} else {
		menu.dataset.active = 1;
	}
}

// Close menu when link pressed
for (let link of document.querySelectorAll('.menu a')) {
	link.addEventListener('click', toggleMenu);
}

// Animate in links
const transitionObserverLinks = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		let elmnt = entry.target;
		if (entry.isIntersecting) {
			elmnt.dataset.active = 1;
		} else {
			// elmnt.dataset.active = 0;
		}
	});
});
for (let link of document.querySelectorAll('.section-content > a')) {
	link.dataset.active = 0;
	transitionObserverLinks.observe(link);
}

// Animate in sections
const transitionObserverSections = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		let elmnt = entry.target;
		if (entry.isIntersecting) {
			elmnt.dataset.active = 1;
		} else {
			elmnt.dataset.active = 0;
		}
	});
});
for (let section of document.querySelectorAll('.section')) {
	section.dataset.active = 0;
	transitionObserverSections.observe(section);
}