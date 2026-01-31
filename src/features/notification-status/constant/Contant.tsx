import { Notification } from '../types'

const sampleNotifications = [
  'SarahLee sent an offer: $75',
  'New message on your iPhone 13 listing',
  'Your $220 offer was accepted! 🎉',
  'Someone favorited your Gaming Chair',
  'Offer of $90 expires in 2 hours',
  'Monir1995 asked: Is it still available?',
  'Your listing was viewed 47 times today',
  '🚚 Delivery option added to your item',
  'Item sold! $185 transferred',
  'New review received ★★★★☆',
  'Only 15 min left to accept offer',
  'Your promotion ends tomorrow – renew?',
  'Item reserved for you (15 min)',
  'Last person viewing – reply now!',
  'Counter-offer received: $65',
  'Similar sneakers are trending nearby 👟',
  'Your post is getting attention – boost it?',
  'Buyer nearby is searching for this exact item',
  '0% selling fee this weekend only!',
  '🧹 Book home cleaning & win mahjong set!',
  'One step left to verify your account',
  'Suspicious activity detected – confirm now',
  'New review policy – takes 30 seconds to read',
  'Verify ID to keep selling',
  'Payout of $142 is on its way',
  'AnnaSmith started following you',
  'Your comment received 12 likes',
  'New reply in your thread',
  'Profile tip: add 5+ photos → 3× faster sales',
  'Add delivery → +40% more views',
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
      message: sampleNotifications[id % sampleNotifications.length],
      timestamp: months[Math.floor(Math.random() * months.length)],
      isRead: Math.random() > 0.4,
      isSupport: Math.random() > 0.3,
      isSelected: false,
    }
  })
}
