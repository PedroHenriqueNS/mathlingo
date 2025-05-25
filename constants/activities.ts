export const activitiesList: TActivityConst[] = [
  {
    id: 1,
    title: 'Conteúdo 1',
    achievementSlugs: ['achievement-test'],
    teoricalContent: [
      //// PÁGINAS
      {
        id: 0,
        contentTitle: 'Explicação 1',
        paragraphs: [
          //// PARAGRAFOS
          {
            id: 0,
            type: 'Texto',
            text: 'Texto de teste 21321321 dsasdsadsadvcx, segue abaixo uma formula matemateca',
          },
          {
            id: 1,
            type: 'Math', //// FORMULAS MATEMÁTICAS EM "EXPRESSÕES DE LaTeX" (LaTeX é uma expressão matematica ou formula que é formatada e exibida em um documento digital)
            text: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}',
          },
        ],
      },
      {
        id: 1,
        contentTitle: 'Explicação 2',
        paragraphs: [
          //// PARAGRAFOS
          {
            id: 0,
            type: 'Texto',
            text: 'Texto de teste blablabla explicação 2, segue mais uma formula de matemateca',
          },
          {
            id: 1,
            type: 'Math', //// FORMULAS MATEMÁTICAS EM "EXPRESSÕES DE LaTeX" (LaTeX é uma expressão matematica ou formula que é formatada e exibida em um documento digital)
            text: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}',
          },
        ],
      },
    ],
    questionContent: [
      //// PÁGINAS
      {
        id: 0,
        contentTitle: 'Atividade 1',
        paragraphs: [
          //// PARAGRAFOS DO TEXTO
          {
            id: 0,
            type: 'Texto',
            text: 'Assinale a resposta correta da seguinte fórmula',
          },
          {
            id: 1,
            type: 'Math',
            text: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}',
          },
        ],
      },
    ],
  },
];
