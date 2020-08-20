export const THEME = [
  { name: 'light', value: 'light' },
  { name: 'dark', value: 'dark' },
];

export const MENU = [
  {
    name: 'Collections',
    secondary: true,
    menus: [
      {
        name: 'Summer',
        to: '/summer',
      },
      {
        name: 'Winter',
        to: '/winter',
      },
    ],
  },
  {
    name: 'Stores',
    secondary: true,
    menus: [
      {
        name: 'Wroclove',
        to: '/wroclove',
      },
      {
        name: 'Warsaw',
        to: '/warsaw',
      },
    ],
  },
  {
    name: 'About Us',
    secondary: true,
    to: '/about',
  },
  { name: 'Blog', secondary: true, to: '/blog' },
  { name: 'Search', to: '/search' },
  { name: 'My account', to: '/account' },
];
