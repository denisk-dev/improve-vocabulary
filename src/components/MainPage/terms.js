/**
 * author: Denis Kravchenko
 */
import React from "react";
import { Consumer } from "../../context/VocabContext";
import Spinner from "../../Spinner/Spinner";
import SingleTerm from "./SingleTerm";

const Terms = () => {
  return (
    <Consumer>
      {(value) => {
        if (value.state.requestSatus === false) {
          return <Spinner />;
        } else if (value.state.terms.length === 0) {
          return <p>Vocabulary is empty. Please add new terms.</p>;
        } else {
          const vocab = value.state.terms.map((term) => {
            return (
              <SingleTerm
                key={term._id}
                id={term._id}
                term={term.termName}
                description={term.termDescription}
                deleteTerm={value.handleDeleteTerm}
              />
            );
          });

          return <div className="card-columns mt-5">{vocab}</div>;
        }
      }}
    </Consumer>
  );
};

export default Terms;
