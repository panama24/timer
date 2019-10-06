import React, { Component } from 'react';

import { generateDisplay } from "./helpers";

class App extends Component {
  state = {
    currentTimer: 0,
    intervalId: 0,
    segmentIndex: 0
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    const intervalId = setInterval(() => {
      this.setState({
        currentTimer: this.state.currentTimer + 1
      });
    }, 1000);

    this.setState({ intervalId });
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
  };

  updateSegmentIndex = () =>
    this.setState({
      segmentIndex: this.state.segmentIndex + 1
    });

  render() {
    const { currentTimer, segmentIndex } = this.state;
    const {
      class_start_offset,
      class_end_offset,
      class_workout_offset,
      segments
    } = this.props.timeline;

    const { display, segment, time } = generateDisplay({
      class_start_offset,
      class_end_offset,
      class_workout_offset,
      currentTimer,
      segments,
      segmentIndex,
      stopTimer: this.stopTimer,
      updateSegment: this.updateSegmentIndex
    });

    return (
      <div className="App">
        <h1>{time}</h1>
        <h2>{display}</h2>
        <h2>{segment}</h2>
      </div>
    );
  }}

export default App;
