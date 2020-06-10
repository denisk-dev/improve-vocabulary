/**
 * author: Denis Kravchenko
 */
import React, { Component } from "react";

class QuizButton extends Component {
  state = {
    bgColor: this.props.initColor,
  };

  handleClick = () => {
    this.setState({
      bgColor: this.props.color,
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      bgColor: nextProps.initColor,
    });
  }

  render() {
    return (
      <div className="col-sm">
        <button
          className="btn btn-lg btn-block btn-outline-secondary"
          style={{ backgroundColor: this.state.bgColor }}
          onClick={this.handleClick}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default QuizButton;
