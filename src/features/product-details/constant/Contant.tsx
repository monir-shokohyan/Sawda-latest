const DetailsObject = [
  { id: 'city', title: 'address.city', description: 'kabul' },
  { id: 'model', title: 'common.model', description: 'anything' },
  { id: 'quantity', title: 'product.quantity', description: '12' },
  { id: 'condition', title: 'product.condition', description: 'new' },
  { id: 'discount', title: 'product.discount', description: '30' },
  {
    id: 'color',
    title: 'product.color',
    description: ['red', 'blue', 'black'],
  },
]
const DetailsList = [
  {
    title:
      'True wireless freedom with premium sound. Deep bass, crystal-clear highs, and active noise cancellation.',
  },
  {
    title:
      'True wireless freedom with premium sound. Deep bass, crystal-clear highs, and active noise cancellation.',
  },
  {
    title:
      'True wireless freedom with premium sound. Deep bass, crystal-clear highs, and active noise cancellation.',
  },
  {
    title:
      'True wireless freedom with premium sound. Deep bass, crystal-clear highs, and active noise cancellation.',
  },
]
const ProductsMaps = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  username: 'abraham534',
  timestamp: '3 days ago',
  title:
    'Wooden Sofa Set with Green Floral Cushions, RRP$3998, 6 months old ...',
  price: 'S$99',
  originalPrice: 'S$442',
  status: 'Likely new',
  liked: false,
}))

export { DetailsObject, DetailsList, ProductsMaps }
