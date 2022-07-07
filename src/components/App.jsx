import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import { getImages } from 'services/imageSearchApi';

export class App extends Component {
  state = {
    images: [],
    largeImageUrl: '',
    isLoading: false,
  };

  // async componentDidMount() {
  //   const data = await getImages();
  // }

  render() {
    return <Searchbar />;
  }
}
