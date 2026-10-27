export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  note?: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile = {
  name: 'Caio Santos',
  nameJa: 'カイオ・サントス',
  title: 'Software Engineer · Full-stack',
  location: 'Tokyo, Japan',
  email: 'caio.santos@msn.com',
  github: 'https://github.com/caiosantosss',
  githubWork: 'https://github.com/caiosantosstx',
  linkedin: 'https://www.linkedin.com/in/caiosantosss/',
  resume: '/CaioSantos_Resume_2026.pdf',
  headline: 'Software engineer in Tokyo, building websites and apps for Japanese companies.',
  intro:
    'Full-stack, with 4+ years of hands-on work across Java, Python, Ruby and TypeScript, and a recent focus on Adobe Experience Manager.',
  about: [
    'I’m a software engineer at Sutrix Solutions Japan, building Adobe Experience Manager (AEM) websites for major Japanese enterprises: Java on the back end, responsive HTML, CSS and JavaScript on the front, and a lot of code review along the way.',
    'Before that I built an iOS and Android matching app with Rails, React Native and Next.js, and re-architected the HLJ.com e-commerce platform for international customers with Django, Docker and AWS.',
    'I grew up in Brazil, studied in Australia, and have called Tokyo home since. I enjoy translating business requirements into maintainable software, and explaining technical trade-offs to non-technical people.',
  ],
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Portuguese', level: 'Native' },
    { name: 'Spanish', level: 'Basic' },
    { name: 'Japanese', level: 'Basic' },
  ],
  interests: 'Snowboarding, table tennis, side projects.',
} as const;

export const experience: Job[] = [
  {
    company: 'Sutrix Solutions Japan',
    role: 'Software Engineer',
    period: 'Mar 2024 – Present',
    location: 'Tokyo · Hybrid',
    note: 'Tech Lead since Jun 2026',
    bullets: [
      'Build and deliver Adobe Experience Manager (AEM) web solutions for major Japanese enterprises including Panasonic, Sato, Mazda, and YKK.',
      'Guide a team of 4–5 engineers, owning technical direction, code review, and delivery quality across 3 concurrent client projects.',
      'Build backend tools in Java and responsive front-end experiences with HTML, JavaScript, and CSS for brand-critical websites.',
      'Streamlined task planning and prioritization, improving delivery efficiency and consistently shipping on schedule.',
    ],
  },
  {
    company: 'Archers',
    role: 'Software Engineer',
    period: 'May 2023 – Apr 2024',
    location: 'Tokyo · On-site',
    bullets: [
      'Built and maintained a cross-platform matching app (iOS & Android) with Ruby on Rails, React Native, Next.js and TypeScript, backed by PostgreSQL and MySQL.',
      'Cut a key form page’s load time from ~16 seconds to ~2 seconds and refined the UI for a smoother experience.',
      'Partnered with a cross-functional team to turn business requirements into robust, maintainable features.',
    ],
  },
  {
    company: 'SBWorks',
    role: 'Software Engineer',
    period: 'Mar 2022 – Feb 2023',
    location: 'Tokyo',
    bullets: [
      'Re-architected the HLJ.com e-commerce platform to support international customers and multi-region operations.',
      'Delivered end-to-end features, from back-end logic to customer-facing UI, using Python, Django, Docker, REST APIs and AWS.',
      'Supported high monthly order volumes across the Japanese (hlj.co.jp) and international (hlj.com) storefronts.',
    ],
  },
];

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'Ruby', 'SQL'] },
  {
    label: 'Frameworks',
    items: ['React', 'React Native', 'Next.js', 'Django', 'Ruby on Rails', 'Stimulus'],
  },
  { label: 'Platforms & Infra', items: ['Adobe Experience Manager', 'AWS', 'Docker', 'PostgreSQL', 'REST APIs'] },
  { label: 'Frontend', items: ['HTML5', 'CSS / SCSS', 'Bootstrap', 'Responsive design'] },
  { label: 'Tools', items: ['Git / GitHub', 'Jira', 'Confluence', 'Figma'] },
];

export const education = [
  { school: 'Le Wagon Tokyo', detail: 'Web Development', year: '2021' },
  { school: 'APC, Australia', detail: 'Leadership & Project Management', year: '2016–2019' },
  { school: 'FGV University, Brazil', detail: 'B.A. Business Administration & Management', year: '2011–2015' },
];
