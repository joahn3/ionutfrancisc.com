import { GitHub, LinkedIn, Instagram } from 'components/Icons'

const navigation = {
  internal: [
    { name: 'Work', link: '/work' },
    { name: 'Consulting', link: '/consulting' },
    { name: 'Mentoring', link: '/instruction' },
    { name: 'Contact', link: '/contact' },
  ],
  external: [
    {
      name: 'GitHub',
      icon: <GitHub />,
      link: 'https://github.com/joahn3',
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      link: 'https://www.instagram.com/joahn3',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      link: 'https://www.linkedin.com/in/ionutfrancisc',
    },
  ],
}

export default navigation
