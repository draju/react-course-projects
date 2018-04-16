'use strict';

console.log('Visibility Toggle is running');

var visibility = false;

var onVisibilityToggle = function onVisibilityToggle() {
	visibility = !visibility;
	renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toggle'
		),
		React.createElement(
			'button',
			{ onClick: onVisibilityToggle },
			visibility ? 'Hide Details' : 'Show Details'
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'These are my app details'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

renderApp();
