import React from 'react';
import Videoitem from './Videoitem';
const Videolist =(props)=>{
    const renderedList = props.videos.map((videoitem)=>{
       return (
           <div className='ui relaxed divided list'>
               <Videoitem videoitem = {videoitem} onvideoselect = {props.onSelectvideo} /></div>
       )
    })
    return(
        <div>{renderedList}</div>
    )
}
export default Videolist;