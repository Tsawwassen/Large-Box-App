import React, { Component } from 'react';

//CSS
import './lba_label.css';

class LBALabel extends Component {
	render () {
		return (
			
				
				<div className="LBALabel">
					<p>{this.props.value.id}, {this.props.value.name}, {this.props.value.l}, {this.props.value.w}, {this.props.value.h} </p>
				</div>

			
		);
  	}
}

export default LBALabel;
