import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import RhythmBar from '../RhythmBar/RhythmBar.js'
import Menu from '../Menu/Menu.js'

class Home extends React.Component {
  render() {
  	return(
	    <div id="appContainer">
	    	<RhythmBar />
	    	<Menu />
	    </div>
	);
  }
}

export default Home;
