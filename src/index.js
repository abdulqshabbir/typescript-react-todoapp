import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App todos={[
    { text: 'Study some programming', isComplete: false },
    { text: 'Build programming website', isComplete: false },
    { text: 'Get office drinks', isComplete: true }
]}/>, document.getElementById('root'));