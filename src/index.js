import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component. This component should produce some html.

const App=()=>{
  return <div>Hi!</div>
}

// Take this component's generated html and put in on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));




