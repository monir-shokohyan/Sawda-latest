import { Responsive } from '@shared/hooks/responsive'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseModalProps } from '../types'
import { Paths } from '@shared/api/paths/paths'

const useModals = ({ profile, handleToggleLike }: UseModalProps) => {
  const { isMobile } = Responsive()
  const navigate = useNavigate()
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [showOverlay, setShowOverlay] = useState<boolean>(false)
  let clickTimeout: NodeJS.Timeout | null = null

  const handleClick = (): void => {
    if (clickTimeout) {
      clearTimeout(clickTimeout)
      clickTimeout = null
      return
    }
    clickTimeout = setTimeout(() => {
      navigate({
        pathname: `${Paths.ProductDetails}${profile?.id}`,
        search: new URLSearchParams({
          name: `${profile?.title?.slice(0, 20)}...`,
        }).toString(),
      })
      clickTimeout = null
    }, 300)
  }

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()

    if (!profile?.liked) {
      setShowOverlay(true)
      setTimeout(() => setShowOverlay(false), 800)
    }

    setIsAnimating(true)
    handleToggleLike(profile?.id as number)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()

    if (!profile?.liked) {
      setShowOverlay(true)
      setTimeout(() => setShowOverlay(false), 800)
    }

    setIsAnimating(true)
    handleToggleLike(profile?.id as number)
    setTimeout(() => setIsAnimating(false), 600)
  }

  useEffect(() => {
    return () => {
      if (clickTimeout) clearTimeout(clickTimeout)
    }
  }, [])

  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (Math.PI * 2 * i) / 12,
    delay: i * 0.03,
  }))

  return {
    handleClick,
    handleDoubleClick,
    isMobile,
    isAnimating,
    setIsAnimating,
    showOverlay,
    setShowOverlay,
    handleLikeClick,
    particles,
  }
}

export { useModals }
