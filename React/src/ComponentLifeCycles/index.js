import React, { Component } from "react";

export default class LifeCycles extends Component {
  state = {};

  static getDerivedStateFromProps() {
    console.group("getDerivedStateFromProps");
    console.log("first arg: nextProps");
    console.log("second arg: prevState");
    console.log("calls before each render()");
    console.log("it is possible to use setState");
    console.log('no access to "this"');
    console.log('should return {new state} or null');
    console.groupEnd();
    return {}
  }

  render() {
    console.group("render");
    console.log("without argument");
    console.log("return JSX-expression");
    console.log("it is forbidden to use setState");
    console.groupEnd();
    return <p>Component Life Cycles (see console)</p>;
  }

  componentDidMount() {
    console.group("componentDidMount");
    console.log("without argument");
    console.log("calls after component will render to DOM");
    console.log("using setState calls rerender");
    console.groupEnd();
  }

  shouldComponentUpdate() {
    console.group("shouldComponentUpdate");
    console.log("first arg: nextProps");
    console.log("second arg: nextState");
    console.log("calls before rerender component");
    console.log("return true/false - need rerender or not");
    console.log("it is forbidden to use setState");
    console.groupEnd();
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.group("getSnapshotBeforeUpdate");
    console.log("first arg: prevProps");
    console.log("second arg: prevState");
    console.log("calls before rerender component");
    console.log(
      "it is possible to use for calculate sizes in DOM before insert changes"
    );
    console.log(
      "value return will throw the third argument in componentDidUpdate"
    );
    console.groupEnd();
  }

  componentDidUpdate() {
    console.group("componentDidUpdate");
    console.log("first arg: prevProps");
    console.log("second arg: prevState");
    console.log("third arg: snapshot");
    console.log("calls after rerender component");
    console.log("not calls at first render");
    console.log(
      "it is possible to use setState, with required check condition"
    );
    console.log("it is possible to send HTTP request");
    console.log(
      "it is possible to use for calculate sizes in DOM before insert changes"
    );
    console.log(
      "value return will throw the third argument in componentDidUpdate"
    );
    console.groupEnd();
  }

  componentWillUnmount() {
    console.group("componentWillUnmount");
    console.log("first arg: prevProps");
    console.log("second arg: prevState");
    console.log("calls before component will unmount from DOM");
    console.log("used for clear listeners, timers, HTTP requests...");
    console.log("no sense to use setState");
    console.groupEnd();
  }

  componentDidCatch() {
    console.group("componentDidCatch");
    console.log("first arg: error");
    console.log("second arg: info - srack trace of error");
    console.log("used for catches error in childrens, not in self");
    console.groupEnd();
  }
}
