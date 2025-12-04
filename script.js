// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const toggle = document.querySelector('.nav-toggle');
	const navList = nav ? nav.querySelector('ul') : null;

	if (!toggle || !navList) return;

	function closeNav() {
		nav.classList.remove('open');
		toggle.setAttribute('aria-expanded', 'false');
			toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
	}

	toggle.addEventListener('click', (e) => {
		e.stopPropagation();
		const isOpen = nav.classList.toggle('open');
		toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			toggle.innerHTML = isOpen
				? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
				: '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
	});

	// Close when clicking outside the nav
	document.addEventListener('click', (e) => {
		if (!nav.contains(e.target) && nav.classList.contains('open')) {
			closeNav();
		}
	});

	// Close on escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && nav.classList.contains('open')) {
			closeNav();
			toggle.focus();
		}
	});

	// Optional: close when a nav link is clicked (mobile)
	navList.addEventListener('click', (e) => {
		const target = e.target;
		if (target.tagName === 'A' && nav.classList.contains('open')) {
			closeNav();
		}
	});
});
