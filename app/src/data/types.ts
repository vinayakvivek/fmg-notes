export interface FlowNode {
  id: string;
  label: string;
  sublabel?: string;
  highlight?: boolean;
}

export interface FlowEdge {
  from: string;
  to: string;
  label?: string;
}

export type ContentBlock =
  | { type: "text"; value: string }
  | { type: "bulletList"; items: string[] }
  | { type: "flowchart"; nodes: FlowNode[]; edges: FlowEdge[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "keyPoint"; label: string; value: string }
  | { type: "clinicalNote"; text: string };

export interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  tags: string[];
}

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FillBlank {
  id: string;
  sentence: string;
  blanks: string[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subject?: string;
  sections: Section[];
  flashcards: Flashcard[];
  mcqs: MCQ[];
  fillBlanks: FillBlank[];
  quickRevision: string[];
}

export interface Module {
  id: string;
  name: string;
  shortName: string;
  color: string;
  icon: string;
  chapters: Chapter[];
}
