import { Message, ChatMessage } from '../types'

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

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export const generateMessages = (start: number, count: number): Message[] => {
  return Array.from({ length: count }, (_, i) => {
    const id = start + i;
    return {
      id,
      username: sampleUsernames[id % sampleUsernames.length],
      message: sampleMessages[id % sampleMessages.length],
      timestamp: months[Math.floor(Math.random() * 12)],
      isRead: Math.random() > 0.4,
      isSelected: false,
    };
  });
};

export const generateChatHistory = (username: string): ChatMessage[] => {
  const messageCount = Math.floor(Math.random() * 15) + 5
  const messages: ChatMessage[] = []

  const chatMessages = [
    'Hi there! Is this item still available?',
    "Yes, it's available!",
    "Great! What's the condition like?",
    "It's in excellent condition, barely used.",
    'Can I see more photos?',
    'Sure, I can send them now.',
    'Thanks! Looks good.',
    'Would you consider $80?',
    "I can do $85, that's my lowest.",
    'Deal! When can we meet?',
    'How about tomorrow at 3pm?',
    'Perfect! See you then.',
    "Great, I'll send you the address.",
    'Sounds good!',
    'See you tomorrow!',
  ]

  for (let i = 0; i < messageCount; i++) {
    const isOwn = i % 2 === 1
    const hoursAgo = messageCount - i

    messages.push({
      id: i + 1,
      content: chatMessages[i % chatMessages.length],
      timestamp: `${hoursAgo} hours ago`,
      senderId: isOwn ? 'me' : username,
      isOwn,
    })
  }

  return messages
}
