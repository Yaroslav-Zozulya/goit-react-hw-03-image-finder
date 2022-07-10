import { Component } from 'react';
import { Container } from './Container/Container';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Laoder/Loader';
import { getImages } from 'services/imageSearchApi';

export class App extends Component {
  state = {
    images: [],
    originalImageUrl: '',
    ImageAlt: '',
    isLoading: false,
    query: '',
    page: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    const stateChange = prevState.query !== query || prevState.page !== page;

    if (stateChange) {
      try {
        this.setState({ isLoading: true });
        const response = await getImages(query, page);
        const data = await response.hits;
        if (data.length === 0) {
          alert(`We can't find any images`);
        }
        const totalPages = Math.ceil(response.total / 12);

        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          totalPages,
        }));
        this.setState({ isLoading: false });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleSubmitForm = value => {
    if (this.state.query === value) {
      alert('You are entered same query');
      return;
    }

    if (this.state.images.length > 0) {
      this.setState({ images: [] });
    }
    this.setState({ query: value, page: 1 });
  };

  handleBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = e => {
    this.setState({
      originalImageUrl: e.currentTarget.dataset.originalImg,
      ImageAlt: e.currentTarget.dataset.alt,
    });
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.key === 'Escape') {
      this.setState({ originalImageUrl: '' });
    }
  };

  render() {
    const { images, page, totalPages, originalImageUrl, ImageAlt, isLoading } =
      this.state;

    const canLoadMore = images.length > 0 && page !== totalPages;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {canLoadMore && <Button loadMode={this.handleBtnClick} />}
        {originalImageUrl && (
          <Modal
            url={originalImageUrl}
            alt={ImageAlt}
            closeModal={this.closeModal}
          />
        )}
      </Container>
    );
  }
}
