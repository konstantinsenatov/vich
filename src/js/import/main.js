const windowInnerWidth = window.innerWidth;
if (windowInnerWidth > 768) {
	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('active');
			}
		});
	}
	let options = {
		threshold: [0.5] 
	};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.show');
	for (let elm of elements) {
		observer.observe(elm);
	}
}