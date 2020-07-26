import React, { Component } from 'react';

class LBAInput extends Component {
	render () {
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<div class="form-group row">
						<label for="lba_input" className="col-sm-2 col-form-label"> Input: </label>
						<div class="col-sm-10">
							<textarea className="form-control" id="lba_input" value={this.props.value} onChange={this.props.onChange} />
						</div>
					</div>
					<br />
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
  	}
}

export default LBAInput;