import React, { Component } from 'react';

//CSS
import './lba_label.css';

class LBALabel extends Component {
	render () {
		return (
			
				
				<div className="LBA_Label">
					<div className="LBA_name">
						{this.props.value.name}
					</div>
					<div className="LBA_id">
						{this.props.value.id}
					</div>
					<div className="LBA_dims">
						DIMENSION
					</div>
				</div>

			
		);
  	}
}

export default LBALabel;

//<p>{this.props.value.id}, {this.props.value.name}, {this.props.value.l}, {this.props.value.w}, {this.props.value.h} </p>
