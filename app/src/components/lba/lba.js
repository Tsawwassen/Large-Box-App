import React, { Component } from 'react';
import LBAInput from './lba_input.js';



class LargeBoxApp extends Component {

	constructor(props){

		super(props);

		//State values
		this.INPUT_STATE = "input";
		this.PRINT_STATE = "print";

		this.state = {
			view: this.INPUT_STATE,
			value: ''
		};

		//LBA Input Binds
		this.handleCreateButton = this.handleCreateButton.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

	}

	handleCreateButton(event){
  		console.log(this.state.value);

  		this.setState({view: this.PRINT_STATE});

  		event.preventDefault();
  	}

  	handleInputChange(event){
  		this.setState({value: event.target.value});
  	}



	render () {
		console.log( this.state.view === this.INPUT_STATE );
		console.log(this.state.view);
		console.log(this.INPUT_STATE);
		return (
			<div>
	 			<h1>LargeBoxApp</h1>
	 			{this.state.view === this.INPUT_STATE &&
					<LBAInput value={this.state.value} onChange={this.handleInputChange} onSubmit={this.handleCreateButton} />
				}
				{this.state.view === this.PRINT_STATE &&
					<h1>print</h1>
				}

	 		</div>
		);
  	}
}

export default LargeBoxApp;