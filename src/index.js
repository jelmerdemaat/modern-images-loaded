const modernImagesLoaded = (elements, options = {}) =>
	new Promise((resolve, reject) => {
		const start = performance.now();

		if (!options.threshold) {
			options.threshold = 10000;
		}

		const checkLoaded = () => {
			const completed = elements.map(img => img.complete);
			const time = performance.now() - start;

			if (completed.every(item => item === true)) {
				resolve({ status: 'loaded', time });

				return;
			}

			if (time >= options.threshold) {
				reject({ status: 'timeout', time });

				return;
			}

			requestAnimationFrame(checkLoaded);
		};

		requestAnimationFrame(checkLoaded);
	});

export default modernImagesLoaded;
