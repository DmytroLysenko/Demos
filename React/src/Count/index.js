import React, { Component } from "react";

const styles = {
  container: {
    width: "fit-content",
    margin: "0 auto",
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "lightblue",
    borderRadius: "10px",
  },
  span: {
    padding: "5px",
    borderBottom: "1px solid red",
    marginRight: "15px",
  },
};

export default class Count extends Component {
  state = {
    count: 0,
  };

  handleClick = (e) =>
    this.setState((prev) => ({
      count: ++prev.count,
    }));

  render() {
    return (
      <div style={{ ...styles.container }}>
        <p style={{ margin: "0, 0, 5px, 0" }}>You clicked:</p>
        <span style={styles.span}>{this.state.count}</span>
        <button type="button" onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}
