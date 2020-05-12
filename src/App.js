// import React, { Component } from 'react'; 

// export default class App extends Component { 
//   state = {count: 0}; 
//     render() { 
//       return ( 
//         <section> 
//         <h1>{this.state.count}</h1> 
//         <button onClick={() => this.setState((prevState)=> 
//         {
//           return { 
//             count: prevState.count + 1 
//           }
//         }
//       )}> 
//         Add 
//         </button> 
//         </section>); 
//     } 
// }


//USING useState
// import React, { useState } from 'react'; 

// export default function App() { 
//   const[count, setCount] = useState(0); 
//       return ( 
//         <section> 
//           <h1>{count}</h1> 
//           <button onClick={() => setCount(count+1)}> 
//           Add 
//           </button> 
//         </section>); 

// }



// import React from 'react'; 

// export default class App extends React.Component { 
// constructor(props) { 
// super(props); 
// this.state = { 
// count: 0 
// }; 
// } 

// componentDidMount() { console.log("You clicked "+this.state.count+" times") } 
// componentDidUpdate() { console.log("You clicked "+this.state.count+" times") } 

// render() { 
// return ( 
// <div> 
// <p>You clicked {this.state.count} times</p> 
// <button onClick={() => this.setState({ count: this.state.count + 1 })}> 
// Click me 
// </button> 
// </div> 
// ); 
// } 
// }


// USING useState & useEffect
import React, {useState, useEffect} from 'react'; 

export default function App() { 
    const[count, setCount] = useState(0); 

    useEffect(() => {
        console.log("Amount of times clicked: " + count)
    })
        return ( 
          <section> 
            <h1>{count}</h1> 
            <button onClick={() => setCount(count+1)}> 
            Add 
            </button> 
          </section>
        ); 
  }
