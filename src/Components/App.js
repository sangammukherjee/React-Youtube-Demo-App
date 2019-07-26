import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import Videolist from './Videolist';
import Videodetail from './Videodetail';
const KEY = 'AIzaSyAlHBRc4dwEMuMaEcPvA3gooQ1WZ4-S5bE';

class App extends React.Component{
    state = {
        videos : [],
        onSelectvideo : null
    }
    componentDidMount(){
        this.onTermSubmitted('Nature');
    }
    onTermSubmitted = (term)=>{
       axios.get('https://www.googleapis.com/youtube/v3/search',{
           params : {
               q: term,
               part : 'snippet',
               maxResults: 50,
               key: KEY
           },

       }
       ).then((response)=>{
          this.setState({
              videos : response.data.items,
              onSelectvideo: response.data.items[0]
          })
       });
    
    };
    onSelectvideo = (selectedvideo)=>{
            this.setState({
                onSelectvideo : selectedvideo
            })
    }
    render(){
        return(
            <div className='ui container'>
            <SearchBar onTermSubmitted = {this.onTermSubmitted}/>
            <div className="ui grid">

                <div className='ui row'>
                    <div className='eleven wide column'>
                    <Videodetail video = {this.state.onSelectvideo}/>
                    </div>
                    <div className='five wide column'>
                    <Videolist videos = {this.state.videos} onSelectvideo = {this.onSelectvideo}/>
                    </div>
                </div>
            </div>
            
           
        </div>
        )
    }
    
    
}
export default App;