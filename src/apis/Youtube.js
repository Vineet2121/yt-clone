import axios from 'axios';

const KEY = 'AIzaSyBkOWH1JDvHur4kP34DRXlRrDrSRLt1tAM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
