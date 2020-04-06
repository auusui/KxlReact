import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Laundromat extends React.Component {

  render() {
    return (
        <h1>Kapahulu Express Laundromat</h1>
  );
  }
}

ReactDOM.render(<Laundromat />, document.getElementById('root'));