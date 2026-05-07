import { CategoryType, Product } from '../types'

export const categories: CategoryType[] = [
  { id: 1, name: 'Auto', image: '/category/car.png' },
  { id: 2, name: 'Real estate', image: '/category/home.png' },
  { id: 3, name: 'Job', image: '/category/bag.png' },
  {
    id: 4,
    name: 'Clothing, footwear, accessories',
    image: '/category/tshirt.png',
  },
  { id: 5, name: 'Hobbies & recreation', image: '/category/shoes.png' },
  { id: 6, name: 'Animals', image: '/category/animal.png' },
  { id: 7, name: 'Business - equipment', image: '/category/printer.png' },
  { id: 8, name: 'Services', image: '/category/roller.png' },
  { id: 9, name: 'Electronics', image: '/category/phone.png' },
  { id: 10, name: 'For home & garden', image: '/category/sofa.png' },
  {
    id: 11,
    name: 'Spare parts',
    image: '/category/tyre.png',
  },
  { id: 12, name: 'Products for children', image: '/category/kidscart.png' },
  {
    id: 13,
    name: 'Accommodation for travel',
    image: '/category/travelbag.png',
  },
  { id: 14, name: 'Beauty & health', image: '/category/lipstick.png' },
]
const generateProducts = (start: number, count: number): Product[] => {
  const cacheBuster = Math.ceil(Math.random() * 400)
  return Array.from({ length: count }, (_, i) => ({
    id: start + i,
    username: 'abraham534',
    timestamp: '3 days ago',
    title:
      'Wooden Sofa Set with Green Floral Cushions, RRP$3998, 6 months old ...',
    price: 'S$99',
    originalPrice: 'S$442',
    status: 'Likely new',
    liked: false,
    imageSrc: `https://picsum.photos/1200/800?random=${cacheBuster}`,
  }))
}
export { generateProducts }