import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

interface Props extends LazyLoadImageProps{
    src: string;
    alt: string
}

const LazyImage = ({ src, alt, ...props }: Props) => (
  <LazyLoadImage
    alt={alt}
    effect="blur"
    style={{ objectFit: 'cover', zIndex: -10 }}
    src={src}
    placeholderSrc='/cover.png'
    
    {...props}
    />
    
);

export { LazyImage }