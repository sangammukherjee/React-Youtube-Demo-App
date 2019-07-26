import React from 'react';
import '../Components/Videoitem.css';
const altTxt = 'images';
const Videolistitem =(props)=>{
    
    return(
        <div className='videoItem item' onClick = {()=>props.onvideoselect(props.videoitem)}>
        <img clasname = 'ui image'src = {props.videoitem.snippet.thumbnails.medium.url} alt={altTxt}/>
       
        <div className='content'><div className='header'>{props.videoitem.snippet.title}</div></div></div>
    )
}
export default Videolistitem;