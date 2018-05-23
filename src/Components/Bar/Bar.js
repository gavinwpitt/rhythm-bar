import React from 'react';
import ReactDOM from 'react-dom';
import './Bar.css';

class Bar extends React.Component {
	clicky(){
		console.log("clicky");
	}

	render() {
		var bar = document.createElement("div");
		bar.className = "bar";
		bar.addEventListener('click', this.clicky);
		console.log(bar);

		return (
			<div className="bar" style={{left: this.props.left}} onClick={this.clicky}></div>
		);
	}
}


export default Bar
