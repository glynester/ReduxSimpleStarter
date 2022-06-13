import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import REACT_APP_YT_API_KEY from '../.env';  // Fudged because I can't get process.env.REACT_APP_YT_API_KEY to read the key.

// const YT_API_KEY=process.env.REACT_APP_YT_API_KEY;
const YT_API_KEY=REACT_APP_YT_API_KEY;
// console.log("API_KEY=>",YT_API_KEY,REACT_APP_YT_API_KEY); // Don't enable!

// Data flow downstream flow means that only the most parent component in the application should be responsible for fetching data, e.g. from an API
// refactor app component to a class based component so it can keep track of the list of videos on its state.
class App extends Component {
  constructor(props){
    super(props);

    this.state={ videos:[] };

    YTSearch( {key: REACT_APP_YT_API_KEY, term: 'monkeys'}, videos=>{
      console.log(videos);
      // this.setState({ videos: videos});
      this.setState({ videos});
      console.log('this.state',this.state);
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        {/* passing prop videos to video list */}
        <VideoList videos={ this.state.videos } />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));




