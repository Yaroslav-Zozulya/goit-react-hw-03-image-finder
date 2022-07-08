import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (query, page = 1, parPage = 12) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=26638339-3b1376c53457034de3b242118&image_type=photo&orientation=horizontal&per_page=${parPage}`
  );
  return response.data;
};
