import axios from 'axios';


const KEY = 'AIzaSyApX_Ug1NI714qFYx4CMFatV4cQUV3j9lk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});