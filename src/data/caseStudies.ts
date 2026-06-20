export type CaseStudy = {
  title: string
  category: string
  context: string
  problem: string
  contribution: string
  result: string
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Enterprise Security & Privacy by Design',
    category: 'Security / Privacy / Controls · anonymized',
    context:
      'New tools and applications needed security and privacy review in an enterprise consulting environment.',
    problem:
      'Requirements, controls, evidence, findings, ownership, and delivery constraints needed to be made explicit and traceable.',
    contribution:
      'Structured secure-by-design and privacy-by-design reviews, clarified control expectations, documented findings, and aligned actions with owners and timelines.',
    result:
      'Produced clear, decision-ready review records and improved remediation tracking across architecture, security, and delivery stakeholders.',
  },
  {
    title: 'FiraWeb Brand Consolidation',
    category: 'Lead generation / SEO / web systems',
    context:
      'Several redirected Fira domains and a broad service mix needed one credible public destination.',
    problem:
      'Fragmented naming and overlapping offers made positioning, discovery, and the customer path harder to understand.',
    contribution:
      'Consolidated the domains under FiraWeb and organized web development, SEO, automation, and lead-generation services into one focused structure.',
    result:
      'Created one canonical brand and a clearer route from service discovery to project conversation.',
  },
  {
    title: 'BaffiCafe Customer Journey',
    category: 'Local business / content / conversion',
    context:
      'A local restaurant needed a practical website for customers planning a visit or order.',
    problem:
      'Menus, daily offers, events, reservations, takeaway, and trust signals had to work as one concise customer flow.',
    contribution:
      'Structured the website around the information and actions local customers need most, with mobile use and local discovery in mind.',
    result:
      'Delivered a single public destination for menu discovery, reservations, takeaway information, events, and customer reviews.',
  },
]

export const caseStudiesRo: CaseStudy[] = [
  {
    title: 'Securitate și protecția datelor prin proiectare',
    category: 'Securitate / Protecția datelor / Controale · anonimizat',
    context:
      'Instrumentele și aplicațiile noi necesitau evaluări de securitate și protecția datelor într-un mediu de consultanță pentru companii.',
    problem:
      'Cerințele, controalele, dovezile, constatările, responsabilitățile și constrângerile de livrare trebuiau formulate explicit și urmărite în mod clar.',
    contribution:
      'Am structurat evaluările secure-by-design și privacy-by-design, am clarificat cerințele de control și am atribuit acțiunile responsabililor, cu termene precise.',
    result:
      'Am produs documente clare pentru luarea deciziilor și am îmbunătățit urmărirea remedierii între echipele de arhitectură, securitate și livrare.',
  },
  {
    title: 'Consolidarea brandului FiraWeb',
    category: 'Atragerea clienților / SEO / sisteme web',
    context:
      'Mai multe domenii Fira redirecționate și o ofertă largă aveau nevoie de o singură destinație publică credibilă.',
    problem:
      'Identitatea fragmentată și serviciile suprapuse făceau mai greu de înțeles poziționarea, oferta și parcursul clientului.',
    contribution:
      'Am consolidat domeniile sub FiraWeb și am organizat serviciile de dezvoltare web, SEO, automatizare și atragere a clienților într-o structură coerentă.',
    result:
      'A rezultat un singur brand canonic și un traseu mai clar de la descoperirea serviciilor la conversația despre proiect.',
  },
  {
    title: 'Parcursul clientului pentru BaffiCafe',
    category: 'Afacere locală / Conținut / Conversie',
    context:
      'Un restaurant local avea nevoie de un site practic pentru clienții care planifică o vizită sau doresc să comande.',
    problem:
      'Meniurile, ofertele zilei, evenimentele, rezervările, comenzile la pachet și elementele de încredere trebuiau reunite într-un parcurs simplu și coerent.',
    contribution:
      'Am structurat site-ul în jurul informațiilor și acțiunilor importante pentru clienții locali, cu atenție la utilizarea pe mobil și la vizibilitatea în căutările locale.',
    result:
      'Am creat o singură destinație publică pentru meniu, rezervări, comenzi la pachet, evenimente și recenzii.',
  },
]
