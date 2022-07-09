import { ThreeCircles } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        color="blue"
        height={110}
        width={110}
        ariaLabel="three-circles-rotating"
      />
    </LoaderWrapper>
  );
};
