import React, { Component } from 'react';  // Needed for React.createElement - when html is created.

//  a class component is used whenever you want a component to have some type of internal record keeping, some ability for it to be aware of itself and what's happened to it since it's been rendered.
//  We're going to enhance this thing's behavior by extending it with react based component class. Define a new class called search bar and give it access to all of the functionality that react.component has.
// class SearchBar extends React.component{
class SearchBar extends Component{
  // This is how we define state or we initialize state in a class based component. Functional components do not have state; only class basic components do.
  // The constructor function is the first and only function called automatically whenever a new instance of the class is created.
  constructor(props){
    super(props);
    this.state={ term: '' }; // The only time that we ever manually change state liek this is inside of the constructor.
  }
  render(){
    // return <input onChange={this.onInputChange} />;
    // return <input onChange={event=>console.log(event.target.value)} />;
    // We always manipulate our state with this.setState - we use this method to inform react that the state is changing
    return (
    <div className="search-bar">
      <input 
        value = {this.state.term} // Become a "Controlled" field - because field value comes from state
        onChange={event=>this.onInputChange(event.target.value)} />
      {/* Value of the input: {this.state.term} */}
    </div>
    );
  }

  onInputChange(term){
    // console.log(event,event.target.value)
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
// const SearchBar=()=>{
//   return <input/>   // React.createElement
// };

export default SearchBar;

