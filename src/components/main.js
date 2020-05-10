import React from 'react'
import Newterm from './newterm.js'
import Terms from './terms'


const Main = () => {

  return(
    <div className="container">
   
    <Newterm />
    <Terms />
   
    </div>
  )
}


// //Step 1: Creating context
// const myContext = React.createContext();

// //Step 2: Create a Provider component
// class MyProvider extends Component{

//   state = {
//     name: 'Denis',
//     age: 100, 
//     cool: true
//   }

  

//   render(){
//     let {age} = this.state;
//     return(
//       <myContext.Provider value={{
//         state: this.state,
//         growOlder: () => this.setState({age:age+1})
//       }
//         }>
//         {this.props.children}
//       </myContext.Provider>
//     )
//   }
// }

// class Animal extends Component{
//   render(){
//     return(
//     <div className="animal">
//       <myContext.Consumer>
//       {(context) =>(
//         <React.Fragment>
//           <p>This is the {context.state.age} inside Animal</p>
//           <p>This is the {context.state.name} inside Animal</p>
//           <button className="btn btn-success" onClick={context.growOlder}>Grow Older</button>
//         </React.Fragment>
        
//       )}
//       </myContext.Consumer>
      
//     </div>)
//   }
// }


// class Person extends Component{
//   render(){
//     return(
//     <div className="person">
//       <myContext.Consumer>
//       {(context) =>(
//         <React.Fragment>
//           <p>This is the {context.state.age}</p>
//           <p>This is the {context.state.name}</p>
//         </React.Fragment>
        
//       )}
//       </myContext.Consumer>
      
//     </div>)
//   }
// }

// const Family = (props) =>{
//   return(
//     <div>
//       <Person />
//     </div>
//   )
// }


// class Main extends Component{
  

//   render(){
//     return(
//       <MyProvider>
//       <div>
//         <p>Something here</p>
//         <Family />
//       </div>
//       <Animal />
//       </MyProvider>
//     )
//   }



// }

export default Main