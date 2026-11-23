export type WindowId =
  | 'about'
  | 'projects'
  | 'journey'
  | 'toolkit'
  | 'contact'
  | `project:${string}`;

export interface Kpi {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  file: string;
  name: string;
  question: string;
  stack: string;
  intro: string;
  kpis: Kpi[];
  tools: string[];
  repo?: string;
  app?: string;
  download?: string;
}

export interface Milestone {
  when: string;
  title: string;
  note: string;
  kind: 'data' | 'study' | 'work';
}