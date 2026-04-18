export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'John Lester Tan',
    rating: 5,
    text: 'Yay! We can trust the seller po rito promise, super bait at mabilis ang transaction.'
  },
  {
    id: '2',
    name: 'Vincent Parungao',
    rating: 5,
    text: 'Highly recommended po! Madali ang transaction at mura pa.'
  },
  {
    id: '3',
    name: 'Read More Reviews',
    rating: 5,
    text: 'CTA_FACEBOOK'
  }
];