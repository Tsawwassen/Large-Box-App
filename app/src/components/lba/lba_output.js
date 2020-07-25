import React, { Component } from 'react';

class LBAOutput extends Component {
	render () {
		//console.log(this.props.labels);
		return (
			<div>
				<h1>print component</h1>
				
				{this.props.labels.map((value, index) => {
        			return <p key={index}>{value.id}</p>
      			})}
      			
				<button onClick={this.props.onClick}>Back</button>
			</div>
		);
  	}
}

export default LBAOutput;