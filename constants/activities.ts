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
  {
    id: 2,
    title: 'Matrizes',
    achievementSlugs: ['achievement-test'],
    teoricalContent: [
      {
        id: 0,
        contentTitle: 'Matriz',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Tabelas com "m" linhas e "n" colunas são denominadas matrizes "m x n"',
          },
          {
            id: 1,
            type: 'Math',
            text: '\\left( \\begin{array}{cc} -2 & 3 \\\\ 1 & 4 \\end{array} \\right)_{2 \\times 2}',
          },
          {
            id: 2,
            type: 'Math',
            text: '\\left[ \\begin{array}{cc} 4 & 0 \\\\ -\\sqrt{2} & \\pi \\\\ 1 & 1 \\end{array} \\right]_{3 \\times 2}',
          },
        ],
      },
      {
        id: 1,
        contentTitle: 'Notação e Formação de uma Matriz',
        paragraphs: [
          {
            id: 0,
            type: 'Math',
            text: 'A = \\left[ a_{ij} \\right]_{m \\times n}',
          },
          {
            id: 1,
            type: 'Texto',
            text: 'Onde i e j representam, respectivamente, a linha e a coluna que o elemento ocupa.',
          },
          {
            id: 2,
            type: 'Math',
            text: 'A = \\left( \\begin{array}{cccc} a_{11} & \\cdots & & a_{1n} \\\\ \\vdots & \\ddots & \\cdots & \\vdots \\\\ a_{m1} & \\cdots & & a_{mn} \\end{array} \\right)',
          },
          {
            id: 3,
            type: 'Texto',
            text: 'Exemplo:',
          },
          {
            id: 4,
            type: 'Texto',
            text: '𝑚 = 2 𝑟𝑒𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑎 𝑜 𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑙𝑖𝑛ℎ𝑎, 𝑛 = 3 𝑛ú𝑚𝑒𝑟𝑜 𝑑𝑒 𝑐𝑜𝑙𝑢𝑛𝑎',
          },
          {
            id: 5,
            type: 'Math',
            text: '\\begin{aligned}\\text{a}_{11} &= 2 & & & \\text{a}_{21} &= 1 \\\\\\text{a}_{12} &= -3 & -----> & & \\text{a}_{22} &= 0 \\\\\\text{a}_{13} &= 4 & & & \\text{a}_{23} &= 5\\end{aligned}',
          },
          {
            id: 6,
            type: 'Math',
            text: 'A = \\left( \\begin{array}{ccc} 2 & -3 & 4 \\\\ 1 & 0 & 5 \\end{array} \\right)_{2 \\times 3}',
          },
        ],
      },
      {
        id: 2,
        contentTitle: 'Matrizes Especiais',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Matriz Linha',
          },
          {
            id: 1,
            type: 'Texto',
            text: 'É toda matriz do tipo l x n, ou seja, uma única linha.',
          },
          {
            id: 2,
            type: 'Math',
            text: '\\left[ 1 \\quad 0 \\quad -15 \\right]',
          },
          {
            id: 3,
            type: 'Texto',
            text: 'Matriz Coluna',
          },
          {
            id: 4,
            type: 'Texto',
            text: 'É toda matriz do tipo m x 1, ou seja, com uma única coluna',
          },
          {
            id: 5,
            type: 'Math',
            text: '\\left[ \\begin{array}{c} 1 \\\\ 1 \\end{array} \\right]',
          },
          {
            id: 6,
            type: 'Texto',
            text: 'Matriz Quadrada',
          },
          {
            id: 7,
            type: 'Texto',
            text: 'É toda matriz que seja do tipo m x m, ou seja, o mesmo numero de linhas e colunas.',
          },
          {
            id: 8,
            type: 'Math',
            text: '\\left[ \\begin{array}{cc} 1 & 0 \\\\ 5 & -1 \\end{array} \\right]',
          },
          {
            id: 9,
            type: 'Texto',
            text: 'Matriz Nula',
          },
          {
            id: 10,
            type: 'Texto',
            text: 'É toda matriz em que seus elementos sejam nulos',
          },
          {
            id: 11,
            type: 'Math',
            text: 'A = \\left( \\begin{array}{ccc} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{array} \\right)_{3 \\times 3}',
          },
          {
            id: 12,
            type: 'Texto',
            text: 'Matriz Diagonal',
          },
          {
            id: 13,
            type: 'Texto',
            text: 'É toda matriz quadrada onde todos os elementos que não estão na diagonal principal são nulos',
          },
          {
            id: 14,
            type: 'Math',
            text: '\\quad \\begin{pmatrix}1 & 0 \\\\0 & 3\\end{pmatrix}',
          },
          {
            id: 15,
            type: 'Math',
            text: '\\begin{pmatrix}1 & 0 & 0 \\\\0 & -2 & 0 \\\\0 & 0 & 3\\end{pmatrix}',
          },
          {
            id: 16,
            type: 'Texto',
            text: 'Matriz Identidade',
          },
          {
            id: 17,
            type: 'Texto',
            text: 'É toda matriz quadrada onde todos os elementos da diagonal principal são iguais a 1 e os demais igual a o',
          },
          {
            id: 18,
            type: 'Math',
            text: 'I_n = [a_{ij}], \\quad a_{ij} = \\begin{cases}1, & \\text{se } i = j \\\\0, & \\text{se } i \\ne j\\end{cases}',
          },
          {
            id: 19,
            type: 'Math',
            text: '\\begin{pmatrix}1 & 0 & 0 \\\\0 & 1 & 0 \\\\0 & 0 & 1\\end{pmatrix}',
          },
          {
            id: 20,
            type: 'Math',
            text: 'a_{11} = a_{22} = a_{33} = 1',
          },
          {
            id: 21,
            type: 'Texto',
            text: 'Matriz Transposta',
          },
          {
            id: 22,
            type: 'Texto',
            text: 'Chamamos de matriz transposta a matriz obtida a partir de uma matriza A, trocando-se ordenadamente suas linhas por colunas ou colunas por linha.',
          },
          {
            id: 23,
            type: 'Math',
            text: 'A = \\begin{bmatrix}1 & 2 & -3 \\\\4 & 5 & 6\\end{bmatrix}',
          },
          {
            id: 24,
            type: 'Math',
            text: 'A^T = \\begin{pmatrix}1 & 4 \\\\2 & 5 \\\\-3 & 6\\end{pmatrix}',
          },
          {
            id: 25,
            type: 'Math',
            text: 'A = \\begin{pmatrix}1 & 0 & 5 \\\\5 & -6 & 9 \\\\2 & 7 & 0\\end{pmatrix}',
          },
          {
            id: 26,
            type: 'Math',
            text: 'A^T = \\begin{pmatrix}1 & 5 & 2 \\\\0 & -6 & 7 \\\\5 & 9 & 0 \\end{pmatrix}',
          },
        ],
      },
    ],

    questionContent: [
      {
        id: 0,
        contentTitle: 'Atividade 1',
        paragraphs: [
          {
            id: 0,
            type: 'Imagem', // TODO: IMAGEM
            text: 'imagem-id-0',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: false,
            text: 'B = \\begin{pmatrix} 1 & -2 & -6 \\\\ 7 & 1 & -4 \\\\ -3 & 9 & 1 \\end{pmatrix}',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: true,
            text: 'B = \\begin{pmatrix} 1 & -3 & -8 \\\\ 3 & 1 & -5 \\\\ 8 & 5 & 1 \\end{pmatrix}',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: 'B = \\begin{pmatrix} 0 & -7 & 2 \\\\ -1 & 0 & -9 \\\\ 6 & 3 & 0 \\end{pmatrix}',
          },
        ],
      },
      {
        id: 1,
        contentTitle: 'Atividade 2',
        paragraphs: [
          {
            id: 0,
            type: 'Imagem', // TODO: IMAGEM
            text: 'imagem-id-1',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '12',
          },
          {
            id: 1,
            type: 'Texto',
            isAlternativaCerta: true,
            text: '3',
          },
          {
            id: 2,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '6',
          },
          {
            id: 3,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '9',
          },
        ],
      },
    ],
  },
];
