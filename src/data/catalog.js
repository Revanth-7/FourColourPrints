const baseUrl = import.meta.env.BASE_URL

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Quick picks', href: '#quick-picks' },
  { label: 'Print menu', href: '#prices' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const catalogProducts = [
  {
    id: 'visiting-cards',
    name: 'Visiting cards',
    image: `${baseUrl}catalog/visiting-cards-poster.jpeg`,
    spec: '300 GSM · FOUR COLOUR',
    description: 'Make a lasting first impression with a crisp, full-colour finish.',
    unit: 'cards',
    priceGroups: [
      {
        title: 'Single-side',
        prices: [
          { quantity: 100, price: '155' },
          { quantity: 200, price: '255' },
          { quantity: 300, price: '325' },
        ],
      },
      {
        title: 'Double-side (B to B)',
        prices: [
          { quantity: 100, price: '245' },
          { quantity: 200, price: '400' },
          { quantity: 300, price: '555' },
        ],
      },
    ],
  },
  {
    id: 'a5-pamphlets',
    name: 'A5 pamphlets',
    image: `${baseUrl}catalog/a5-pamphlets-poster.jpeg`,
    spec: '130 GSM ART PAPER · FOUR COLOUR',
    description: 'A handy format for sharing your story, offer, or next big announcement.',
    unit: 'pieces',
    priceGroups: [
      {
        title: 'One-side',
        prices: [
          { quantity: 100, price: '410' },
          { quantity: 200, price: '730' },
          { quantity: 300, price: '1,060' },
        ],
      },
      {
        title: 'Double-side',
        prices: [
          { quantity: 100, price: '720' },
          { quantity: 200, price: '1,350' },
          { quantity: 300, price: '1,990' },
        ],
      },
    ],
  },
  {
    id: 'a4-letterheads',
    name: 'A4 letterheads',
    image: `${baseUrl}catalog/a4-letterheads-poster.jpeg`,
    spec: '100 GSM · FOUR COLOUR',
    description: 'Put your business on a polished footing with a letterhead to match.',
    unit: 'sheets',
    priceGroups: [
      {
        title: 'Maplitho paper',
        prices: [
          { quantity: 100, price: '700' },
          { quantity: 200, price: '1,300' },
          { quantity: 300, price: '1,700' },
        ],
      },
      {
        title: 'Bond paper',
        prices: [
          { quantity: 100, price: '750' },
          { quantity: 200, price: '1,350' },
          { quantity: 300, price: '1,750' },
        ],
      },
    ],
  },
  {
    id: 'a4-fold-brochures',
    name: 'A4 fold brochures',
    image: `${baseUrl}catalog/a4-fold-brochures-poster.jpeg`,
    spec: 'DUPLEX · 130 GSM ART PAPER',
    description: 'Give your message room to unfold with a full-colour, folded brochure.',
    unit: 'pieces',
    priceGroups: [
      {
        title: 'Duplex printing',
        prices: [
          { quantity: 100, price: '1,395' },
          { quantity: 200, price: '2,520' },
          { quantity: 300, price: '3,590' },
          { quantity: 500, price: '5,250' },
        ],
      },
    ],
  },
]

export const printingTypes = ['Digital print', 'Offset print', 'Screen print']

export const materials = [
  'GSM board',
  'Registration sticker (Reg. sticker)',
  'PVC sticker',
  'Synthetic material',
  'Paper',
  'Metallic board',
  'Metallic synthetic material',
  'Rubber sheet',
  'Tracing material',
  'OHP material',
  'Regular board',
  'Special board',
]

export const finishingOptions = [
  'Die cut',
  'Shape cut',
  'Thermal',
  'Lamination',
  'Spot UV',
  'Gold & silver foiling',
  'POD printing',
  'All types of binding',
]

export const giftItems = [
  'Mug',
  'Photo frame',
  'Pen',
  'Key chain',
  'Mouse pad',
  'Water bottle',
  'Badge',
  'Paper weight',
  'Crystal',
]

export const otherServices = [
  'Booklets',
  'Brochures',
  'Business cards',
  'Calendars',
  'Catalogues',
  'Danglers',
  'Diaries',
  'Envelopes',
  'Flyers',
  'Posters',
  'Greeting cards',
  'ID cards',
  'Invitations',
  'Labels',
  'Leaflets',
  'Letterheads',
  'Magazines',
  'Mailers',
  'Menu cards',
  'Notepads',
  'Pamphlets',
  'Stickers',
  'Tags',
  'Voucher pads',
]
