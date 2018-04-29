import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

	state = {
		options:[],
		selectedOption: undefined
	};
	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => option !== optionToRemove)
		}));
	};
	handlePick = () => {	
		const randomNum = Math.floor(Math.random()*this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({
			selectedOption : option
		}));
		
	};
	handleAddOption = (option) => {
		if(!option){ //check for empty string
			return 'Must pass non-empty string';
		} else if (this.state.options.indexOf(option) > -1){
			return 'Duplicate options not allowed';
		}

		this.setState((prevState) => ({ 
			options: prevState.options.concat(option) 
		}));
		
	};
	handleClearSelectedOption = () => {
		this.setState(() => ({
			selectedOption: undefined
		}));
	}	
	componentDidMount(){
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			
			if(options){
				this.setState(() => ({ options }));
			}
		}
		catch(e){
			//Do nothing at all
		}

	}
	componentDidUpdate(prevProps,prevState){
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options)
			localStorage.setItem('options',json);
		}
	}
	componentWillUnmount(){
		console.log('will unmount');
	}
	render(){
		const subtitle = "Put your life in the hands of a computer.";

		return (
		  <div>
			<Header subtitle={subtitle}/>
			<Action 
				hasOptions={this.state.options.length > 0}
				handlePick={this.handlePick} 
			/>
			<Options 
				options={this.state.options} 
				handleDeleteOptions={this.handleDeleteOptions}
				handleDeleteOption={this.handleDeleteOption}
			/>
			<AddOption 
				handleAddOption = {this.handleAddOption}
			/>
			<OptionModal
				selectedOption = {this.state.selectedOption}
				handleClearSelectedOption = {this.handleClearSelectedOption} 
			/>
		  </div>
		);		
	}
}
