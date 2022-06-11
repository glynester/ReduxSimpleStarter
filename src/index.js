import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// require('dotenv').config();   // Required because I didn't use create-react-app to build this app. https://stackoverflow.com/questions/49579028/adding-an-env-file-to-react-project

const YT_API_KEY=process.env.REACT_APP_YT_API_KEY;
console.log("API_KEY=>",YT_API_KEY,process.env.REACT_APP_YT_API_KEY); // Don't enable!
// Create a new component. This component should produce some html.

const App=()=>{
  return (
  <div>
    <SearchBar />
  </div>
  )
  
}

// Take this component's generated html and put in on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));




