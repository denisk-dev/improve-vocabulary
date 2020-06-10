/**
 * author: Denis Kravchenko
 */
import React, { Component } from "react";
import QuizButton from "./QuizButton";

class PracticeQuiz extends Component {
  state = {
    questionsNum: this.props.questions.length,
    initColor: "",
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      questionsNum: nextProps.questions.length,
    });
  }

  handleNextQuestion = () => {
    this.setState({
      questionsNum:
        this.state.questionsNum !== 1
          ? this.state.questionsNum - 1
          : this.state.questionsNum,
    });
  };

  render() {
    const sampleTerms = [
      { term: "onomatopoeia", color: "lightcoral" },
      { term: "hype", color: "lightcoral" },
      { term: "antonym", color: "lightcoral" },
    ];

    if (this.props.questions.length !== 0 && this.state.questionsNum !== 0) {
      let questionNumber = this.state.questionsNum - 1;
      let question = this.props.questions[questionNumber];

      let quizQuestions = { ...question };
      if (quizQuestions.otherTerms.length < 4) {
        let i = quizQuestions.otherTerms.length - 1;
        while (quizQuestions.otherTerms.length < 4) {
          quizQuestions.otherTerms.push(sampleTerms[i]);
          i++;
        }
      }

      return (
        <div className="card text-center">
          <div className="card-header">
            {this.props.lengthOfQuiz - this.state.questionsNum + 1} /{" "}
            {this.props.lengthOfQuiz}
          </div>
          <div className="card-body">
            <h5 className="card-title">{question.termDescription}</h5>
            <div className="container mt-5 pb-5">
              <div className="row">
                <QuizButton
                  value={question.otherTerms[0].term}
                  color={question.otherTerms[0].color}
                  initColor={this.state.initColor}
                />
                <QuizButton
                  value={question.otherTerms[1].term}
                  color={question.otherTerms[1].color}
                  initColor={this.state.initColor}
                />
              </div>
              <div className="row mt-4">
                <QuizButton
                  value={question.otherTerms[2].term}
                  color={question.otherTerms[2].color}
                  initColor={this.state.initColor}
                />
                <QuizButton
                  value={question.otherTerms[3].term}
                  color={question.otherTerms[3].color}
                  initColor={this.state.initColor}
                />
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button
              className="btn btn-info btn-lg"
              onClick={this.handleNextQuestion}
            >
              Next
            </button>
          </div>
        </div>
      );
    } else {
      //add loader
      return <p>You don't have any terms in your vocabulary at the moment.</p>;
    }
  }
}

export default PracticeQuiz;
