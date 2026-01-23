import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props extends LazyLoadImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const LazyImage = ({ src, alt, className = '', style, ...props }: Props) => {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'inherit',
        width: '100%',
        height: '100%',
        ...style,
      }}
      className={className}
    >
      <LazyLoadImage
        alt={alt}
        effect="blur"
        src={src}
        placeholderSrc="/cover.png"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          display: 'block',
        }}
        wrapperProps={{
          style: { width: '100%', height: '100%' },
        }}
        {...props}
      />
    </div>
  );
};

export { LazyImage };