/**
 * author: Denis Kravchenko
 */
import React, { Component } from "react";
import axios from "axios";

class Newterm extends Component {
  state = {
    term: "",
    description: "",
  };

  handleAddTerm = (e) => {
    axios
      .post("http://localhost:3500/api/terms", {
        termName: this.state.term,
        termDescription: this.state.description,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  handleTerm = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  handleDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTerm}>
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="New Term"
                onChange={this.handleTerm}
                value={this.state.term}
              />
              <button
                className="btn btn-block btn-outline-info mt-2"
                type="submit"
              >
                Add Term
              </button>
            </div>
            <div className="col-9">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Description"
                onChange={this.handleDescription}
                value={this.state.description}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Newterm;
