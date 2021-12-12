import React from "react";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state= { term: ''};
	}

	onInputChange = (e) => {
		this.setState({term: e.target.value});
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	}

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Video Search</label>
						<input value={this.state.term} onChange={this.onInputChange} type="text" />
					</div>
				</form>
      </div>
    );
  }
}

export default SearchBar;
