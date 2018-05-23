import React from 'react';
import ReactDom from 'react-dom';
import RhythmBar from './Components/RhythmBar/RhythmBar'
import registerServiceWorker from './registerServiceWorker'

ReactDom.render (<RhythmBar />, document.getElementById('root'));
registerServiceWorker();