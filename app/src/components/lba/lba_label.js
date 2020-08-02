import React, { Component } from 'react';

//SCSS
import './lba_label.scss';

class LBALabel extends Component {
	render () {
		return (
			
				
				<div className="LBA_Label">
					<div className="LBA_name">
						{this.props.value.name}
					</div>
					<div className="LBA_id">
						<b>{this.props.value.id}</b>
					</div>
					<div className="LBA_dims">
						<b>{this.props.value.l}</b> x <b>{this.props.value.w}</b> x <b>{this.props.value.h}</b>
					</div>
				</div>

			
		);
  	}
}

export default LBALabel;

//<p>{this.props.value.id}, {this.props.value.name}, {this.props.value.l}, {this.props.value.w}, {this.props.value.h} </p>
