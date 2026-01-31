import { FaClock } from 'react-icons/fa'
import { TbClockOff } from 'react-icons/tb'

const NewestToOldestObj = [
  {
    label: 'Newest',
    icon: FaClock,
    value: 'newest',
  },
  {
    label: 'Oldest',
    icon: TbClockOff,
    value: 'oldest',
  },
]

const ProfileConstant = {
  username: 'monir_codes',
  email: 'monir@example.com',
  timestamp: '14:22',
  message: 'Hey, just saw your last component – looks clean 🔥',
  isRead: false,
  isFollowing: true,

  bio: "Frontend developer • TypeScript • React • Mantine • Building things that hopefully don't break in production",
  location: 'Kampala, Uganda',
  company: 'Lotus Technologies co',
  website: 'https://github.com/monir-codes',
  joinedDate: 'February 2023',

  posts: 342,
  followers: 1280,
  following: 367,

  avatarUrl: '/avatars/monir-128.png',
  fullName: 'M Monir',
}

export { NewestToOldestObj, ProfileConstant }
