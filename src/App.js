import React, { Component } from "react";
import Counter from "./counter";
import "bootstrap/dist/css/bootstrap.css";
class Counters extends Component {
  state = {
    counters: [{ count: 0, id: 1 }, { count: 0, id: 2 }, { count: 0, id: 3 }]
  };

  increment = c => {
    //find index of elemet c
    const index = this.state.counters.indexOf(c);
    //console.log("index=", index);
    const temp = this.state.counters;
    temp[index].count = temp[index].count + 1;
    this.setState({ counters: temp });
  };
  decrement = c => {
    if (c.count == 0) {
      return;
    }
    //find index of elemet c
    const index = this.state.counters.indexOf(c);
    // console.log("index=", index);
    const temp = this.state.counters;
    temp[index].count = temp[index].count - 1;
    this.setState({ counters: temp });
  };
  delete = c => {
    //find index of elemet c

    const index = this.state.counters.indexOf(c);
    //console.log("index=", index);
    const temp = this.state.counters;
    //delete the value at index
    temp.splice(index, 1);
    this.setState({ counters: temp });
  };
  add = () => {
    const temp = this.state.counters;
    temp.push({ count: 0, id: this.state.counters.length + 1 });
    this.setState({ counters: temp });
    // console.log(temp);
  };
  render() {
    {
      console.log(this.state.counters);
    }
    return (
      <div>
        <h1 className="page-header">
          Showing {this.state.counters.length} Counters
        </h1>
        <button
          className="btn btn-defaultbtn btn-primary"
          style={{ margin: 15 }}
          onClick={this.add}
        >
          add counter
        </button>
        {this.state.counters.map(c => (
          <Counter
            count={c.count}
            increment={() => this.increment(c)}
            decrement={() => this.decrement(c)}
            delete={() => this.delete(c)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
