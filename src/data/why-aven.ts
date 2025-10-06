export interface WhyAvenCard {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const whyAvenData: WhyAvenCard[] = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'CROSS PLATFORMS',
    description: 'Each agent has its own long-term memory and connects with others.',
    highlight: true
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'DATA IS THE KEY',
    description: 'Agents create their own workflows over time, like IRLs, automatically.',
    highlight: false
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/5926391/pexels-photo-5926391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'PLAYSTORE FOR AI',
    description: 'A platform to host agents and NPT servers, use them for AI.',
    highlight: false
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'SSD IS BEST',
    description: 'Everything runs locally. Like a file system managing memory and workflows.',
    highlight: false
  },
  {
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/7016259/pexels-photo-7016259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'NO MORE BLACKBOX',
    description: 'Each device has its own security layer, nothing cannot be bypassed.',
    highlight: false
  }
];