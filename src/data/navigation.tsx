import {
  Credly,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  TikTok,
} from 'components/Icons'

const external = [
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
]

const navigation = {
  internal: [
    { name: 'Work', link: '/work' },
    { name: 'Consulting', link: '/consulting' },
    { name: 'Mentoring', link: '/instruction' },
    { name: 'Contact', link: '/contact' },
  ],
  internalRo: [
    { name: 'Proiecte', link: '/ro/work' },
    { name: 'Consultanță', link: '/ro/consultanta' },
    { name: 'Mentorat', link: '/ro/mentorat' },
    { name: 'Contact', link: '/ro/contact' },
  ],
  external,
  footer: [
    ...external,
    {
      name: 'Facebook',
      icon: <Facebook />,
      link: 'https://www.facebook.com/joahn328',
    },
    {
      name: 'TikTok',
      icon: <TikTok />,
      link: 'https://www.tiktok.com/@me.joahne',
    },
    {
      name: 'Credly badges',
      icon: <Credly />,
      link: 'https://www.credly.com/users/ionut-iulian-francisc',
    },
  ],
}

export default navigation
