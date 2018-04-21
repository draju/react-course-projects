class VisibilityToggle extends React.Component {

	constructor(props){
		super(props);
		this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
		this.state = {
			visibility: true
		}
	}
	handleVisibilityToggle(){
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}
	render(){
		return (
			<div>
			<h1>Visibility Toggle</h1>
			<button onClick={this.handleVisibilityToggle}>
				{this.state.visibility ? 'Hide Details' : 'Show Details'}
			</button>
			{
				this.state.visibility && (
					<div>
					<p>These are my app details</p>
					</div>
				)
		  	}			
			</div>			
		);
	}	
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));




//Old version of code before using Components and state:
//console.log('Visibility Toggle is running');

// let visibility = false;

// const onVisibilityToggle = () => {
// 	visibility = !visibility;
// 	renderApp();
// }

// const appRoot = document.getElementById('app');

// const renderApp = () => {
// 	const template = (
// 		<div>
// 		  <h1>Visibility Toggle</h1>
// 		  <button onClick={onVisibilityToggle}>
// 		  	{visibility ? 'Hide Details' : 'Show Details'}
// 		  </button>
// 		  {
// 		  	visibility && (
// 		  		<div>
// 		  		<p>These are my app details</p>
// 		  		</div>
// 		  	)
// 		  }
// 		</div>
// 	);	

// 	ReactDOM.render(template,appRoot);
// }

// renderApp();


