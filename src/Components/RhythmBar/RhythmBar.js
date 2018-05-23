import React from 'react';
import ReactDOM from 'react-dom';
import './RhythmBar.css';
import Bar from '../Bar/Bar.js'
import { connect } from 'react-redux'

class RhythmBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beats: 4
    }

    console.log("constructor", this);

  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState(nextProps.state);
    console.log("componentWillReceiveProps")
    console.log(this.state);
  }

	renderBars(){
    var totalBars = this.state.beats;
    console.log("...", this);
		// Always have the left most bar
    var bars = [<Bar left={"0%"} key={0}/>];

    // to account for the width of each bar
		var widthOfBar = 1.3; // percent
		var widthOfBars = widthOfBar*totalBars

		for(var i = 1; i < totalBars; i++) {
			var bar = <Bar left={ ((i / totalBars)*100)-widthOfBar + "%"} key={i}/>
			bars.push(bar)
		}
		
    // always have right most bar
    bars.push(<Bar left={(100-widthOfBar) + "%"} key={totalBars}/>)
		return bars;
	}

	render() {
    console.log("render")
    var _self = this;
		return (
      <div>
  			<div id="rythm-bar-container">{this.renderBars()}</div>
      </div>
		);
	}
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    state: state.RhythmBar
  };
}


export default connect(
  mapStateToProps,
  null
)(RhythmBar);
