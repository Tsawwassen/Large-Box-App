import React, { Component } from 'react';

class LBAInput extends Component {
	render () {
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<label>
						Input:
						<textarea value={this.props.value} onChange={this.props.onChange} />
					</label>
					<br />
					<input type="submit" value="Create" />
				</form>
			</div>
		);
  	}
}

export default LBAInput;