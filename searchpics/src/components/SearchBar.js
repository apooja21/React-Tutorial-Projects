import React from "react";

class SearchBar extends React.Component {
	onInputChange(event) {
		console.log(event.target.value);
	}

	render() {
		return (
			<div className='ui segment'>
				<form className='ui form '>
					<div className='ui icon input'>
						<input
							type='text'
							placeholder='Search...'
							onChange={this.onInputChange}
						/>
						<i className='search icon'></i>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
