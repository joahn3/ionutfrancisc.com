import { GitHub, LinkedIn, Instagram } from 'components/Icons'

export default {
  internal: [
    { name: 'Work', link: '/work' },
    { name: 'Instruction', link: '/instruction' },
    { name: 'Consulting' , link: '/consulting' },
    { name: 'Contact', link: '/contact' },
  ],
  external: [
    { name: 'GitHub', icon: <GitHub />, link: 'https://github.com/joahn3' },
    {
      name: 'Instagram',
      icon: <Instagram />,
      link: 'https://www.instagram.com/mattwaler',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      link: 'https://www.linkedin.com/in/mattwaler/',
    },
  ],
}

// TO DO:
// 1. add icon for Facebook
// 2. add icons for navigation menu