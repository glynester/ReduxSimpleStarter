import React from 'react';

// {video, onVideoSelect} - destructured from props
const VideoListItem=({video, onVideoSelect})=>{
  const imgUrl=video.snippet.thumbnails.default.url;
  const alt=video.snippet.description;
  return (
  <li onClick={()=>onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imgUrl} alt={alt} />
      </div>
      <div className="media-body">
        <div className="media-heading">
         {video.snippet.title}
        </div>
      </div>
    </div>
  </li>)
}

export default VideoListItem;