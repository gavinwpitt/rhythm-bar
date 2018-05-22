import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Bar extends React.Component {
	render() {
		return (
			<div style={{paddingLeft: this.props.padding}}>
				<div className="bar"></div>
			</div>
		);
	}
}

class RhythmBar extends React.Component {
	renderBars(totalBars){
		var bars = [];
		// Always have the left most bar
		var width = (100 - (totalBars*0.23))/totalBars + "%";
		bars = [<Bar padding={"0%"} key={0}/>];
		console.log("bars", bars)
		for(var i = 1; i <= totalBars; i++) {
			var bar = <Bar padding={ width } key={i}/>
			bars.push(bar)
		}
		console.log(bars.length)
		return bars;
	}

	render() {
		var bars = this.props.bars
		return (
			<div id="rythm-bar-container">{this.renderBars(bars)}</div>
		);
	}
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <RhythmBar bars={8} />,
  document.getElementById('root')
);
