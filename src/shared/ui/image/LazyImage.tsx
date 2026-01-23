import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component'

interface Props extends LazyLoadImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

const LazyImage = ({ src, alt, className = '', style, ...props }: Props) => {
  return (
  
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
          overflow: 'hidden',
        }}
        wrapperProps={{
          style: { width: '100%', height: '100%', overflow: 'hidden' },
        }}
        {...props}
      />
  )
}

export { LazyImage }
