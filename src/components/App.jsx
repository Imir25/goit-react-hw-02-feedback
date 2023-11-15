import React, { Component } from 'react';
import FeedbackWidget from './FeedbackWidget';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <FeedbackWidget />
      </div>
    );
  }
}

export default App;
