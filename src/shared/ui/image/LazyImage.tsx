import { useState } from 'react';
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component';

interface Props extends LazyLoadImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const LazyImage = ({
  src,
  alt,
  fallbackSrc = '/cover.png',
  ...props
}: Props) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
        <LazyLoadImage
          alt={alt}
          effect="blur"
          src={imgSrc}
          placeholderSrc={fallbackSrc}
          onError={handleError}
          style={{
            objectFit: 'cover',
          }}
          wrapperProps={{
            style: {
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderRadius: 'inherit',
              transitionDelay: '1s',
            },
          }}
          {...props}
        />
    </div>
  );
};

export { LazyImage };