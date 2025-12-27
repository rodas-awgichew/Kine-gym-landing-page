
import { ClassType, Amenity, Trainer } from './types';

export const CLASSES: ClassType[] = [
  {
    id: 'kinetic-sculpt',
    title: 'The Body Architect',
    description: 'Transform your silhouette. High-precision resistance training designed to lengthen, tone, and redefine every muscle fiber.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    videoUrl: ''
  },
  {
    id: 'flow-state',
    title: 'Neuro-Flow Yoga',
    description: 'Master your internal state. A high-performance hybrid of somatic movement and cognitive focus to achieve peak mental clarity.',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=800',
    videoUrl: ''
  },
  {
    id: 'raw-power',
    title: 'Peak Performance',
    description: 'Explosive functional strength. Utilize Olympic-grade equipment to build raw power and metabolic efficiency.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    videoUrl: ''
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'thermal',
    title: 'Cellular Recovery Lab',
    description: 'Reset your system with zero-degree cold plunges and high-intensity infrared therapy.',
    image: 'https://images.unsplash.com/photo-1554156637-23467614e365?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'juice',
    title: 'The Fuel Foundry',
    description: 'Bespoke nutrition and adaptogenic elixirs crafted for post-training neural recovery.',
    image: 'https://images.unsplash.com/photo-1570126688035-1e0adadb32d2?auto=format&fit=crop&q=80&w=1600'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Julian Vance',
    specialty: 'Elite Performance Coach',
    image: 'https://images.unsplash.com/photo-1584952811565-c4c4031805a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltJTIwdHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '2',
    name: 'Elena Thorne',
    specialty: 'Movement Biohacker',
    image: 'https://plus.unsplash.com/premium_photo-1661582240047-db822b1eed8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '3',
    name: 'Marcus Gray',
    specialty: 'Structural Specialist',
    image: 'https://images.unsplash.com/photo-1696563996353-214a3690bb11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwdHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D'
  }
];

export const MEMBERSHIP_PLANS = [
  {
    id: 'essential',
    name: 'Roster',
    price: '$100',
    features: ['Unlimited Lab Access', '4 Specialty Classes', 'The Recovery Suite', 'Biometric Onboarding']
  },
  {
    id: 'performance',
    name: 'Performance',
    price: '$180',
    features: ['Unlimited Classes', 'Weekly Body Composition', 'Private Locker & Concierge', 'Guest Pass Network']
  },
  {
    id: 'elite',
    name: 'Alpha',
    price: '$250',
    features: ['Dedicated Performance Coach', 'Daily Nutrition Plan', 'VIP Recovery Access', '24/7 Concierge Support']
  }
];

export const TESTIMONIALS = [
  {
    quote: "I’ve trained globally, but KINÉ is the first place that treats fitness like high-performance engineering.",
    author: "Jameson P., Private Equity",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The environment is just as powerful as the workout. It's impossible not to achieve results here.",
    author: "Lydia W., Fashion Executive",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];
