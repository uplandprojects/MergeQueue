export type TravelProduct = {
  id: number
  name: string
  location: string
  category: 'Experience' | 'Stay' | 'Tour'
  price: number
  rating: number
  duration: string
  description: string
  highlight: string
}

export const products: TravelProduct[] = [
  {
    id: 1,
    name: 'Santorini Sunset Cruise',
    location: 'Santorini, Greece',
    category: 'Experience',
    price: 199,
    rating: 4.9,
    duration: '5 hours',
    description:
      'Sail across caldera waters with a local crew, volcanic hot springs, and a candlelit dinner on deck.',
    highlight: 'Dinner included',
  },
  {
    id: 2,
    name: 'Alpine Glass Lodge',
    location: 'Interlaken, Switzerland',
    category: 'Stay',
    price: 320,
    rating: 4.8,
    duration: '1 night',
    description:
      'Mountain-facing suite with panoramic windows, sunrise breakfast, and direct cable car transfers.',
    highlight: 'Mountain-view suite',
  },
  {
    id: 3,
    name: 'Tokyo Street Food Walk',
    location: 'Tokyo, Japan',
    category: 'Tour',
    price: 89,
    rating: 4.7,
    duration: '3 hours',
    description:
      'Taste your way through hidden alley izakayas and market stalls with a bilingual local guide.',
    highlight: '8 tasting stops',
  },
  {
    id: 4,
    name: 'Sahara Stargazer Camp',
    location: 'Merzouga, Morocco',
    category: 'Experience',
    price: 149,
    rating: 4.9,
    duration: 'Overnight',
    description:
      'Camel ride at dusk, luxury tent camp, and telescope-led constellations under desert skies.',
    highlight: 'Guided night sky session',
  },
  {
    id: 5,
    name: 'Amalfi Coast Road Escape',
    location: 'Amalfi, Italy',
    category: 'Tour',
    price: 175,
    rating: 4.6,
    duration: 'Full day',
    description:
      'A scenic coastal journey with cliffside viewpoints, lemon groves, and seaside village stops.',
    highlight: 'Private transfer option',
  },
]
