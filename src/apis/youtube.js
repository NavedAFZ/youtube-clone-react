import axios from 'axios'
const KEY='AIzaSyAA_pDaTy59TuGaLWEtNJt7zXJlkudGlek'
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:5,
        key:KEY
    }
})