/**
 * author: Denis Kravchenko
 */
import React, { Component } from "react";
import axios from "axios";

//Creating context
const VocabularyContext = React.createContext();

export class VocabularyContextProvider extends Component {
  state = {
    terms: [],
    requestSatus: false,
  };

  handleDeleteTerm = (id, term, description) => {
    axios
      .delete("http://localhost:3500/api/terms", {
        data: {
          termName: term,
          termDescription: description,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    const currentState = [...this.state.terms];
    const updatedState = currentState.filter((term) => {
      if (term._id !== id) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({
      terms: updatedState,
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3500/api/terms")
      .then((res) =>
        this.setState({
          terms: res.data,
          requestSatus: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <VocabularyContext.Provider
        value={{
          state: { ...this.state },
          handleDeleteTerm: this.handleDeleteTerm,
        }}
      >
        {this.props.children}
      </VocabularyContext.Provider>
    );
  }
}

export const Consumer = VocabularyContext.Consumer;
