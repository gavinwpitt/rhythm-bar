import React from 'react';
import ReactDOM from 'react-dom';
import './RhythmBar.css';
import Bar from '../Bar/Bar.js'

class RhythmBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beats: 4
    }
    console.log(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
    
  componentWillReceiveProps(n) {
    console.log("componentWillReceiveProps");
  }

	renderBars(){
    var totalBars = this.state.beats;

		// Always have the left most bar
    var bars = [<Bar padding={"0%"} key={0}/>];

    // 'width' is to account for the width of each bar
		var width = (100 - (totalBars*0.23))/totalBars + "%";
		
		for(var i = 1; i <= totalBars; i++) {
			var bar = <Bar padding={ width } key={i}/>
			bars.push(bar)
		}
		
		return bars;
	}

	render() {
		var bars = this.props.bars
		return (
			<div id="rythm-bar-container">{this.renderBars()}</div>
		);
	}
}

export default RhythmBar
