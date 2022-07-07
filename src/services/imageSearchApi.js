import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async () => {
  const response = await axios.get(
    '/?q=cat&page=1&key=26638339-3b1376c53457034de3b242118&image_type=photo&orientation=horizontal&per_page=12'
  );
  return response.data.hits;
};
