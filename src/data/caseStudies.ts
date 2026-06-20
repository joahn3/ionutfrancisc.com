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
      'Produced decision-ready review outputs and clearer remediation follow-up across architecture, security, and delivery stakeholders.',
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
    title: 'Enterprise Security & Privacy by Design',
    category: 'Security / Privacy / Controls · anonimizat',
    context:
      'Tool-uri și aplicații noi aveau nevoie de security și privacy review într-un mediu enterprise de consultanță.',
    problem:
      'Cerințele, controalele, dovezile, constatările, ownership-ul și constrângerile de livrare trebuiau făcute explicite și trasabile.',
    contribution:
      'Am structurat secure-by-design și privacy-by-design reviews, am clarificat așteptările de control și am aliniat acțiunile cu owneri și termene.',
    result:
      'Am produs rezultate clare pentru decizie și un remediation follow-up mai ușor de urmărit între architecture, security și delivery.',
  },
  {
    title: 'Consolidarea brandului FiraWeb',
    category: 'Lead generation / SEO / web systems',
    context:
      'Mai multe domenii Fira redirecționate și o ofertă largă aveau nevoie de o singură destinație publică credibilă.',
    problem:
      'Naming-ul fragmentat și serviciile suprapuse făceau poziționarea, descoperirea și traseul clientului mai greu de înțeles.',
    contribution:
      'Am consolidat domeniile sub FiraWeb și am organizat serviciile de web development, SEO, automatizare și lead generation într-o structură focusată.',
    result:
      'A rezultat un singur brand canonic și un traseu mai clar de la descoperirea serviciilor la conversația despre proiect.',
  },
  {
    title: 'Customer journey pentru BaffiCafe',
    category: 'Business local / conținut / conversie',
    context:
      'Un restaurant local avea nevoie de un website practic pentru clienții care pregătesc o vizită sau o comandă.',
    problem:
      'Meniurile, ofertele zilei, evenimentele, rezervările, takeaway și trust signals trebuiau să funcționeze într-un singur flow concis.',
    contribution:
      'Am structurat site-ul în jurul informațiilor și acțiunilor importante pentru clienții locali, cu atenție la mobil și local discovery.',
    result:
      'Am livrat o singură destinație publică pentru meniu, rezervări, takeaway, evenimente și recenzii.',
  },
]
