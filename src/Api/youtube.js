import axios from 'axios';

const KEY = 'AIzaSyAlHBRc4dwEMuMaEcPvA3gooQ1WZ4-S5bE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults: 5,
        key: KEY
    }
})