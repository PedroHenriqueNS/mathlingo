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

    questionContent: [],
  },
  {
    id: 3,
    title: 'Polinômios',
    achievementSlugs: ['achievement-polynomials'],
    teoricalContent: [
      {
        id: 0,
        contentTitle: 'O que são Polinômios?',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Imagine que você está construindo uma casa. Você precisa de tijolos, cimento, madeira, e cada material tem sua função específica. No mundo da matemática, os polinômios são como essas casas: são construídos a partir de blocos básicos chamados monômios. Um monômio é uma expressão simples, como',
          },
          {
            id: 1,
            type: 'Math',
            text: 'a x^n',
          },
          {
            id: 2,
            type: 'Texto',
            text: ', onde',
          },
          {
            id: 3,
            type: 'Math',
            text: 'a',
          },
          {
            id: 4,
            type: 'Texto',
            text: 'é um número real (o coeficiente, como o tamanho do tijolo) e',
          },
          {
            id: 5,
            type: 'Math',
            text: 'n',
          },
          {
            id: 6,
            type: 'Texto',
            text: 'é um inteiro não negativo (o expoente, que indica quantas vezes multiplicamos',
          },
          {
            id: 7,
            type: 'Math',
            text: 'x',
          },
          {
            id: 8,
            type: 'Texto',
            text: 'por si mesmo). Por exemplo,',
          },
          {
            id: 9,
            type: 'Math',
            text: '3x^2',
          },
          {
            id: 10,
            type: 'Texto',
            text: 'é um monômio onde',
          },
          {
            id: 11,
            type: 'Math',
            text: 'a = 3',
          },
          {
            id: 12,
            type: 'Texto',
            text: 'e',
          },
          {
            id: 13,
            type: 'Math',
            text: 'n = 2',
          },
          {
            id: 14,
            type: 'Texto',
            text: '. Um polinômio, então, é a soma de vários desses monômios, como',
          },
          {
            id: 15,
            type: 'Math',
            text: '3x^2 + 2x - 1',
          },
          {
            id: 16,
            type: 'Texto',
            text: 'ou',
          },
          {
            id: 17,
            type: 'Math',
            text: '5x^4 - x + 7',
          },
          {
            id: 18,
            type: 'Texto',
            text: '. Pense neles como receitas matemáticas, onde cada termo adiciona um "ingrediente" à mistura.',
          },
          {
            id: 19,
            type: 'Texto',
            text: 'Agora, assim como uma casa tem diferentes andares, os polinômios têm um "andar mais alto", que chamamos de grau. O grau de um polinômio é o maior expoente de',
          },
          {
            id: 20,
            type: 'Math',
            text: 'x',
          },
          {
            id: 21,
            type: 'Texto',
            text: 'que aparece com um coeficiente não zero. Por exemplo, no polinômio',
          },
          {
            id: 22,
            type: 'Math',
            text: '3x^4 - 2x^2 + 5',
          },
          {
            id: 23,
            type: 'Texto',
            text: ', o termo com o maior expoente é',
          },
          {
            id: 24,
            type: 'Math',
            text: '3x^4',
          },
          {
            id: 25,
            type: 'Texto',
            text: ', então o grau é 4. Se um polinômio não tem nenhum termo com',
          },
          {
            id: 26,
            type: 'Math',
            text: 'x',
          },
          {
            id: 27,
            type: 'Texto',
            text: ', como',
          },
          {
            id: 28,
            type: 'Math',
            text: 'P(x) = 7',
          },
          {
            id: 29,
            type: 'Texto',
            text: ', dizemos que ele tem grau 0, pois é uma constante.',
          },
          {
            id: 30,
            type: 'Texto',
            text: 'Em geral, um polinômio pode ser escrito na forma:',
          },
          {
            id: 31,
            type: 'Math',
            text: 'P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0',
          },
          {
            id: 32,
            type: 'Texto',
            text: ', onde',
          },
          {
            id: 33,
            type: 'Math',
            text: 'a_n \\neq 0',
          },
          {
            id: 34,
            type: 'Texto',
            text: ', e o grau é',
          },
          {
            id: 35,
            type: 'Math',
            text: 'n',
          },
          {
            id: 36,
            type: 'Texto',
            text: '.',
          },
        ],
      },
      {
        id: 1,
        contentTitle:
          'Operações com Polinômios: Soma e Subtração - Unindo e Separando Ingredientes',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Agora que sabemos o que são polinômios, vamos aprender a "cozinhar" com eles, ou seja, realizar operações. Começaremos com a soma e a subtração, que são como juntar ou separar ingredientes de uma receita.',
          },
          {
            id: 1,
            type: 'Texto',
            text: 'Para somar dois polinômios, basta combinar os termos que têm o mesmo grau, ou seja, os mesmos expoentes de',
          },
          {
            id: 2,
            type: 'Math',
            text: 'x',
          },
          {
            id: 3,
            type: 'Texto',
            text: '. Por exemplo, se temos',
          },
          {
            id: 4,
            type: 'Math',
            text: '2x^2 + 3x - 4',
          },
          {
            id: 5,
            type: 'Texto',
            text: 'e',
          },
          {
            id: 6,
            type: 'Math',
            text: 'x^2 - 2x + 5',
          },
          {
            id: 7,
            type: 'Texto',
            text: ', somamos os termos de grau 2:',
          },
          {
            id: 8,
            type: 'Math',
            text: '2x^2 + x^2 = 3x^2',
          },
          {
            id: 9,
            type: 'Texto',
            text: ', os termos de grau 1:',
          },
          {
            id: 10,
            type: 'Math',
            text: '3x - 2x = x',
          },
          {
            id: 11,
            type: 'Texto',
            text: ', e os termos constantes:',
          },
          {
            id: 12,
            type: 'Math',
            text: '-4 + 5 = 1',
          },
          {
            id: 13,
            type: 'Texto',
            text: '. Assim, a soma é',
          },
          {
            id: 14,
            type: 'Math',
            text: '3x^2 + x + 1',
          },
          {
            id: 15,
            type: 'Texto',
            text: '.',
          },
          {
            id: 16,
            type: 'Math',
            text: '(2x^2 + 3x - 4) + (x^2 - 2x + 5) = 3x^2 + x + 1',
          },
          {
            id: 17,
            type: 'Texto',
            text: 'Na subtração, é como remover ingredientes. Primeiro, invertemos os sinais do polinômio que estamos subtraindo e, em seguida, combinamos os termos de mesmo grau, como na soma. Por exemplo, para subtrair',
          },
          {
            id: 18,
            type: 'Math',
            text: '2x^2 + 2x - 1',
          },
          {
            id: 19,
            type: 'Texto',
            text: 'de',
          },
          {
            id: 20,
            type: 'Math',
            text: '4x^2 - x + 3',
          },
          {
            id: 21,
            type: 'Texto',
            text: ', primeiro invertemos os sinais do polinômio subtraendo, obtendo',
          },
          {
            id: 22,
            type: 'Math',
            text: '-2x^2 - 2x + 1',
          },
          {
            id: 23,
            type: 'Texto',
            text: '. Agora, somamos esse resultado a',
          },
          {
            id: 24,
            type: 'Math',
            text: '4x^2 - x + 3',
          },
          {
            id: 25,
            type: 'Texto',
            text: '. Vamos passo a passo: combinamos os termos de grau 2:',
          },
          {
            id: 26,
            type: 'Math',
            text: '4x^2 - 2x^2 = 2x^2',
          },
          {
            id: 27,
            type: 'Texto',
            text: ', os termos de grau 1:',
          },
          {
            id: 28,
            type: 'Math',
            text: '-x - 2x = -3x',
          },
          {
            id: 29,
            type: 'Texto',
            text: ', e os termos constantes:',
          },
          {
            id: 30,
            type: 'Math',
            text: '3 + 1 = 4',
          },
          {
            id: 31,
            type: 'Texto',
            text: '. Assim, o resultado é',
          },
          {
            id: 32,
            type: 'Math',
            text: '2x^2 - 3x + 4',
          },
          {
            id: 33,
            type: 'Texto',
            text: '.',
          },
          {
            id: 34,
            type: 'Math',
            text: '(4x^2 - x + 3) - (2x^2 + 2x - 1) = 2x^2 - 3x + 4',
          },
          {
            id: 35,
            type: 'Texto',
            text: 'Lembre-se: na subtração, é crucial inverter todos os sinais do polinômio subtraendo. É como transformar "adicionar sal" em "remover sal" na receita.',
          },
        ],
      },
      {
        id: 2,
        contentTitle:
          'Operações com Polinômios: Multiplicação e Divisão - Misturando e Dividindo Ingredientes',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Agora, vamos mergulhar em duas operações incríveis com polinômios: a multiplicação e a divisão! Pense na multiplicação como misturar dois conjuntos de ingredientes para criar um prato novo e saboroso, enquanto a divisão é como separar esse prato em porções iguais para compartilhar. Vamos explorar cada uma dessas operações com detalhes, exemplos práticos e passos claros, como se estivéssemos cozinhando juntos na cozinha da matemática!',
          },
          {
            id: 1,
            type: 'Texto',
            text: '### Multiplicação de Polinômios: Misturando os Ingredientes',
          },
          {
            id: 2,
            type: 'Texto',
            text: 'Para multiplicar polinômios, usamos a propriedade distributiva, que é como garantir que cada ingrediente de um polinômio "interage" com todos os ingredientes do outro. É um processo de mistura cuidadosa! Vamos começar com um exemplo simples: multiplicar',
          },
          {
            id: 3,
            type: 'Math',
            text: '(x + 2)',
          },
          {
            id: 4,
            type: 'Texto',
            text: 'por',
          },
          {
            id: 5,
            type: 'Math',
            text: '(x - 3)',
          },
          {
            id: 6,
            type: 'Texto',
            text: '. Veja como fazemos isso passo a passo:',
          },
          {
            id: 7,
            type: 'Texto',
            text: '1. Multiplicamos cada termo do primeiro polinômio por cada termo do segundo:',
          },
          {
            id: 8,
            type: 'Math',
            text: 'x \\cdot x = x^2',
          },
          {
            id: 9,
            type: 'Texto',
            text: '(o primeiro termo com o primeiro),',
          },
          {
            id: 10,
            type: 'Math',
            text: 'x \\cdot (-3) = -3x',
          },
          {
            id: 11,
            type: 'Texto',
            text: '(o primeiro com o segundo),',
          },
          {
            id: 12,
            type: 'Math',
            text: '2 \\cdot x = 2x',
          },
          {
            id: 13,
            type: 'Texto',
            text: '(o segundo com o primeiro), e',
          },
          {
            id: 14,
            type: 'Math',
            text: '2 \\cdot (-3) = -6',
          },
          {
            id: 15,
            type: 'Texto',
            text: '(o segundo com o segundo).',
          },
          {
            id: 16,
            type: 'Texto',
            text: '2. Somamos todos esses "pedaços" da mistura:',
          },
          {
            id: 17,
            type: 'Math',
            text: 'x^2 + (-3x) + 2x + (-6)',
          },
          {
            id: 18,
            type: 'Texto',
            text: '3. Combinamos os termos semelhantes (os ingredientes que têm o mesmo "sabor", ou seja, o mesmo grau):',
          },
          {
            id: 19,
            type: 'Math',
            text: 'x^2 + (-3x + 2x) - 6 = x^2 - x - 6',
          },
          {
            id: 20,
            type: 'Texto',
            text: 'Portanto,',
          },
          {
            id: 21,
            type: 'Math',
            text: '(x + 2)(x - 3) = x^2 - x - 6',
          },
          {
            id: 22,
            type: 'Texto',
            text: '. Simples, né? Agora, vamos para um exemplo mais elaborado, misturando polinômios de graus diferentes, como',
          },
          {
            id: 23,
            type: 'Math',
            text: '(2x^2 + 3x - 1)',
          },
          {
            id: 24,
            type: 'Texto',
            text: 'e',
          },
          {
            id: 25,
            type: 'Math',
            text: '(x + 4)',
          },
          {
            id: 26,
            type: 'Texto',
            text: ':',
          },
          {
            id: 27,
            type: 'Texto',
            text: '1. Distribuímos cada termo de',
          },
          {
            id: 28,
            type: 'Math',
            text: '2x^2 + 3x - 1',
          },
          {
            id: 29,
            type: 'Texto',
            text: 'pelo',
          },
          {
            id: 30,
            type: 'Math',
            text: 'x',
          },
          {
            id: 31,
            type: 'Texto',
            text: ':',
          },
          {
            id: 32,
            type: 'Math',
            text: '2x^2 \\cdot x = 2x^3',
          },
          {
            id: 33,
            type: 'Texto',
            text: ',',
          },
          {
            id: 34,
            type: 'Math',
            text: '3x \\cdot x = 3x^2',
          },
          {
            id: 35,
            type: 'Texto',
            text: ',',
          },
          {
            id: 36,
            type: 'Math',
            text: '-1 \\cdot x = -x',
          },
          {
            id: 37,
            type: 'Texto',
            text: '2. Distribuímos cada termo de',
          },
          {
            id: 38,
            type: 'Math',
            text: '2x^2 + 3x - 1',
          },
          {
            id: 39,
            type: 'Texto',
            text: 'pelo',
          },
          {
            id: 40,
            type: 'Math',
            text: '4',
          },
          {
            id: 41,
            type: 'Texto',
            text: ':',
          },
          {
            id: 42,
            type: 'Math',
            text: '2x^2 \\cdot 4 = 8x^2',
          },
          {
            id: 43,
            type: 'Texto',
            text: ',',
          },
          {
            id: 44,
            type: 'Math',
            text: '3x \\cdot 4 = 12x',
          },
          {
            id: 45,
            type: 'Texto',
            text: ',',
          },
          {
            id: 46,
            type: 'Math',
            text: '-1 \\cdot 4 = -4',
          },
          {
            id: 47,
            type: 'Texto',
            text: '3. Somamos todos os termos:',
          },
          {
            id: 48,
            type: 'Math',
            text: '2x^3 + 3x^2 - x + 8x^2 + 12x - 4',
          },
          {
            id: 49,
            type: 'Texto',
            text: '4. Combinamos os termos semelhantes:',
          },
          {
            id: 50,
            type: 'Math',
            text: '2x^3 + (3x^2 + 8x^2) + (-x + 12x) - 4 = 2x^3 + 11x^2 + 11x - 4',
          },
          {
            id: 51,
            type: 'Texto',
            text: 'Portanto,',
          },
          {
            id: 52,
            type: 'Math',
            text: '(2x^2 + 3x - 1)(x + 4) = 2x^3 + 11x^2 + 11x - 4',
          },
          {
            id: 53,
            type: 'Texto',
            text: '. Viu como misturar esses ingredientes cria algo mais complexo e interessante?',
          },
          {
            id: 54,
            type: 'Texto',
            text: '### Divisão de Polinômios: Dividindo a Pizza Matemática',
          },
          {
            id: 55,
            type: 'Texto',
            text: 'A divisão de polinômios é como dividir uma pizza em fatias iguais: queremos saber quantas vezes um polinômio "cabe" em outro. Existem dois métodos principais: a divisão longa, que é mais geral, e a divisão sintética, que é mais rápida para divisores lineares. Vamos explorar ambos!',
          },
          {
            id: 56,
            type: 'Texto',
            text: '#### Divisão Longa',
          },
          {
            id: 57,
            type: 'Texto',
            text: 'Imagine que temos uma pizza grande,',
          },
          {
            id: 58,
            type: 'Math',
            text: 'x^3 - 2x^2 - 5x + 6',
          },
          {
            id: 59,
            type: 'Texto',
            text: ', e queremos dividi-la em porções de tamanho',
          },
          {
            id: 60,
            type: 'Math',
            text: 'x - 1',
          },
          {
            id: 61,
            type: 'Texto',
            text: '. Aqui está o passo a passo:',
          },
          {
            id: 62,
            type: 'Texto',
            text: '1. Dividimos o primeiro termo do dividendo',
          },
          {
            id: 63,
            type: 'Math',
            text: 'x^3',
          },
          {
            id: 64,
            type: 'Texto',
            text: 'pelo primeiro termo do divisor',
          },
          {
            id: 65,
            type: 'Math',
            text: 'x',
          },
          {
            id: 66,
            type: 'Texto',
            text: ', obtendo',
          },
          {
            id: 67,
            type: 'Math',
            text: 'x^2',
          },
          {
            id: 68,
            type: 'Texto',
            text: '.',
          },
          {
            id: 69,
            type: 'Texto',
            text: '2. Multiplicamos',
          },
          {
            id: 70,
            type: 'Math',
            text: 'x^2',
          },
          {
            id: 71,
            type: 'Texto',
            text: 'pelo divisor',
          },
          {
            id: 72,
            type: 'Math',
            text: 'x - 1',
          },
          {
            id: 73,
            type: 'Texto',
            text: ', resultando em',
          },
          {
            id: 74,
            type: 'Math',
            text: 'x^3 - x^2',
          },
          {
            id: 75,
            type: 'Texto',
            text: '.',
          },
          {
            id: 76,
            type: 'Texto',
            text: '3. Subtraímos esse resultado do dividendo original:',
          },
          {
            id: 77,
            type: 'Math',
            text: '(x^3 - 2x^2 - 5x + 6) - (x^3 - x^2) = -x^2 - 5x + 6',
          },
          {
            id: 78,
            type: 'Texto',
            text: '4. Repetimos o processo com o novo polinômio',
          },
          {
            id: 79,
            type: 'Math',
            text: '-x^2 - 5x + 6',
          },
          {
            id: 80,
            type: 'Texto',
            text: ': dividimos',
          },
          {
            id: 81,
            type: 'Math',
            text: '-x^2',
          },
          {
            id: 82,
            type: 'Texto',
            text: 'por',
          },
          {
            id: 83,
            type: 'Math',
            text: 'x',
          },
          {
            id: 84,
            type: 'Texto',
            text: ', obtendo',
          },
          {
            id: 85,
            type: 'Math',
            text: '-x',
          },
          {
            id: 86,
            type: 'Texto',
            text: '. Multiplicamos',
          },
          {
            id: 87,
            type: 'Math',
            text: '-x',
          },
          {
            id: 88,
            type: 'Texto',
            text: 'por',
          },
          {
            id: 89,
            type: 'Math',
            text: 'x - 1',
          },
          {
            id: 90,
            type: 'Texto',
            text: ', obtendo',
          },
          {
            id: 91,
            type: 'Math',
            text: '-x^2 + x',
          },
          {
            id: 92,
            type: 'Texto',
            text: ', e subtraímos:',
          },
          {
            id: 93,
            type: 'Math',
            text: '(-x^2 - 5x + 6) - (-x^2 + x) = -6x + 6',
          },
          {
            id: 94,
            type: 'Texto',
            text: '5. Continuamos: dividimos',
          },
          {
            id: 95,
            type: 'Math',
            text: '-6x',
          },
          {
            id: 96,
            type: 'Texto',
            text: 'por',
          },
          {
            id: 97,
            type: 'Math',
            text: 'x',
          },
          {
            id: 98,
            type: 'Texto',
            text: ', obtendo',
          },
          {
            id: 99,
            type: 'Math',
            text: '-6',
          },
          {
            id: 100,
            type: 'Texto',
            text: '. Multiplicamos',
          },
          {
            id: 101,
            type: 'Math',
            text: '-6',
          },
          {
            id: 102,
            type: 'Texto',
            text: 'por',
          },
          {
            id: 103,
            type: 'Math',
            text: 'x - 1',
          },
          {
            id: 104,
            type: 'Texto',
            text: ', obtendo',
          },
          {
            id: 105,
            type: 'Math',
            text: '-6x + 6',
          },
          {
            id: 106,
            type: 'Texto',
            text: ', e subtraímos:',
          },
          {
            id: 107,
            type: 'Math',
            text: '(-6x + 6) - (-6x + 6) = 0',
          },
          {
            id: 108,
            type: 'Texto',
            text: '6. Como o resto é 0, a divisão está completa. O quociente é',
          },
          {
            id: 109,
            type: 'Math',
            text: 'x^2 - x - 6',
          },
          {
            id: 110,
            type: 'Texto',
            text: ', então',
          },
          {
            id: 111,
            type: 'Math',
            text: '\\frac{x^3 - 2x^2 - 5x + 6}{x - 1} = x^2 - x - 6',
          },
          {
            id: 112,
            type: 'Texto',
            text: '.',
          },
          {
            id: 113,
            type: 'Texto',
            text: '#### Divisão Sintética: A Faca Afiada para Dividir a Pizza',
          },
          {
            id: 114,
            type: 'Texto',
            text: 'Imagine que você tem uma pizza gigante e precisa dividi-la em porções iguais de forma rápida e prática. Na matemática, a divisão sintética é essa ferramenta mágica! Ela é uma técnica super eficiente para dividir polinômios por divisores lineares, ou seja, expressões como "x menos um número". Por exemplo, um divisor como "x menos 1" é perfeito para essa técnica. Vamos aprender como ela funciona usando um exemplo delicioso: dividir uma pizza polinomial por uma porção específica. Pegue sua faca afiada e venha comigo!',
          },
          {
            id: 115,
            type: 'Texto',
            text: '**Passo 1: Conhecer os Ingredientes da Pizza**',
          },
          {
            id: 116,
            type: 'Texto',
            text: 'Antes de cortar a pizza, precisamos saber do que ela é feita. No nosso exemplo, a pizza é um polinômio com vários "sabores" (termos). Cada termo tem um número na frente, chamado coeficiente. Anotamos esses números em ordem, do maior para o menor grau. Além disso, a porção que vamos usar para dividir é um divisor linear, algo como "x menos um número". Esse "número" é super importante, porque ele vai guiar nosso corte. Vamos escrever esses ingredientes na próxima etapa!',
          },
          {
            id: 117,
            type: 'Texto',
            text: '**Passo 2: Organizar a Tabela de Corte**',
          },
          {
            id: 118,
            type: 'Texto',
            text: 'Agora, vamos arrumar a mesa para cortar a pizza. Pegamos os coeficientes do polinômio e os colocamos em uma linha, como se fossem pedaços da pizza alinhados. À esquerda, colocamos o número especial do divisor, que é como o "chef" que vai liderar o corte. Essa tabela é o nosso mapa para dividir tudo direitinho. Veja como ela fica:',
          },
          {
            id: 119,
            type: 'Math',
            text: '\\begin{array}{c|cccc} 1 & 1 & -2 & -5 & 6 \\end{array}',
          },
          {
            id: 120,
            type: 'Texto',
            text: '**Passo 3: Começar o Corte Trazendo o Primeiro Pedaço**',
          },
          {
            id: 121,
            type: 'Texto',
            text: 'Para começar, pegamos o primeiro coeficiente da nossa pizza, que é como o primeiro pedaço da borda. Colocamos ele lá embaixo, exatamente como está, sem mudar nada. É como dizer: "Esse pedaço já está pronto para a próxima etapa!" Veja como fica:',
          },
          {
            id: 122,
            type: 'Math',
            text: '\\begin{array}{c|cccc} 1 & 1 & -2 & -5 & 6 \\\\ & 1 & & & \\end{array}',
          },
          {
            id: 123,
            type: 'Texto',
            text: '**Passo 4: Multiplicar e Juntar os Pedaços**',
          },
          {
            id: 124,
            type: 'Texto',
            text: 'Agora vem a parte divertida! Pegamos o pedaço que trouxemos para baixo e multiplicamos pelo número do "chef" (o número do divisor). O resultado vai para baixo do próximo coeficiente. Depois, somamos o coeficiente de cima com esse novo número, como se estivéssemos misturando dois sabores da pizza. O resultado dessa soma vai para baixo, formando um novo pedaço. Vamos ver isso na prática:',
          },
          {
            id: 125,
            type: 'Math',
            text: '\\begin{array}{c|cccc} 1 & 1 & -2 & -5 & 6 \\\\ & 1 & 1 & & \\end{array}',
          },
          {
            id: 126,
            type: 'Texto',
            text: 'Depois de multiplicar, somamos os números na coluna para criar o próximo pedaço da nossa pizza dividida. Esse novo número é como um novo sabor que descobrimos ao cortar! Veja o resultado:',
          },
          {
            id: 127,
            type: 'Math',
            text: '\\begin{array}{c|cccc} 1 & 1 & -2 & -5 & 6 \\\\ & 1 & 1 & & \\\\ & & -1 & & \\end{array}',
          },
          {
            id: 128,
            type: 'Texto',
            text: '**Passo 5: Repetir o Processo de Corte**',
          },
          {
            id: 129,
            type: 'Texto',
            text: 'Não paramos por aí! Pegamos o novo pedaço que criamos, multiplicamos pelo número do "chef" novamente, e colocamos o resultado sob o próximo coeficiente. Depois, somamos de novo, criando outro pedaço. É como cortar a pizza fatia por fatia, sempre seguindo o mesmo ritmo. Vamos fazer isso mais uma vez:',
          },
          {
            id: 130,
            type: 'Math',
            text: '\\begin{array}{c|cccc} 1 & 1 & -2 & -5 & 6 \\\\ & 1 & 1 & -1 & \\\\ & & -1 & & \\end{array}',
          },
          {
            id: 131,
            type: 'Texto',
            text: 'Somamos a coluna para obter o próximo pedaço, continuando a dividir nossa pizza com cuidado. O novo número aparece assim:',
          },
          {
            id: 132,
            type: 'Math',
            text: '\\begin{array}{c|cccc} 1 & 1 & -2 & -5 & 6 \\\\ & 1 & 1 & -1 & \\\\ & & -1 & -6 & \\end{array}',
          },
          {
            id: 133,
            type: 'Texto',
            text: '**Passo 6: Finalizar o Corte da Pizza**',
          },
          {
            id: 134,
            type: 'Texto',
            text: 'Chegamos ao grande final do nosso corte! Agora, pegamos o último pedaço que formamos na linha de baixo e multiplicamos pelo número do "chef", que é quem guia nosso corte desde o começo. Esse número novo é como o último tempero que adicionamos à nossa pizza. Colocamos ele bem abaixo do último coeficiente da pizza original, alinhando tudo direitinho. Depois, fazemos uma soma final entre esse número e o coeficiente de cima, como se estivéssemos verificando se todos os pedaços da pizza foram divididos. Essa soma é super especial, porque ela nos diz se sobrou algum pedacinho da pizza ou se conseguimos cortar tudo em porções perfeitas. Vamos ver como fica esse último corte:',
          },
          {
            id: 135,
            type: 'Math',
            text: '\\begin{array}{c|cccc} 1 & 1 & -2 & -5 & 6 \\\\ & 1 & 1 & -1 & -6 \\\\ & & -1 & -6 & 0 \\end{array}',
          },
          {
            id: 136,
            type: 'Texto',
            text: 'Olha só que legal: a última soma nos deu o resto da nossa pizza! Se esse número for zero, é como se tivéssemos dividido a pizza em porções exatas, sem deixar nenhum pedacinho sobrando. No nosso caso, deu zero, então a divisão foi um sucesso total, e todas as fatias estão perfeitas!',
          },
          {
            id: 136.1,
            type: 'Texto',
            text: '**E se o Corte Não For Perfeito?** Às vezes, o resto não é zero, e isso significa que sobrou um pedacinho da pizza que não coube nas porções certinhas. Esse pedacinho é o resto, e ele ainda é útil, porque nos mostra que a divisão não foi exata, mas o quociente que conseguimos já é uma grande conquista. Outra coisa importante: se a sua pizza tiver algum "sabor" faltando, como um termo que não aparece no polinômio, é só usar o número zero no lugar dele na tabela. Por exemplo, se não tiver um pedaço de grau 2, colocamos um zero para manter tudo organizado. Esses truques garantem que o corte sempre funcione direitinho!',
          },
          {
            id: 137,
            type: 'Texto',
            text: '**Passo 7: Entender o Que Conseguimos**',
          },
          {
            id: 138,
            type: 'Texto',
            text: 'Agora, vamos saborear o resultado do nosso corte! Olhamos para os números na linha de baixo da nossa tabela, exceto o último: 1, -1 e -6. Esses números são os "sabores" do nosso quociente, ou seja, o resultado principal da divisão. Eles formam um novo polinômio de grau menor, um polinômio quadrático (de grau 2), porque dividimos uma pizza de grau 3 por uma porção de grau 1. O último número, que é 0, é o resto, e ele nos diz que não sobrou nenhum pedacinho da pizza. Isso significa que dividimos tudo direitinho!',
          },
          {
            id: 139,
            type: 'Texto',
            text: 'Portanto, cortamos nossa pizza polinomial em porções perfeitas! O quociente é um novo polinômio com os coeficientes 1, -1 e -6, e o resto é zero, mostrando que não sobrou nada. Isso prova como a divisão sintética é rápida e eficiente, como uma faca afiada que corta a pizza em fatias exatas sem esforço!',
          },
          {
            id: 139.1,
            type: 'Math',
            text: '\\frac{x^3 - 2x^2 - 5x + 6}{x - 1} = x^2 - x - 6',
          },
          {
            id: 140,
            type: 'Texto',
            text: '**Por Que a Divisão Sintética é Tão Legal?**',
          },
          {
            id: 141,
            type: 'Texto',
            text: 'A divisão sintética é como um atalho na cozinha da matemática. Em vez de escrever todas as variáveis e fazer contas longas, ela foca apenas nos números (coeficientes) e simplifica tudo. É perfeita para divisores lineares, porque transforma uma tarefa complicada em algo rápido e divertido. Além disso, ela ajuda a encontrar raízes de polinômios, como se fosse uma chave para desvendar segredos da nossa pizza! Com prática, você vai cortar pizzas polinomiais em segundos.',
          },
          {
            id: 142,
            type: 'Texto',
            text: '**Conclusão: Seja o Mestre da Faca Afiada**',
          },
          {
            id: 143,
            type: 'Texto',
            text: 'A divisão sintética é a sua melhor amiga quando o divisor é linear. Ela é rápida, prática e faz você sentir como um chef matemático cortando pizzas gigantes sem esforço. Pratique com diferentes polinômios, experimente outros divisores lineares, e logo você estará dividindo qualquer pizza polinomial como um profissional. Então, pegue sua faca afiada e mostre quem manda na cozinha da matemática!',
          },
        ],
      },
      {
        id: 3,
        contentTitle:
          'Fatoração de Polinômios - Desmontando a Receita em Seus Ingredientes Originais',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Fatorar um polinômio é como ser um chef detetive: você pega o "prato final" – o polinômio – e descobre quais "ingredientes" foram usados para criá-lo! É o processo inverso da multiplicação: em vez de juntar os termos, nós os separamos, revelando os fatores que, quando multiplicados, recriam a expressão original. Vamos explorar isso juntos, com ferramentas matemáticas que são como utensílios de cozinha – cada uma perfeita para um tipo de "receita" polinomial!',
          },
          {
            id: 1,
            type: 'Texto',
            text: 'Vamos aprender os principais métodos de fatoração de um jeito simples e divertido, com exemplos práticos e analogias que vão fazer tudo clicar na sua cabeça. Preparado para virar um mestre na arte de desmontar polinômios? Então, vamos lá!',
          },
          {
            id: 2,
            type: 'Texto',
            text: '### 1. Fator Comum em Evidência: O Ingrediente que Une Tudo',
          },
          {
            id: 3,
            type: 'Texto',
            text: 'Esse é o método mais básico e direto, como tirar o sal de uma receita que está em todos os pratos. Se todos os termos do polinômio têm algo em comum – um número, uma variável ou ambos –, podemos "puxar" esse fator para fora e simplificar a expressão.',
          },
          {
            id: 4,
            type: 'Texto',
            text: '**Exemplo:** Vamos fatorar',
          },
          {
            id: 5,
            type: 'Math',
            text: '6x^3 + 9x^2',
          },
          {
            id: 6,
            type: 'Texto',
            text: '. Aqui está o passo a passo:',
          },
          {
            id: 7,
            type: 'Texto',
            text: '- Olhe para os termos: ',
          },
          {
            id: 8,
            type: 'Math',
            text: '6x^3',
          },
          {
            id: 9,
            type: 'Texto',
            text: ' e ',
          },
          {
            id: 10,
            type: 'Math',
            text: '9x^2',
          },
          {
            id: 11,
            type: 'Texto',
            text: '. Pergunte: qual é o maior fator que ambos compartilham?',
          },
          {
            id: 12,
            type: 'Texto',
            text: '- Nos números (6 e 9), o maior divisor comum é 3. Nas variáveis (',
          },
          {
            id: 13,
            type: 'Math',
            text: 'x^3',
          },
          {
            id: 14,
            type: 'Texto',
            text: ' e ',
          },
          {
            id: 15,
            type: 'Math',
            text: 'x^2',
          },
          {
            id: 16,
            type: 'Texto',
            text: '), o menor expoente é ',
          },
          {
            id: 17,
            type: 'Math',
            text: 'x^2',
          },
          {
            id: 18,
            type: 'Texto',
            text: '. Então, o fator comum é ',
          },
          {
            id: 19,
            type: 'Math',
            text: '3x^2',
          },
          {
            id: 20,
            type: 'Texto',
            text: '.',
          },
          {
            id: 21,
            type: 'Texto',
            text: '- "Puxamos" ',
          },
          {
            id: 22,
            type: 'Math',
            text: '3x^2',
          },
          {
            id: 23,
            type: 'Texto',
            text: ' para fora e vemos o que sobra: ',
          },
          {
            id: 24,
            type: 'Math',
            text: '6x^3 \\div 3x^2 = 2x',
          },
          {
            id: 25,
            type: 'Texto',
            text: ' e ',
          },
          {
            id: 26,
            type: 'Math',
            text: '9x^2 \\div 3x^2 = 3',
          },
          {
            id: 27,
            type: 'Texto',
            text: '.',
          },
          {
            id: 28,
            type: 'Texto',
            text: '- Escrevemos o resultado: ',
          },
          {
            id: 29,
            type: 'Math',
            text: '3x^2 (2x + 3)',
          },
          {
            id: 30,
            type: 'Texto',
            text: '.',
          },
          {
            id: 31,
            type: 'Texto',
            text: 'É como perceber que todos os pratos de um jantar têm a mesma base e separá-la para simplificar o trabalho. Sempre comece procurando um fator comum – é a técnica mais usada!',
          },
          {
            id: 32,
            type: 'Texto',
            text: '### 2. Agrupamento: Organizando a Bagunça',
          },
          {
            id: 33,
            type: 'Texto',
            text: 'Quando o polinômio tem vários termos (geralmente 4 ou mais), podemos agrupá-los em pares, como organizar uma lista de compras em categorias. Depois, extraímos os fatores comuns de cada grupo e vemos se algo maior aparece.',
          },
          {
            id: 34,
            type: 'Texto',
            text: '**Exemplo:** Vamos fatorar ',
          },
          {
            id: 35,
            type: 'Math',
            text: 'x^3 + 3x^2 + 2x + 6',
          },
          {
            id: 36,
            type: 'Texto',
            text: '. Passo a passo:',
          },
          {
            id: 37,
            type: 'Texto',
            text: '- Dividimos em dois grupos: ',
          },
          {
            id: 38,
            type: 'Math',
            text: '(x^3 + 3x^2) + (2x + 6)',
          },
          {
            id: 39,
            type: 'Texto',
            text: '.',
          },
          {
            id: 40,
            type: 'Texto',
            text: '- No primeiro grupo (',
          },
          {
            id: 41,
            type: 'Math',
            text: 'x^3 + 3x^2',
          },
          {
            id: 42,
            type: 'Texto',
            text: '), o fator comum é ',
          },
          {
            id: 43,
            type: 'Math',
            text: 'x^2',
          },
          {
            id: 44,
            type: 'Texto',
            text: ', então fica ',
          },
          {
            id: 45,
            type: 'Math',
            text: 'x^2 (x + 3)',
          },
          {
            id: 46,
            type: 'Texto',
            text: '.',
          },
          {
            id: 47,
            type: 'Texto',
            text: '- No segundo grupo (',
          },
          {
            id: 48,
            type: 'Math',
            text: '2x + 6',
          },
          {
            id: 49,
            type: 'Texto',
            text: '), o fator comum é 2, então fica ',
          },
          {
            id: 50,
            type: 'Math',
            text: '2 (x + 3)',
          },
          {
            id: 51,
            type: 'Texto',
            text: '.',
          },
          {
            id: 52,
            type: 'Texto',
            text: '- Agora, veja a mágica: ambos têm ',
          },
          {
            id: 53,
            type: 'Math',
            text: '(x + 3)',
          },
          {
            id: 54,
            type: 'Texto',
            text: ' em comum! Então, fatoramos mais uma vez: ',
          },
          {
            id: 55,
            type: 'Math',
            text: 'x^2 (x + 3) + 2 (x + 3) = (x^2 + 2)(x + 3)',
          },
          {
            id: 56,
            type: 'Texto',
            text: '.',
          },
          {
            id: 57,
            type: 'Texto',
            text: 'É como organizar itens em "frutas" e "vegetais" e perceber que ambos são "orgânicos". Esse método é ótimo para polinômios mais longos!',
          },
          {
            id: 58,
            type: 'Texto',
            text: '### 3. Trinômio Quadrado Perfeito: O Bolo Perfeito',
          },
          {
            id: 59,
            type: 'Texto',
            text: 'Alguns trinômios são especiais: eles são quadrados perfeitos! Isso significa que podem ser escritos como ',
          },
          {
            id: 60,
            type: 'Math',
            text: '(a + b)^2',
          },
          {
            id: 61,
            type: 'Texto',
            text: ', que, quando expandido, vira ',
          },
          {
            id: 62,
            type: 'Math',
            text: 'a^2 + 2ab + b^2',
          },
          {
            id: 63,
            type: 'Texto',
            text: '. É como reconhecer uma receita de bolo que você já conhece de cor.',
          },
          {
            id: 64,
            type: 'Texto',
            text: '**Exemplo:** Vamos fatorar ',
          },
          {
            id: 65,
            type: 'Math',
            text: 'x^2 + 10x + 25',
          },
          {
            id: 66,
            type: 'Texto',
            text: ':',
          },
          {
            id: 67,
            type: 'Texto',
            text: '- O primeiro termo, ',
          },
          {
            id: 68,
            type: 'Math',
            text: 'x^2',
          },
          {
            id: 69,
            type: 'Texto',
            text: ', é ',
          },
          {
            id: 70,
            type: 'Math',
            text: '(x)^2',
          },
          {
            id: 71,
            type: 'Texto',
            text: '. O último, ',
          },
          {
            id: 72,
            type: 'Math',
            text: '25',
          },
          {
            id: 73,
            type: 'Texto',
            text: ', é ',
          },
          {
            id: 74,
            type: 'Math',
            text: '5^2',
          },
          {
            id: 75,
            type: 'Texto',
            text: '.',
          },
          {
            id: 76,
            type: 'Texto',
            text: '- O termo do meio deve ser ',
          },
          {
            id: 77,
            type: 'Math',
            text: '2 \\cdot a \\cdot b',
          },
          {
            id: 78,
            type: 'Texto',
            text: '. Aqui, ',
          },
          {
            id: 79,
            type: 'Math',
            text: '2 \\cdot x \\cdot 5 = 10x',
          },
          {
            id: 80,
            type: 'Texto',
            text: ', que é exatamente o que temos!',
          },
          {
            id: 81,
            type: 'Texto',
            text: '- Então, o trinômio é ',
          },
          {
            id: 82,
            type: 'Math',
            text: '(x + 5)^2',
          },
          {
            id: 83,
            type: 'Texto',
            text: '.',
          },
          {
            id: 84,
            type: 'Texto',
            text: 'Dica: sempre verifique o termo do meio para confirmar se é um quadrado perfeito. Se não for ',
          },
          {
            id: 85,
            type: 'Math',
            text: '2ab',
          },
          {
            id: 86,
            type: 'Texto',
            text: ', esse método não funciona.',
          },
          {
            id: 87,
            type: 'Texto',
            text: '### 4. Diferença de Dois Quadrados: O Sanduíche Simétrico',
          },
          {
            id: 88,
            type: 'Texto',
            text: 'Quando temos dois termos que são quadrados perfeitos separados por um sinal de menos, usamos a identidade ',
          },
          {
            id: 89,
            type: 'Math',
            text: 'a^2 - b^2 = (a - b)(a + b)',
          },
          {
            id: 90,
            type: 'Texto',
            text: '. É como um sanduíche com duas fatias iguais, mas uma "positiva" e outra "negativa".',
          },
          {
            id: 91,
            type: 'Texto',
            text: '**Exemplo:** Vamos fatorar ',
          },
          {
            id: 92,
            type: 'Math',
            text: '4x^2 - 9',
          },
          {
            id: 93,
            type: 'Texto',
            text: ':',
          },
          {
            id: 94,
            type: 'Texto',
            text: '- Reconhecemos que ',
          },
          {
            id: 95,
            type: 'Math',
            text: '4x^2 = (2x)^2',
          },
          {
            id: 96,
            type: 'Texto',
            text: ' e ',
          },
          {
            id: 97,
            type: 'Math',
            text: '9 = 3^2',
          },
          {
            id: 98,
            type: 'Texto',
            text: '.',
          },
          {
            id: 99,
            type: 'Texto',
            text: '- Aplicamos a fórmula: ',
          },
          {
            id: 100,
            type: 'Math',
            text: '(2x - 3)(2x + 3)',
          },
          {
            id: 101,
            type: 'Texto',
            text: '.',
          },
          {
            id: 102,
            type: 'Texto',
            text: 'Simples, né? Essa técnica é um atalho incrível para expressões com diferença de quadrados!',
          },
          {
            id: 103,
            type: 'Texto',
            text: '### 5. Soma de Dois Cubos: Uma Receita Exótica',
          },
          {
            id: 104,
            type: 'Texto',
            text: 'Quando temos a soma de dois cubos, como ',
          },
          {
            id: 105,
            type: 'Math',
            text: 'a^3 + b^3',
          },
          {
            id: 106,
            type: 'Texto',
            text: ', usamos a fórmula ',
          },
          {
            id: 107,
            type: 'Math',
            text: '(a + b)(a^2 - ab + b^2)',
          },
          {
            id: 108,
            type: 'Texto',
            text: '. É uma combinação diferente, mas poderosa!',
          },
          {
            id: 109,
            type: 'Texto',
            text: '**Exemplo:** Vamos fatorar ',
          },
          {
            id: 110,
            type: 'Math',
            text: 'x^3 + 27',
          },
          {
            id: 111,
            type: 'Texto',
            text: ':',
          },
          {
            id: 112,
            type: 'Texto',
            text: '- Identificamos: ',
          },
          {
            id: 113,
            type: 'Math',
            text: 'x^3 = (x)^3',
          },
          {
            id: 114,
            type: 'Texto',
            text: ' e ',
          },
          {
            id: 115,
            type: 'Math',
            text: '27 = 3^3',
          },
          {
            id: 116,
            type: 'Texto',
            text: '.',
          },
          {
            id: 117,
            type: 'Texto',
            text: '- Aplicamos a fórmula: ',
          },
          {
            id: 118,
            type: 'Math',
            text: '(x + 3)(x^2 - x \\cdot 3 + 3^2) = (x + 3)(x^2 - 3x + 9)',
          },
          {
            id: 119,
            type: 'Texto',
            text: '.',
          },
          {
            id: 120,
            type: 'Texto',
            text: 'Parece complicado, mas é só seguir o padrão. Esse método é ótimo para polinômios cúbicos!',
          },
          {
            id: 121,
            type: 'Texto',
            text: '### 6. Diferença de Dois Cubos: O Par da Soma',
          },
          {
            id: 122,
            type: 'Texto',
            text: 'Para a diferença de dois cubos, como ',
          },
          {
            id: 123,
            type: 'Math',
            text: 'a^3 - b^3',
          },
          {
            id: 124,
            type: 'Texto',
            text: ', usamos ',
          },
          {
            id: 125,
            type: 'Math',
            text: '(a - b)(a^2 + ab + b^2)',
          },
          {
            id: 126,
            type: 'Texto',
            text: '. É o complemento perfeito da soma de cubos.',
          },
          {
            id: 127,
            type: 'Texto',
            text: '**Exemplo:** Vamos fatorar ',
          },
          {
            id: 128,
            type: 'Math',
            text: '8x^3 - 1',
          },
          {
            id: 129,
            type: 'Texto',
            text: ':',
          },
          {
            id: 130,
            type: 'Texto',
            text: '- Reconhecemos: ',
          },
          {
            id: 131,
            type: 'Math',
            text: '8x^3 = (2x)^3',
          },
          {
            id: 132,
            type: 'Texto',
            text: ' e ',
          },
          {
            id: 133,
            type: 'Math',
            text: '1 = 1^3',
          },
          {
            id: 134,
            type: 'Texto',
            text: '.',
          },
          {
            id: 135,
            type: 'Texto',
            text: '- Aplicamos a fórmula: ',
          },
          {
            id: 136,
            type: 'Math',
            text: '(2x - 1)((2x)^2 + (2x)(1) + 1^2) = (2x - 1)(4x^2 + 2x + 1)',
          },
          {
            id: 137,
            type: 'Texto',
            text: '.',
          },
          {
            id: 138,
            type: 'Texto',
            text: 'Com esse par de fórmulas (soma e diferença de cubos), você está pronto para qualquer polinômio cúbico que aparecer!',
          },
          {
            id: 139,
            type: 'Texto',
            text: '### Conclusão: A Chave para o Sucesso',
          },
          {
            id: 140,
            type: 'Texto',
            text: 'Cada técnica de fatoração é como uma chave que abre um tipo diferente de "cadeado" matemático. Com prática, você vai olhar para um polinômio e logo saber qual método usar. A fatoração não é só um truque – ela simplifica expressões, resolve equações e revela a estrutura por trás dos números. Então, pegue esses exemplos, pratique bastante e divirta-se desmontando essas "receitas" algébricas!',
          },
        ],
      },
    ],
    questionContent: [
      {
        id: 0,
        contentTitle: 'Identificando o Grau',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Determine o grau do polinômio abaixo:',
          },
          {
            id: 1,
            type: 'Math',
            text: 'P(x) = 7x^5 - 4x^3 + 2x - 8',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Texto',
            isAlternativaCerta: true,
            text: '5',
          },
          {
            id: 1,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '3',
          },
          {
            id: 2,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '4',
          },
          {
            id: 3,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '2',
          },
        ],
      },
      {
        id: 1,
        contentTitle: 'Soma de Polinômios',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Calcule a soma dos polinômios abaixo:',
          },
          {
            id: 1,
            type: 'Math',
            text: '(3x^3 + 2x^2 - 5) + (2x^3 - x + 4)',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: '5x^3 + 2x^2 - x - 1',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: '5x^3 + 2x^2 + x - 1',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: '3x^3 + 2x^2 - x - 1',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: '5x^3 - 2x^2 - x - 1',
          },
        ],
      },
      {
        id: 2,
        contentTitle: 'Subtração de Polinômios',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Calcule a subtração dos polinômios abaixo:',
          },
          {
            id: 1,
            type: 'Math',
            text: '(5x^2 - 3x + 2) - (2x^2 + 4x - 1)',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: '3x^2 - 7x + 3',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: '3x^2 + 7x + 3',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: '3x^2 - 7x - 3',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: '5x^2 - 7x + 3',
          },
        ],
      },
      {
        id: 3,
        contentTitle: 'Multiplicação de Polinômios',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Calcule o produto dos polinômios abaixo:',
          },
          {
            id: 1,
            type: 'Math',
            text: '(2x - 1)(x + 3)',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: '2x^2 + 5x - 3',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: '2x^2 - 5x - 3',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: '2x^2 + 5x + 3',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: '2x^2 - 5x + 3',
          },
        ],
      },
      {
        id: 4,
        contentTitle: 'Divisão de Polinômios',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Divida o polinômio \( P(x) \) por \( D(x) \) e encontre o quociente:',
          },
          {
            id: 1,
            type: 'Math',
            text: 'P(x) = x^3 - 3x^2 + 2x - 6, \\quad D(x) = x - 2',
          },
        ],
        alternatives: [
          { id: 0, type: 'Math', isAlternativaCerta: true, text: 'x^2 - x - \\frac{6}{x - 2}' },
          { id: 1, type: 'Math', isAlternativaCerta: false, text: 'x^2 - x + 1' },
          { id: 2, type: 'Math', isAlternativaCerta: false, text: 'x^2 - x' },
          { id: 3, type: 'Math', isAlternativaCerta: false, text: 'x^2 - x - \\frac{4}{x - 2}' },
        ],
      },
      {
        id: 5,
        contentTitle: 'Fatoração por Fator Comum',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Fatore o polinômio abaixo usando o método do fator comum em evidência:',
          },
          {
            id: 1,
            type: 'Math',
            text: '4x^4 - 8x^3 + 12x^2',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: '4x^2 (x^2 - 2x + 3)',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: '4x (x^3 - 2x^2 + 3x)',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: '2x^2 (2x^2 - 4x + 6)',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: '4x^2 (x - 2x + 3)',
          },
        ],
      },
      {
        id: 6,
        contentTitle: 'Fatoração por Agrupamento',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Fatore o polinômio abaixo usando o método de agrupamento:',
          },
          {
            id: 1,
            type: 'Math',
            text: '2x^3 + 6x^2 + x + 3',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: '(2x^2 + 1)(x + 3)',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(2x^2 - 1)(x + 3)',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(2x^2 + 1)(x - 3)',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(x^2 + 1)(2x + 3)',
          },
        ],
      },
      {
        id: 7,
        contentTitle: 'Fatoração de Trinômio Quadrado Perfeito',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Fatore o trinômio quadrado perfeito abaixo:',
          },
          {
            id: 1,
            type: 'Math',
            text: '9x^2 + 12x + 4',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: '(3x + 2)^2',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(3x - 2)^2',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(3x + 4)^2',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(9x + 2)^2',
          },
        ],
      },
      {
        id: 8,
        contentTitle: 'Fatoração por Diferença de Dois Quadrados',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Fatore o polinômio abaixo usando a diferença de dois quadrados:',
          },
          {
            id: 1,
            type: 'Math',
            text: '16x^2 - 25',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: '(4x - 5)(4x + 5)',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(4x - 5)^2',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(2x - 5)(2x + 5)',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(4x + 5)^2',
          },
        ],
      },
      {
        id: 9,
        contentTitle: 'Fatoração por Soma de Dois Cubos',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Fatore o polinômio abaixo usando a soma de dois cubos:',
          },
          {
            id: 1,
            type: 'Math',
            text: 'x^3 + 64',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: '(x + 4)(x^2 - 4x + 16)',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(x - 4)(x^2 + 4x + 16)',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(x + 4)(x^2 + 4x + 16)',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(x + 4)^2',
          },
        ],
      },
      {
        id: 10,
        contentTitle: 'Fatoração por Diferença de Dois Cubos',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Fatore o polinômio abaixo usando a diferença de dois cubos:',
          },
          {
            id: 1,
            type: 'Math',
            text: '27x^3 - 8',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: '(3x - 2)(9x^2 + 6x + 4)',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(3x + 2)(9x^2 - 6x + 4)',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(3x - 2)(9x^2 - 6x + 4)',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: '(3x - 2)^2',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Derivadas',
    achievementSlugs: [''],
    teoricalContent: [
      {
        id: 0,
        contentTitle: 'Guia Completo de Derivadas: Teoria e Exemplos',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Derivadas são uma das ferramentas mais importantes do cálculo. A seguir, você verá as principais regras para resolvê-las, com explicações detalhadas e exemplos resolvidos.',
          },
        ],
      },
      {
        id: 1,
        contentTitle: '1. DERIVADA SIMPLES',
        paragraphs: [
          {
            id: 1,
            type: 'Texto',
            text: '1. Derivada Simples: Utilizamos a regra da potência, que diz que a derivada de xⁿ é n·xⁿ⁻¹. Cada termo da função é derivado individualmente.',
          },
          {
            id: 2,
            type: 'Math',
            text: 'f(x) = 5x^3 - 2x^2 + 4x - 7',
          },
          {
            id: 3,
            type: 'Math',
            text: "f'(x) = 15x^2 - 4x + 4",
          },
          {
            id: 4,
            type: 'Texto',
            text: 'Exemplo adicional: f(x) = x^4 - 3x^2 + 2x → derivamos cada termo.',
          },
          {
            id: 5,
            type: 'Math',
            text: "f'(x) = 4x^3 - 6x + 2",
          },
        ],
      },
      {
        id: 2,
        contentTitle: '2. DERIVADA DO PRODUTO',
        paragraphs: [
          {
            id: 6,
            type: 'Texto',
            text: "2. Derivada do Produto: Quando temos duas funções multiplicando, usamos a fórmula (fg)' = f'g + fg'.",
          },
          {
            id: 7,
            type: 'Math',
            text: "(fg)' = f'g + fg'",
          },
          {
            id: 8,
            type: 'Texto',
            text: 'Exemplo: f(x) = (2x)(x^2 + 1). Derivamos 2x (que dá 2) e x²+1 (que dá 2x), aplicando a fórmula.',
          },
          {
            id: 9,
            type: 'Math',
            text: "f'(x) = 2(x^2 + 1) + 2x(2x) = 2x^2 + 2 + 4x^2 = 6x^2 + 2",
          },
          {
            id: 10,
            type: 'Texto',
            text: 'Outro exemplo: f(x) = (x^2)(ln x)',
          },
          {
            id: 11,
            type: 'Math',
            text: "f'(x) = 2x \\ln x + x^2 \\cdot \\frac{1}{x} = 2x\\ln x + x",
          },
        ],
      },
      {
        id: 3,
        contentTitle: '3. REGRA DA CADEIA',
        paragraphs: [
          {
            id: 12,
            type: 'Texto',
            text: '3. Regra da Cadeia: Usada para derivar funções compostas. Derivamos a externa, mantendo a interna, e multiplicamos pela derivada da interna.',
          },
          {
            id: 13,
            type: 'Texto',
            text: 'Exemplo: f(x) = sen(3x^2). Derivada da função seno é cosseno, mantemos 3x² e multiplicamos por sua derivada (6x).',
          },
          {
            id: 14,
            type: 'Math',
            text: "f'(x) = 6x \\cos(3x^2)",
          },
          {
            id: 15,
            type: 'Texto',
            text: 'Exemplo 2: f(x) = e^{2x^3} → derivada da função exponencial, mantendo o expoente e multiplicando pela derivada de 2x³.',
          },
          {
            id: 16,
            type: 'Math',
            text: "f'(x) = e^{2x^3} \\cdot 6x^2",
          },
          {
            id: 17,
            type: 'Texto',
            text: "Sempre que encontrar uma função 'dentro' de outra, lembre-se da regra da cadeia!",
          },
        ],
      },
    ],
    questionContent: [
      {
        id: 0,
        contentTitle: 'Derivada',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Determine a derivada da função abaixo:',
          },
          {
            id: 1,
            type: 'Math',
            text: 'f(x) = 5x^3 - 2x^2 + 4x - 7',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Texto',
            isAlternativaCerta: true,
            text: 'f(x) = 15x^2 - 4x + 4',
          },
          {
            id: 1,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'f(x) = 15x^2 + 4',
          },
          {
            id: 2,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'f(x) = 15x^2 + 4x - 4',
          },
          {
            id: 3,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'f(x) = 5x^2 + 4x - 4',
          },
        ],
      },
      {
        id: 1,
        contentTitle: 'Produto de funções',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Calcule a derivada a seguir:',
          },
          {
            id: 1,
            type: 'Math',
            text: 'f(x) = (2x^2 + 3x)(x^3 - x)',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: 'f(x) = (4x + 3)(x^3 - x) + (2x^2 + 3x)(3x^2 - 1)',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: 'f(x) = (4x + 3)(x^3 - 1) + (2x^2 + 3)(3x^2 - 1)',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: 'f(x) = (4x + 3) + (3x^2 - 1)',
          },
        ],
      },
      {
        id: 2,
        contentTitle: 'Regra da Cadeia',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Calcule a derivada:',
          },
          {
            id: 1,
            type: 'Math',
            text: 'f(x) = \sin(3x^2)',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Math',
            isAlternativaCerta: true,
            text: 'f(x) = 6x \cos(3x^2)',
          },
          {
            id: 1,
            type: 'Math',
            isAlternativaCerta: false,
            text: 'f(x) = 3x \cos(3x^2)',
          },
          {
            id: 2,
            type: 'Math',
            isAlternativaCerta: false,
            text: 'f(x) = 2x \cos(3x^3)',
          },
          {
            id: 3,
            type: 'Math',
            isAlternativaCerta: false,
            text: 'f(x) = 6x \cos(3x)',
          },
        ],
      },
    ],
  },
];
