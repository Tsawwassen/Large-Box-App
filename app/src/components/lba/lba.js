import React, { Component } from 'react';
import LBAInput from './lba_input.js';



class LargeBoxApp extends Component {

	constructor(props){

		super(props);

		//State values
		this.INPUT_STATE = "input";
		this.PRINT_STATE = "print";

		//Input Index keys
		this.REQ_ID_INDEX = 0;
		this.NAME_INDEX = 1;
		this.LENGTH_INDEX = 2;
		this.WIDTH_INDEX = 3;
		this.HEIGHT_INDEX = 4;

		this.state = {
			view: this.INPUT_STATE,
			value: '',
			labels: []
		};

		//LBA Input Binds
		this.handleCreateButton = this.handleCreateButton.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

	}

	handleCreateButton(event){

  		//Parse value to get label information

  		let input = this.state.value.split(/\r?\n/); //Each line in value is a lable request

  		if(input[input.length-1].length === 0){ //Check the last elementis blank, remove it from the array if it is
  			input.pop(); 
  		}
  		
  		let output = []
  		for(let i = 0 ; i < input.length ; i++){ //Parse each line for label information
  			input[i] = input[i].split(/\t/);
  			output[i] = {}; 
  			output[i].id = input[i][this.REQ_ID_INDEX];
  			output[i].name = input[i][this.NAME_INDEX];
  			output[i].l = input[i][this.LENGTH_INDEX];
  			output[i].w = input[i][this.WIDTH_INDEX];
  			output[i].h =  input[i][this.HEIGHT_INDEX];
  		}

  		//console.log(output);
  		//Once the array is populated, check for label requests that are too big.
  		////Swap values as needed.

  		
  		this.setState({labels: output});
  		this.setState({view: this.PRINT_STATE});

  		event.preventDefault();
  	}

  	handleInputChange(event){
  		this.setState({value: event.target.value});
  	}



	render () {
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