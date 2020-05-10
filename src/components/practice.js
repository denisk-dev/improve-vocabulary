import React from 'react'
import { Consumer } from '../context/VocabContext'
// import _ from 'lodash'
import PracticeQuiz from './PracticeQuiz'

const Practice = () => {

  


  return(
    <div className="container">
      <Consumer>
        {value => {
          const terms = [...value.state.terms];
          
          //randomizing
          terms.sort(() => Math.random() - 0.5);

          //console.log(terms)

          const allTerms = terms.map(term =>{
            return {
              term: term.termName,
              color : "lightcoral"
            };
          })

          console.log(allTerms)

          const questionsForQuiz = terms.map(question => {
            let uniqueAllTerms = allTerms.filter(termObj =>{
              if(termObj.term !== question.termName)
                return true
              else
                return false
            })
            question.otherTerms = uniqueAllTerms.sort(() => Math.random() - 0.5).slice(0, 3);
            question.otherTerms.push({term: question.termName, color: 'lightgreen'});
            question.otherTerms.sort(() => Math.random() - 0.5);
            return question;
          })

          

          
          
          return <PracticeQuiz questions={questionsForQuiz} lengthOfQuiz={questionsForQuiz.length}/>
        }}
      </Consumer>
    </div>
  )
      
}


export default Practice