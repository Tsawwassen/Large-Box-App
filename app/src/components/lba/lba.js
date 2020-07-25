import React, { Component } from 'react';
import LBAInput from './lba_input.js';
import LBAOutput from './lba_output.js';


/*********************************************
*
*		Sample Data

	1	a	36	36	36
	2	b	5	5	36
	3	a	5	36	5
	4	c	36	5	5
	5	a	5	5	5
	6	b	4.5	17.6	17.3
	7	c	4.5	18.1	18.1
	8	a	20	18.1	18.1

*
*
*********************************************/


class LargeBoxApp extends Component {

	constructor(props){

		super(props);

		//State values
		this.INPUT_STATE = "input";
		this.PRINT_STATE = "output";

		//Input Index keys
		this.REQ_ID_INDEX = 0;
		this.NAME_INDEX = 1;
		this.LENGTH_INDEX = 2;
		this.WIDTH_INDEX = 3;
		this.HEIGHT_INDEX = 4;

		//Large Box Max Size
		this.LARGE_BOX_MAX_SIZE = 36;

		this.state = {
			view: this.INPUT_STATE,
			value: '',
			labels: []
		};

		//LBA Input Binds
		this.handleCreateButton = this.handleCreateButton.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

		//LBA Output Binds
		this.handleBackButton = this.handleBackButton.bind(this);

	}

	handleCreateButton(event){

  		//Parse value to get label information
  		let input = this.state.value.split(/\r?\n/); //Each line in value is a lable request
  		if(input[input.length-1].length === 0){ //Check the last elementis blank, remove it from the array if it is
  			input.pop(); 
  		}

  		//Create output hash list
  		let output = []
  		for(let i = 0 ; i < input.length ; i++){ //Parse each line for label information
  			input[i] = input[i].split(/\t/);
  			output[i] = {}; 
  			output[i].id = input[i][this.REQ_ID_INDEX];
  			output[i].name = input[i][this.NAME_INDEX].toUpperCase(); //Change name to upper case so that the sortting by name wont be confused with case issues.
  			
  			//Check to see if dimensions need to be changed
  			let tempL = parseFloat(input[i][this.LENGTH_INDEX]);
  			let tempW = parseFloat(input[i][this.WIDTH_INDEX]);
  			let tempH = parseFloat(input[i][this.HEIGHT_INDEX]);
  			if((tempW + tempH) < this.LARGE_BOX_MAX_SIZE){ //No Changes needed
	  			output[i].l = tempL;
	  			output[i].w = tempW;
	  			output[i].h =  tempH;
	  		} else if((tempL+ tempH) < this.LARGE_BOX_MAX_SIZE){ //Swap given length with width
	  			output[i].l = tempW;
	  			output[i].w = tempL;
	  			output[i].h =  tempH;
	  		}else if((tempW + tempL) < this.LARGE_BOX_MAX_SIZE){ //Swap given height with length
	  			output[i].l = tempH;
	  			output[i].w = tempW;
	  			output[i].h = tempL;
	  		}else{ 	//Set box dimensions to 1 if sizes are too big for printer.
	  			output[i].l = 1;
	  			output[i].w = 1;
	  			output[i].h =  1;
	  		}
  		}

  		//Sort out by names
  		output.sort((a, b) => (a.name).localeCompare(b.name));

  		//Save output to labels and change view to output
  		this.setState({labels: output});
  		this.setState({view: this.PRINT_STATE});

  		event.preventDefault();
  	}

  	handleInputChange(event){
  		this.setState({value: event.target.value});
  	}

  	handleBackButton(event){
  		this.setState({value: ''});
  		this.setState({view: this.INPUT_STATE});
  	}

	render () {
		return (
			<div>
	 			<h1>LargeBoxApp</h1>
	 			{this.state.view === this.INPUT_STATE &&
					<LBAInput value={this.state.value} onChange={this.handleInputChange} onSubmit={this.handleCreateButton} />
				}
				{this.state.view === this.PRINT_STATE &&
					<LBAOutput onClick={this.handleBackButton} labels={this.state.labels}/>
				}
	 		</div>
		);
  	}
}

export default LargeBoxApp;