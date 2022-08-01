import React from 'react';
import './App.css';
import logo from './logo.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        <img src={logo} alt="sblogo" />

        </h1>

      </header>
       <span className="Buttons">
        <button className='btn' onClick={callArray1}>Split Array Display</button>

        <button className='btn' onClick={callArray2}>Find Missing Element</button>
     
        <button className='btn' onClick={callArray3}>Sorting Objects</button>
      </span>
      </div>
  );


function callArray1 () { 
  fetch('/api', { method: 'GET' })
    .then(data => data.json()) 
    .then(json => alert(JSON.stringify(json))) 
}

function callArray2() {
  fetch('/api2', { method: 'GET' })
    .then(data => data.json()) 
    .then(json => alert(JSON.stringify(json))) 
}
function callArray3() {
  fetch('/api3', { method: 'GET' })
    .then(data => data.json())
    .then(json => alert(JSON.stringify(json)))
}
}


export default App

// class LoggingButton extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   handleClick = () => {
//     console.log('this is:', this);
//   };
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }









// import React, { useEffect, useState} from 'react'

// function App() {
 
//   const [backendData, setBackendData] = useState ([{}])
  
//   useEffect(() => { 
//     fetch("/api").then( 
//          res => res.json()
//       ).then(
//         data => {
//           setBackendData(data)
//         }
//       )
//     }, []) //empty array so this runss on firs render of commponent

//     return (

//       //display res : if =>

//     <div>
//       {/* <button onClick={this.handleClick}>ArraySplit</button>
//       <button onClick={this.handleClick}>FindMissingElement</button>
//       <button onClick={this.handleClick}>SortingObjects</button> */}
//            {(typeof backendData.arraySplit === "undefined") ? (
//             <p> Loading... </p>
//            ) : (
//             backendData.arraySplit.map((arraySplit, i) => (
//             <p key={i}> {arraySplit} </p>
//            ))
//            )}
//     </div>
//   )


// }

// export default App