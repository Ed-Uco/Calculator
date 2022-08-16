import './App.css';
import logo from './images/logo.png';
import Button from './components/Button';
import Display from './components/Display';
import ClearButton from './components/ClearButton';
import { useState } from 'react';


function App() {

    const [input, setInput] = useState('');

    const addInput = (val) => {
        setInput(input + val);
    };
    
  return (
      <div className="App">
          <div className="logo-container">
              <img src={logo} className="logo" alt="logo principal" />
          </div>
          <div className="container-calculator">
              <Display input={input} />
              <div className="row">
                  <Button manageClick={addInput}>1</Button>
                  <Button manageClick={addInput}>2</Button>
                  <Button manageClick={addInput}>3</Button>
                  <Button manageClick={addInput}>+</Button>
              </div>
              <div className="row">
                  <Button manageClick={addInput}>4</Button>
                  <Button manageClick={addInput}>5</Button>
                  <Button manageClick={addInput}>6</Button>
                  <Button manageClick={addInput}>-</Button>
              </div>
              <div className="row">
                  <Button manageClick={addInput}>7</Button>
                  <Button manageClick={addInput}>8</Button>
                  <Button manageClick={addInput}>9</Button>
                  <Button manageClick={addInput}>*</Button>
              </div>
              <div className="row">
                  <Button manageClick={addInput}>=</Button>
                  <Button manageClick={addInput}>0</Button>
                  <Button manageClick={addInput}>.</Button>
                  <Button manageClick={addInput}>/</Button>
              </div>
              <div className="row">
                  <ClearButton>Clear</ClearButton>
              </div>
              <div className="row"></div>
          </div>
      </div>
  );
}

export default App;
