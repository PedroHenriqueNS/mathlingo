declare type TActivities = {
  id: number;
  title: string;
  // isDone: boolean;
  teoricalContent: (TContentBase & {
    contentPage: TText[];
  })[];
  questionContent: (TContentBase & {
    contentPage: TText[]
    alternatives: TAlternatives[]
  })[];
}[];

declare type TContentBase = {
  id: number;
  contentTitle: string;
};

declare type TText = {
  id: number;
  type: 'Texto' | 'Math' | 'Texto-Math';
  content: string | JSX.Element;
}

declare type TAlternatives = {
  id: number;
  type: 'Texto' | 'Math' | 'Texto-Math';
  isAlternativaCerta: boolean;
  content: string | JSX.Element;
}

declare type TActivityDB = {
  id: number;
  title: string;
  isDone: boolean
};

declare type TAchivementsDB = {
  id: number;
  title: string;
  description: string;
};

declare type TFiresDB = {
  id: number;
  date: Date;
};
