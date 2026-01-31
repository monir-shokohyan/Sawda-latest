import { Following } from '../types'

const sampleFollowActivities = [
  'started following you',
  'followed you back',
  'is now following you',
  'just followed you',
  'started following your listings',
  'followed you after liking your post',
  'new follower from Kampala',
  'someone new is following you',
  'followed you from your iPhone 13 listing',
  'new follower – say hi!',
  'is following you now',
  'just joined and followed you',
  'followed you after you sold the Gaming Chair',
  'new follower +1',
  'started following your profile',
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

export const generateFollowing = (
  start: number,
  count: number,
): Following[] => {
  return Array.from({ length: count }, (_, i) => {
    const id = start + i
    return {
      id,
      username: sampleUsernames[id % sampleUsernames.length],
      message: sampleFollowActivities[id % sampleFollowActivities.length],
      timestamp: months[Math.floor(Math.random() * months.length)],
      isFollowing: Math.random() > 0.8,
    }
  })
}
