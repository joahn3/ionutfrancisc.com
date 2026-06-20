export type JourneyItem = {
  label: string
  heading: string
  description: string
}

export const journey: JourneyItem[] = [
  {
    label: 'University years',
    heading: 'Built and operated a neighborhood mini-ISP',
    description:
      'Grew a local network to roughly 200–300 customers, combining hands-on infrastructure, troubleshooting, customer support, and day-to-day operations.',
  },
  {
    label: 'Before IBM · 2 years',
    heading: 'Customs agent for DHL at Henri Coandă Airport',
    description:
      'Worked in customs operations at Bucharest Otopeni Airport, where accuracy, documentation, deadlines, and regulated processes were central to daily work.',
  },
  {
    label: 'IBM and consulting · 10+ years',
    heading: 'Security, privacy, GRC, and regulated delivery',
    description:
      'Moved from operations into enterprise consulting across risk, privacy-by-design, secure-by-design reviews, audit readiness, incident governance, PKI, and HSM contexts.',
  },
]

export const journeyRo: JourneyItem[] = [
  {
    label: 'În facultate',
    heading: 'Am construit și operat un mini-ISP de cartier',
    description:
      'Am dezvoltat o rețea locală care a ajuns la aproximativ 200–300 de clienți, ocupându-mă direct de infrastructură, depanare, asistență pentru clienți și operațiunile zilnice.',
  },
  {
    label: 'Înainte de IBM · 2 ani',
    heading: 'Agent vamal DHL la Aeroportul Henri Coandă',
    description:
      'Am lucrat în operațiuni vamale la Otopeni, într-un mediu în care acuratețea, documentația, termenele și procesele reglementate contau zilnic.',
  },
  {
    label: 'IBM și consultanță · 10+ ani',
    heading: 'Securitate, protecția datelor, GRC și medii reglementate',
    description:
      'Am trecut din operațiuni în consultanță pentru companii, lucrând cu riscuri, evaluări privacy-by-design și secure-by-design, pregătire pentru audit, guvernanța incidentelor, PKI și HSM.',
  },
]
