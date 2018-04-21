class IndecisionApp extends React.Component {
	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: []
		}
	}
	//Pass event handlers to child components so they can manipulate data of parent
	handleDeleteOptions(){
		this.setState(() => {
			return {
				options: []
			};
		});
	}
	handlePick(){
		if(this.state.options.length > 0){
			const pickedOption = Math.floor(Math.random()*this.state.options.length);
			alert(this.state.options[pickedOption]);
		}
	}
	handleAddOption(option){
		if(!option){ //check for empty string
			return 'Must pass non-empty string';
		} else if (this.state.options.indexOf(option) > -1){
			return 'Duplicate options not allowed';
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat(option)
			}
		});
	}
	render(){
		const title = "Indecision";
		const subtitle = "Put your life in the hands of a computer.";

		return (
		  <div>
			<Header title={title} subtitle={subtitle}/>
			<Action 
				hasOptions={this.state.options.length > 0}
				handlePick={this.handlePick} 
			/>
			<Options 
				options={this.state.options} 
				handleDeleteOptions={this.handleDeleteOptions}
			/>
			<AddOption 
				handleAddOption = {this.handleAddOption}
			/>
		  </div>
		);		
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
};

const Action = (props) => {
	return (
		<div>
			<button 
				onClick={props.handlePick}
				disabled={!props.hasOptions}
			>
			What should I do?
			</button>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
		{
			props.options.map((option) => <Option key={option} optionText={option}/>)
		}
		<button onClick={props.handleDeleteOptions}>Remove All</button>
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
		</div>
	);
}

class AddOption extends React.Component {
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		}
	}
	handleAddOption(e){
		e.preventDefault();
		const option = e.target.elements.option.value.trim(); 
		const error = this.props.handleAddOption(option);
		
		if(error){
		  this.setState(() => {
				return {   //can use the ES6 shorthand return { error }; since two objects have same name
					error: error
				};
			});
		}
	}
	render(){
		return (
			<div>
				{ 
					this.state.error && <p>{this.state.error}</p>
				}
				<form onSubmit={this.handleAddOption}>
				  <input type="text" name="option" />
				  <button>Add Option</button>
				</form>
			</div>
		);
	}
}

const jsx = (
	<div>
		<Header />
		<Action />
		<Options />
		<AddOption />
	</div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));