export interface Product {
  id: string;
  name: string;
  category: 'Editing' | 'AI Tools' | 'Education' | 'Video Streaming';
  details: string[];
}

export const products: Product[] = [
{
  id: 'capcut',
  name: 'CAPCUT',
  category: 'Editing',
  details: [
    '1 device (Phone / Tablet / iPad) - 1 week ₱29',
    '1 device (Phone / Tablet / iPad) - 1 month ₱50',
    '2-3 devices (Laptop / PC / Desktop) - 1 week ₱45',
    '2-3 devices (Laptop / PC / Desktop) - 1 month ₱89'
  ]
},
  {
    id: 'canva',
    name: 'CANVA',
    category: 'Editing',
    details: ['1 month ₱25', '6 months ₱50', '12 months ₱99']
  },
  {
    id: 'picsart',
    name: 'PICSART',
    category: 'Editing',
    details: ['1 month ₱25', '6 months ₱50', '12 months ₱99']
  },
  {
    id: 'alight-motion',
    name: 'ALIGHT MOTION',
    category: 'Editing',
    details: ['12 months ₱199']
  },
  {
    id: 'meitu',
    name: 'MEITU VIP',
    category: 'Editing',
    details: ['21 days ₱55']
  },
  {
    id: 'wink',
    name: 'WINK',
    category: 'Editing',
    details: ['7 days ₱45', '1 month ₱129']
  },
  {
    id: 'vsco',
    name: 'VSCO',
    category: 'Editing',
    details: ['1 month ₱55', '3 months ₱90', '12 months ₱190']
  },
  {
    id: 'grok-ai',
    name: 'GROK AI',
    category: 'AI Tools',
    details: ['1 week ₱40', '1 month ₱99', 'Weekly replacement']
  },
  {
    id: 'gemini-ai',
    name: 'GEMINI AI',
    category: 'AI Tools',
    details: ['1 month ₱149']
  },
  {
    id: 'quillbot',
    name: 'QUILLBOT',
    category: 'AI Tools',
    details: ['Shared 1 month ₱40', 'Solo 1 month ₱140']
  },
  {
    id: 'krisp-ai',
    name: 'KRISP AI',
    category: 'AI Tools',
    details: ['1 month ₱120', '3 months ₱450']
  },
  {
    id: 'chatgpt',
    name: 'CHATGPT',
    category: 'AI Tools',
    details: ['1 month ₱199', 'Provide your own email']
  },
  {
    id: 'grammarly',
    name: 'GRAMMARLY',
    category: 'AI Tools',
    details: ['Shared 1 month ₱40', 'Solo 1 month ₱55']
  },
  {
    id: 'zoom-pro',
    name: 'ZOOM PRO',
    category: 'Education',
    details: ['7 days ₱33', '1 month ₱55', '100 participants']
  },
  {
    id: 'wps',
    name: 'WPS',
    category: 'Education',
    details: ['7 days ₱42', '1 month ₱80', '12 months ₱499']
  },
  {
    id: 'symbolab',
    name: 'SYMBOLAB',
    category: 'Education',
    details: ['7 days ₱35', '1 month ₱50', '12 months ₱299']
  },
  {
    id: 'studocu',
    name: 'STUDOCU',
    category: 'Education',
    details: ['1 month ₱40', '6 months ₱100', '12 months ₱180']
  },
  {
    id: 'skillshare',
    name: 'SKILLSHARE',
    category: 'Education',
    details: ['1 month ₱28', '6 months ₱55', '12 months ₱150']
  },
  {
    id: 'linkedin',
    name: 'LINKEDIN',
    category: 'Education',
    details: ['Learning plan 1 month ₱90', '12 months ₱450']
  },
  {
    id: 'microsoft-365',
    name: 'MICROSOFT 365',
    category: 'Education',
    details: ['Via invite 1 month ₱35', 'Family 1 month ₱60']
  },
  {
    id: 'duolingo',
    name: 'DUOLINGO',
    category: 'Education',
    details: ['7 days ₱7', '1 month ₱15', '12 months ₱80']
  },
  {
    id: 'hbo-max',
    name: 'HBO MAX',
    category: 'Video Streaming',
    details: ['Shared 1 month ₱70', 'Solo 1 month ₱250']
  },
  {
    id: 'bilibili',
    name: 'BILIBILI',
    category: 'Video Streaming',
    details: ['Shared 1 month ₱60']
  },
  {
    id: 'iqiyi',
    name: 'IQIYI',
    category: 'Video Streaming',
    details: ['7 days ₱35', '1 month ₱70', '12 months ₱400']
  },
  {
    id: 'mubi',
    name: 'MUBI',
    category: 'Video Streaming',
    details: ['7 days ₱25', '1 month ₱30', '12 months ₱160']
  },
  {
    id: 'youtube',
    name: 'YOUTUBE',
    category: 'Video Streaming',
    details: ['Individual 1 month ₱40', 'Family head 1 month ₱99']
  },
  {
    id: 'vivamax',
    name: 'VIVAMAX',
    category: 'Video Streaming',
    details: ['Shared 1 month ₱45', 'Solo 1 month ₱90']
  },
  {
    id: 'viu',
    name: 'VIU',
    category: 'Video Streaming',
    details: ['Shared 1 month ₱38', 'Solo 1 month ₱60']
  },
  {
    id: 'iwant-tfc',
    name: 'IWANT TFC',
    category: 'Video Streaming',
    details: ['Shared 1 month ₱45', 'Solo 1 month ₱90']
  }
];

export const categories = [
  'All',
  'Editing',
  'AI Tools',
  'Education',
  'Video Streaming'
] as const;