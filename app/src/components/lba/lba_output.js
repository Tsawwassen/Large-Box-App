import React, { Component } from 'react';
import LBALabel from './lba_label.js';

class LBAOutput extends Component {
	render () {
		return (
			<div>
				<h1 className="largeBoxAppHeader">print component</h1>
				<button onClick={this.props.onClick} className="btn btn-primary backButton" id="test">Back</button>
				
				{this.props.labels.map((value, index) => {
        			//return <p key={index}>{value.id}, {value.name}, {value.l}, {value.w}, {value.h} </p>
        			return <LBALabel key={index} value={value} />
      			})}
      			
				
				
			</div>
		);
  	}
}

export default LBAOutput;