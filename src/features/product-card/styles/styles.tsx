import styled, { css, keyframes } from 'styled-components'

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 13rem;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 800px) {
    height: 9rem;
  }
`

export const heartBeat = keyframes`
  0% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.3);
  }
  30% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.15);
  }
  60% {
    transform: scale(1);
  }
`

export const heartPop = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const overlayFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const overlayHeartAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  15% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 1;
  }
  30% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 1;
  }
  45% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
  60% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  80% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
`

export const particleAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(0);
    opacity: 0;
  }
`

export const ActionIconWrapper = styled.div<{
  $isAnimating: boolean
  $liked?: boolean
}>`
  transition: transform 0.2s ease;
  display: inline-flex;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $isAnimating, $liked }) =>
    $isAnimating && $liked
      ? css`
          animation: ${heartBeat} 0.6s ease-in-out;
        `
      : ''}

  svg {
    ${({ $isAnimating, $liked }) =>
      $isAnimating && $liked
        ? css`
            animation: ${heartPop} 0.3s ease-out;
          `
        : ''}
  }
`

export const LikeOverlay = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 107, 107, 0.3) 0%,
    rgba(255, 107, 107, 0) 70%
  );
  pointer-events: none;
  z-index: 10;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $show }) =>
    $show
      ? css`
          animation: ${overlayFadeIn} 0.8s ease-out;
        `
      : ''}
`

export const OverlayHeart = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff6b6b;
  font-size: 5rem;
  filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.8));

  ${({ $show }) =>
    $show
      ? css`
          animation: ${overlayHeartAnimation} 0.8s ease-out;
        `
      : ''}

  @media (max-width: 800px) {
    font-size: 3rem;
  }
`

export const Particle = styled.div<{ $delay: number; $angle: number }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ff6b6b;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  --tx: ${({ $angle }) => Math.cos($angle) * 100}px;
  --ty: ${({ $angle }) => Math.sin($angle) * 100}px;
  ${css`
    animation: ${particleAnimation} 0.8s ease-out forwards;
  `}
  animation-delay: ${({ $delay }) => $delay}s;

  @media (max-width: 800px) {
    width: 6px;
    height: 6px;
    --tx: ${({ $angle }) => Math.cos($angle) * 60}px;
    --ty: ${({ $angle }) => Math.sin($angle) * 60}px;
  }
`

export const CardWrapper = styled.div`
  position: relative;
  height: 100%;
  cursor: pointer;
`
