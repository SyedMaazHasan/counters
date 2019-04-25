import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  styles = {
    margin: 2,
    padding: 1
  };

  render() {
    return (
      <div>
        <button className="badge" style={{ margin: 4 }}>
          {this.props.count}
        </button>
        <button
          className="btn btn-success"
          style={this.styles}
          onClick={this.props.increment}
        >
          increment
        </button>
        <button
          className={
            this.props.count == 0
              ? "btn btn-warning disabled"
              : "btn btn-warning "
          }
          style={this.styles}
          onClick={this.props.decrement}
        >
          decrement
        </button>
        <button
          className="btn btn-danger btn-sm"
          style={this.styles}
          onClick={this.props.delete}
        >
          delete
        </button>
      </div>
    );
  }
}
export default Counter;
