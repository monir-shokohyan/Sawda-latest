import {
  AudioBubble,
  AudioContent,
  PlayButton,
  ProgressBar,
  ProgressBarContainer,
  TimeDisplay,
} from '@shared/styles'
import { AudioPlayerComponentProps } from '@shared/types/players'
import React, { useEffect, useRef, useState } from 'react'
import { MdPause, MdPlayArrow } from 'react-icons/md'

const AudioPlayerComponent = ({
  audioUrl,
  isOwn,
}: AudioPlayerComponentProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

useEffect(() => {
  const audio = audioRef.current
  if (!audio) return

  // ────────────────────────────────────────
  // Add this block
  const tryLoadMetadata = async () => {
    try {
      audio.load()           // sometimes helps
      await audio.play()     // mobile browsers usually only load metadata after play starts
      audio.pause()          // immediately stop (user doesn't hear anything)
      audio.currentTime = 0  // reset position
    } catch (err) {
      // Most common error: "play() failed because the user didn't interact..."
      // → that's fine, we just wanted to trigger metadata
      console.log("Auto-play prevention – expected on mobile", err)
    }
  }

  // Try once on mount
  tryLoadMetadata()

  // ────────────────────────────────────────

  const updateTime     = () => setCurrentTime(audio.currentTime)
  const updateDuration = () => setDuration(audio.duration)
  const handleEnded    = () => setIsPlaying(false)

  audio.addEventListener('timeupdate', updateTime)
  audio.addEventListener('loadedmetadata', updateDuration)
  audio.addEventListener('ended', handleEnded)

  // Also listen to 'canplay' — sometimes duration arrives here instead
  audio.addEventListener('canplay', updateDuration)

  return () => {
    audio.removeEventListener('timeupdate', updateTime)
    audio.removeEventListener('loadedmetadata', updateDuration)
    audio.removeEventListener('canplay', updateDuration)
    audio.removeEventListener('ended', handleEnded)
  }
}, [])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const bounds = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - bounds.left
    const percentage = x / bounds.width
    audio.currentTime = percentage * audio.duration
  }

const formatTime = (time: number) => {
  if (isNaN(time) || time === Infinity) return '--:--'
  if (time === 0) return '0:00'
  
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <AudioBubble $isOwn={isOwn}>
      <PlayButton
        $isOwn={isOwn}
        onClick={togglePlayPause}
      >
        {isPlaying ? <MdPause size={20} /> : <MdPlayArrow size={20} />}
      </PlayButton>

      <AudioContent>
        <ProgressBarContainer
          $isOwn={isOwn}
          onClick={handleProgressClick}
        >
          <ProgressBar
            $isOwn={isOwn}
            style={{ width: `${progress}%` }}
          />
        </ProgressBarContainer>

        <TimeDisplay $isOwn={isOwn}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </TimeDisplay>
      </AudioContent>

      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
      />
    </AudioBubble>
  )
}

export { AudioPlayerComponent }
