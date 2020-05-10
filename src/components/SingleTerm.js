import React from 'react'


const SingleTerm = (props) => {


  return (
    
    <div className="card border-info">
      <div className="card-header">
      
        <h5 className="card-title">{props.term}</h5>
        </div>              
      <div className="card-body ">
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer text-right"><button type="button" className="btn btn-outline-danger btn-sm" onClick={() => props.deleteTerm(props.id, props.term, props.description)}>Delete</button></div>
    </div>
   
  )
}


export default SingleTerm
