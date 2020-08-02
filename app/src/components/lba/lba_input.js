import React, { Component } from 'react';

class LBAInput extends Component {
	render () {
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<div className="form-group row">
						<label className="col-sm-10 col-form-label"> Input: 
					
								<textarea className="form-control" id="lba_input" value={this.props.value} onChange={this.props.onChange} rows="15" />
						
						</label>
					</div>
					<br />
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
  	}
}

export default LBAInput;