import React from 'react'
import {Consumer} from '../context/VocabContext'
import Spinner from '../Spinner/Spinner'
import SingleTerm from './SingleTerm'

const Terms = () =>{

  return(
//     <React.Fragment>
//     <div className="card" style={{width: "18rem"}}>
//   <div className="card-body">
//   <p className="card-text">TERM</p>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
 
// </React.Fragment>

<Consumer>
  {value => {
    if(value.state.terms.length === 0){
      return <Spinner />
    }else{
      const vocab = value.state.terms.map(term => {
      return <SingleTerm key={term._id} id={term._id} term={term.termName} description={term.termDescription} deleteTerm={value.handleDeleteTerm}/>
      })

    return <div className="card-columns mt-5">{vocab}</div>;
    }
  }}
</Consumer>

  )

}

export default Terms