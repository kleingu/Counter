import React, { Component } from "react";

class Counter extends Component {  
  componentWillMount(){             
      let initialValue =  Number.isInteger(this.props.defaultValue) ? 
        this.props.defaultValue : 
        1;      
      this.setState({ value: initialValue });      
  }  

  reportChanges(newValue){
    if(this.props.onChange){
      this.props.onChange(newValue);
    } 
  }

  changeCounterValue(newValue){
    this.setState({ value : newValue });
    this.reportChanges(newValue);
  }

  handleIncrease(){    
    this.changeCounterValue(this.state.value + 1)    
  }

  handleDecrease(){
    if(this.state.value > 0){
      this.changeCounterValue(this.state.value - 1)          
    }
  }

  render() {    
    let createValueBadge = () => {
      return (<span className={this.getBadgeClasses()}>{this.getCounterText()}</span>);
    };

    let createButton = (clickEventHandler, name) => {
      return (
        <button key={name} onClick={clickEventHandler} className="btn btn-secondary btn-sm m-2">
          {name}
        </button>
      );
    };
    let decreaseFunction = () => this.handleDecrease();
    let increaseFunction = () => this.handleIncrease();
    return (
      <div>        
        {createButton(decreaseFunction, 'decrese')}
        {createValueBadge()}
        {createButton(increaseFunction, 'increase')}
      </div>
    );
  }

  getBadgeClasses() {    
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  getCounterText() {    
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
