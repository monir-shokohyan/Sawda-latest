import { useState } from 'react'
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component'

interface Props extends LazyLoadImageProps {
  src: string
  alt: string
  fallbackSrc?: string
}

const LazyImage = ({
  src,
  alt,
  fallbackSrc = '/logo.png',
  ...props
}: Props) => {
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <LazyLoadImage
        key={imgSrc}
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
  )
}

export { LazyImage }
