import React  from 'react';
import ReactDOM from 'react-dom';  
import App from './App';
import './style.css';

class Asd extends React.Component {

  render() {  
    return <App />;
  }
}

ReactDOM.render(<Asd />,document.getElementById('calculator')); 
