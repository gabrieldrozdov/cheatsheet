// Title
const colors = ['pink', 'green', 'blue', 'yellow', 'purple', 'red'];
function initializeTitle(elmnt) {
	let temp = '';
	let index = 0;
	let delay = 0;
	for (let letter of elmnt.innerText) {
		let computetedDelay = (elmnt.innerText.length - delay) / 5;
		temp += `<span style="--primary: var(--${colors[index]}); animation-delay: -${computetedDelay}s"><span style="animation-delay: -${computetedDelay}s;">${letter}</span></span>`;
		delay++;
		index++;
		if (index >= colors.length) {
			index = 0;
		}
	}
	elmnt.innerHTML = temp;
}
initializeTitle(document.querySelector('.home-header-title-big'));
for (let title of document.querySelectorAll('.home-nav-link-title-big')) {
	initializeTitle(title);
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