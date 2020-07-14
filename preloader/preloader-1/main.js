/* Preloader template with recursive function */

var preloaderContainer, preloaderBox, preloaderBoxClass;

preloaderContainer = document.getElementById('preloader-container');
preloaderBox = document.getElementById('preloader-box');
preloaderBoxClass = preloaderBox.className;

function preloader(active) {
	if (active) {
		preloaderBox.className = preloaderBoxClass;
	}

	preloaderBox.className += ' loading';

	setTimeout( () => {
		preloaderBox.className = preloaderBoxClass;
		preloaderBox.className += ' unloading';

	}, 5000 ); // CSS transition transform[scale] time

	setTimeout( () => {
		preloader(true);
	}, 7000 ); // Delay for CSS transition time
}

function hidePreloader() {
		preloaderContainer.className += ' hidden';
}




preloader();


setTimeout( () => {
	hidePreloader();
}, 8500 ); // at 8.5 seconds, preloader will disappear