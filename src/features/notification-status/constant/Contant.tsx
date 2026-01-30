import { Notification } from '../types'

const sampleMessages = [
  'Hey! Is this item still available?',
  'Can you do $80 for this?',
  "What's the condition like?",
  'Shuffle the tiles, not the chores! 😪 Book our Home Services to lighten your load and stand a chance to win a limited edition Mahjong set!',
  "I'm interested in buying this. Can we meet tomorrow?",
  'Could you send more photos please?',
  'Is the price negotiable?',
  "Hi! I saw your listing and I'm very interested.",
  'Does it come with the original box?',
  'Can you deliver to the east side?',
]

const sampleUsernames = [
  'Monir1995',
  'abraham534',
  'JohnDoe123',
  'SarahLee',
  'MikeWilson',
  'EmmaStone',
  'DavidChen',
  'LisaWang',
  'TomHarris',
  'AnnaSmith',
]

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const generateNotification = (
  start: number,
  count: number,
): Notification[] => {
  return Array.from({ length: count }, (_, i) => {
    const id = start + i
    return {
      id,
      username: sampleUsernames[id % sampleUsernames.length],
      message: sampleMessages[id % sampleMessages.length],
      timestamp: months[Math.floor(Math.random() * 12)],
      isRead: Math.random() > 0.4,
      isSupport: Math.random() > 0.3,
      isSelected: false,
    }
  })
}
