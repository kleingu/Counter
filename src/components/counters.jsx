import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 1 }
    ]
  };

  handeleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value !== 0) counters[index].value--;
    this.setState({ counters });
  };

  handeleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handelReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 1;
      return c;
    });
    this.setState({ counters });
  };

  handeleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handelReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handeleDelete}
            onDecrease={this.handeleDecrease}
            onIncrement={this.handeleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
