import React from 'react';
import ReactDOM from 'react-dom';
import './Bar.css';

class Bar extends React.Component {
	render() {
		return (
			<div style={{paddingLeft: this.props.padding}}>
				<div className="bar"></div>
			</div>
		);
	}
}


export default Bar
