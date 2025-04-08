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

// Header animation
function animateHeader() {
	const headerAnimation = document.querySelector('.header-animation');
	const circle = document.createElement('circle');
	circle.classList.add('header-circle');
	circle.style.top = `${Math.random()*100}%`;
	circle.style.left = `${Math.random()*100}%`;
	circle.style.width = `${Math.random()*50+25}vw`;
	circle.style.height = `${Math.random()*50+25}vw`;
	circle.style.opacity = `0`;
	circle.style.setProperty('--primary', `var(--${colors[Math.floor(Math.random()*colors.length)]})`);
	circle.style.transform = `translate3d(-50%, -50%, 0) scale3d(.8, .8, 1) rotate(${Math.random()*360-180}deg)`;
	headerAnimation.append(circle);
	setTimeout(() => {
		circle.style.transform = `translate3d(${Math.random()*100-100}%, ${Math.random()*100-200}%, 0) scale3d(1, 1, 1) rotate(${Math.random()*360-180}deg)`;
		circle.style.opacity = `1`;
	}, 50)
	setTimeout(() => {
		circle.style.opacity = `0`;
	}, 5000)
	setTimeout(() => {
		circle.remove();
	}, 10000)
}
animateHeader();
animateHeader();
setInterval(animateHeader, 2000);
setInterval(animateHeader, 2000);