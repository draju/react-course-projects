console.log('Visibility Toggle is running');

let visibility = false;

const onVisibilityToggle = () => {
	visibility = !visibility;
	renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
	const template = (
		<div>
		  <h1>Visibility Toggle</h1>
		  <button onClick={onVisibilityToggle}>
		  	{visibility ? 'Hide Details' : 'Show Details'}
		  </button>
		  {
		  	visibility && (
		  		<div>
		  		<p>These are my app details</p>
		  		</div>
		  	)
		  }
		</div>
	);	

	ReactDOM.render(template,appRoot);
}

renderApp();


