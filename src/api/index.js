import axios from 'axios';

const KEY = 'AIzaSyDcRQwIVCImlWsShknwbXUDAUGKXmkNDqI';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

console.log(KEY);

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      part: 'snippet',
      maxResults: 40,
      key: KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular',
    },
  });
};
