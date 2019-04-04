import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    resetCounter : 1,
    counters: [
      { name: 'sofa',         initialValue: 1, value: 1, valid: true },
      { name: 'chair',        initialValue: 2, value: 2, valid: true },
      { name: 'coffe-table',  initialValue: 3, value: 3, valid: true },
      { name: 'side-table',   initialValue: 4, value: 4, valid: true }
    ]
  };

  handelReset = () => {
    let resetCounter = this.state.resetCounter+1;
    const counters = this.state.counters.map(counterData => {
      counterData.value = counterData.initialValue;            
      counterData.valid = true;
      return counterData;
    });
    this.setState({ resetCounter, counters });
  };

  handleCounterChange(counterData, value){    
    let isSameCounter = (oldCounter, newCounter) => oldCounter.name === newCounter.name;
    let newCounter = Object.assign({}, counterData, {value});
    let updateCounter = (oldCounter) => isSameCounter(oldCounter, newCounter) ? newCounter  : oldCounter;
    
    const counters = this.state.counters.map(updateCounter);
    this.setState({ counters });
  }

  deleteCounter(name){            
    const counters = this.state.counters.map(counterData => {
      return (counterData.name === name) ?
        Object.assign({}, counterData, {valid:false}) :
        counterData      
    });
    this.setState({ counters });
  }


  render() {
    let createCounterComp = (counterData) => {
      if(!counterData.valid){
        return null;
      }
      return (
        <div className="counter-wrapper" key={counterData.name + this.state.resetCounter}>
          <Counter            
            defaultValue={counterData.initialValue}
            onChange={(newValue) => this.handleCounterChange(counterData, newValue)}
          />
          <button onClick={() => this.deleteCounter(counterData.name)} className="btn btn-danger btn-sm m-2" >
            Delete
          </button>
        </div>
        );        
    };


     return (
      <div>
        <button
          onClick={this.handelReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        { this.state.counters.map(createCounterComp)}
      </div>
    );
  }
}

export default Counters;
