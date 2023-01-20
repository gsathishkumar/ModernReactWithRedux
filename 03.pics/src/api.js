import axios from 'axios';

const searchImages = async searchTerm => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID IPjGbzwJjA26VREa8b0HQOibjrFbcf-DJURwzjGVem8',
    },
    params: { query: searchTerm },
  });
  return response.data.results;
};

export default searchImages;
