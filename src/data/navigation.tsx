import {
  Credly,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  TikTok,
  WhatsApp,
} from 'components/Icons'
import { profile } from 'data/profile'

const external = [
  {
    name: 'GitHub',
    icon: <GitHub />,
    link: profile.github,
  },
  {
    name: 'Instagram',
    icon: <Instagram />,
    link: 'https://www.instagram.com/joahn3',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedIn />,
    link: profile.linkedin,
  },
]

const navigation = {
  internal: [
    { name: 'Security & Privacy', link: '/security-privacy' },
    { name: 'Work', link: '/work' },
    { name: 'Consulting', link: '/consulting' },
    { name: 'Mentoring', link: '/instruction' },
    { name: 'Contact', link: '/contact' },
  ],
  internalRo: [
    { name: 'Securitate & GRC', link: '/ro/securitate-confidentialitate' },
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
      name: 'WhatsApp',
      icon: <WhatsApp />,
      link: profile.whatsapp,
    },
    {
      name: 'Credly badges',
      icon: <Credly />,
      link: 'https://www.credly.com/users/ionut-iulian-francisc',
    },
  ],
}

export default navigation
