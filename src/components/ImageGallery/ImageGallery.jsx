import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          alt={tags}
          onImageClick={onImageClick}
        />
      ))}
    </ul>
  );
};
