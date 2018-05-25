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
		var widthOfBar = 1.36; // percent
    var measure;
    var bar;
    var barPositionInPercent;
    var measureWidth =  (1/totalBars)*100 + "%";

		for(var i = 1; i <= totalBars; i++) {
      barPositionInPercent = ((i / totalBars)*100)
      if (i == 0) {
        bar = <Bar left={ barPositionInPercent + "%"} key={i}/>
      }else {
        bar = <Bar left={ barPositionInPercent-widthOfBar + "%"} key={i}/>
			}

      // Create a div to contain the measure ('bar' is on the left most side)
      measure = <div style={{width: measureWidth}}>{bar}</div>

      bars.push(measure)
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
