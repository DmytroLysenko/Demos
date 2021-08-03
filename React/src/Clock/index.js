import React from "react";

import styles from "./timer.module.css";

export default class Clock extends React.Component {
  static defaultProps = {
    initTime: new Date(),
  };

  state = {
    date: this.props.initTime,
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    if (this.timerId) clearInterval(this.timerId);
  }

  render() {
    const time = this.state.date.toLocaleTimeString();
    return (
      <div className={styles.container}>
        <span>Now is: {time}</span>
      </div>
    );
  }
}
