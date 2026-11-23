
import type { Milestone } from '../types';

export const profile = {
    name: 'Celine Tan',
    first: 'Celine',
    role: 'Information Systems · Jakarta',

    email: 'tanceline903@gmail.com',
    github: 'https://github.com/celline9',
    linkedin: 'https://linkedin.com/in/celine-tan-b07b1927b',

    bio: [
        "Hi, I'm Celine. I did my bachelor's in Information System at Bina Nusantara University, experienced in supporting academic laboratory activities, assisting students in programming and SQL, and contributing to real-world data-related tasks.",

        "I'm looking for my first data analyst role. If you're hiring, or just want to talk data, I'd love to hear from you.",
    ],
};

export const journey: Milestone[] = [
  {
    when: 'Feb 2026 – now',
    title: 'Database Administrator · BINUS University',
    note: 'Manage student attendance and eligibility, allocate and manage exam appendices, and coordinate with external partners on data access and data needs.',
    kind: 'data',
  },
  {
    when: 'Sep 2024 – Feb 2026',
    title: 'Junior Laboratory Assistant · Bina Nusantara University',
    note: 'Assisted students in labs for Programming for Business, Computer Networks, Software Design & Patterns and Database Technology (SQL), marked lab work and proctored exams.',
    kind: 'work',
  },
  {
    when: 'Sep 2023 – Jun 2024',
    title: 'Member · Bina Nusantara Computer Club',
    note: 'Club member working with MySQL and JavaFX.',
    kind: 'study',
  },
];

export const toolkit: Record<string, string[]> = {
    Languages: [
        'SQL',
        'Python · pandas',
        'Excel',
        'Figma'
    ],

    'BI & reporting': [
        'Power BI · DAX',
        'Power Query',
        'Tableau',
        'Streamlit',
        'Excel',
    ],

    Platforms: [
      'MySQL',
      'PostgreSQL',
      'DBeaver',
      'Git',
      'Figma',
  ],
};
