import React, { Component } from 'react';

class LargeBoxApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: ''
		};

		this.handleCreateButton = this.handleCreateButton.bind(this);

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleCreateButton(event){
  		console.log(this.state.value);
  		event.preventDefault();
  	}

  	handleInputChange(event){
  		this.setState({value: event.target.value});
  	}


	render () {
		return (
			<div>
	 			<h1>LargeBoxApp2</h1>
	 			<form onSubmit={this.handleCreateButton}>
					<label>
						Input:
						<textarea value={this.state.value} onChange={this.handleInputChange} />
					</label>
					<br />
				  <input type="submit" value="Create" />
				</form>
	 		</div>
		);
  	}
}

export default LargeBoxApp;