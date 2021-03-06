import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import REACT_APP_YT_API_KEY from '../.env';  // Fudged because I can't get process.env.REACT_APP_YT_API_KEY to read the key.

// const YT_API_KEY=process.env.REACT_APP_YT_API_KEY;
const YT_API_KEY=REACT_APP_YT_API_KEY;
// console.log("API_KEY=>",YT_API_KEY,REACT_APP_YT_API_KEY); // Don't enable!

// Data flow downstream flow means that only the most parent component in the application should be responsible for fetching data, e.g. from an API
// refactor app component to a class based component so it can keep track of the list of videos on its state.
class App extends Component {
  constructor(props){
    super(props);
    // state in react it's very component level (localized).
    this.state={ videos:[], selectedVideo: null };

    this.videoSearch('cute');
  }

  videoSearch(term){
    YTSearch( {key: REACT_APP_YT_API_KEY, term: term}, videos=>{
      console.log(videos);
      this.setState({ videos: videos, selectedVideo: videos[0]});
      console.log('this.state',this.state);
    });
  }

  render(){
    // Debounced (throttled) version of videoSearch
    const videoSearch = _.debounce((term)=>{
      this.videoSearch(term)
    },300)

    return (
      <div>
        {/* <SearchBar onSearchTermChange={term=>this.videoSearch(term)} /> */}
        <SearchBar onSearchTermChange={videoSearch} />
        {/* <VideoDetail video={this.state.videos[0]}/> */}
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList 
          onVideoSelect={selectedVideo=>this.setState({ selectedVideo })}
          videos={ this.state.videos } 
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));




