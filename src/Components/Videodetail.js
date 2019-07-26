import React from 'react';
const Videodetail = (props)=>{
    if(!props.video){
        return (
            <div>Loading</div>
        )
    }
    const VideoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe src ={VideoSrc} title='video player'></iframe>
                </div>
            
        <div className='ui segment'>
            <h3 className='ui header'>{props.video.snippet.title}</h3>
            <p>{props.video.snippet.description}}</p>
        </div>
        </div>
    )
}
export default Videodetail;