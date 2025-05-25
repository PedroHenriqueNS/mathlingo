declare type TActivityConst = {
  id: number;
  title: string;
  achievementSlugs: string[];
  // isDone: boolean;
  teoricalContent: (TContentBase & {
    paragraphs: TText[];
  })[];
  questionContent: (TContentBase & {
    paragraphs: TText[];
    alternatives: TAlternatives[];
  })[];
};

declare type TAchivementsConst = TAchivementsDB & {
  svg: React.ReactNode | JSX.Element;
};

declare type TContentBase = {
  id: number;
  contentTitle: string;
};

declare type TText = {
  id: number;
  type: 'Texto' | 'Math';
  text: string;
};

declare type TAlternatives = {
  id: number;
  type: 'Texto' | 'Math';
  isAlternativaCerta: boolean;
  text: string;
};

declare type TActivityDB = {
  id: number;
  title: string;
  isDone: boolean;
};

declare type TAchivementsDB = {
  id: number;
  slug: string;
  title: string;
  description: string;
};

declare type TFiresDB = {
  id: number;
  date: Date;
};
