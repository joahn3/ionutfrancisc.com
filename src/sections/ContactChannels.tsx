import { ChatAlt2Icon, ExternalLinkIcon } from '@heroicons/react/outline'
import { profile } from 'data/profile'

interface Props {
  language?: 'en' | 'ro'
}

export default function ContactChannels({ language = 'en' }: Props) {
  const isRomanian = language === 'ro'

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="container flex flex-col gap-3 py-6 sm:flex-row sm:items-center">
        <p className="font-bold text-gray-900">
          {isRomanian ? 'Alternative la formular' : 'Alternatives to the form'}
        </p>
        <div className="flex flex-wrap gap-3 sm:ml-auto">
          <a
            className="inline-flex items-center gap-2 font-bold text-emerald-700"
            href={profile.whatsapp}
            rel="noreferrer noopener"
            target="_blank"
          >
            <ChatAlt2Icon className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            className="inline-flex items-center gap-2 font-bold text-emerald-700"
            href={profile.linkedin}
            rel="noreferrer noopener"
            target="_blank"
          >
            <ExternalLinkIcon className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
