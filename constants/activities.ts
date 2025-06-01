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
    title: "Funções",
    achievementSlugs: ['achievement-test'],
    teoricalContent: [
      {
        id: 0,
        contentTitle: "Função Polinomial do 1° Grau",
        paragraphs: [
          {
            id: 0,
            type: "Texto",
            text: "Uma função é chamada função afim ou função polinomial do 1º grau quando existem dois números reais a e b tais que:"
          },
          {
            id: 1,
            type: "Math",
            text: 'f(x)=ax+b'
          },
          {
            id: 2,
            type: "Texto",
            text: "Se a = 0, a função é constante. Quando a > 0, a função é decrescente. E, por fim, quando a < 0, a função é decrescente."
          }
        ]
      },
      {
        id: 1,
        "contentTitle": "Função Polinomial do 2° Grau",
        paragraphs: [
          {
            id: 0,
            type: "Texto",
            text: "Uma função é chamada função quadrática ou função polinomial do 2º grau quando existem três números reais a, b e c, tais que:"
          },
          {
            id: 1,
            type: "Math",
            text: 'f(x)=ax^2+bx+c'
          },
          {
            id: 2,
            type: "Texto",
            text: "É importante constar que a deve ser diferente de 0, se não a função se torna de 1º grau."
          },
          {
            id: 3,
            type: "Texto",
            text: "O a também é responsável pela abertura e concavidade da parábola. Se ele for positivo, a concavidade é para cima, e se for negativo, a concavidade fica para baixo. Além disso, quanto maior o valor de a, menor é a abertura da parábola."
          },
          {
            id: 4,
            type: "Texto",
            text: "Enquanto isso, o b indica o ramo de intersecção com o eixo y. Se b > 0, a intersecção é no ramo crescente, se b < 0 a intersecção é no ramo decrescente, e se b = 0 a intersecção é no vértice."
          },
          {
            id: 5,
            type: "Texto",
            text: "Por fim, o c define o ponto de intersecção com o eixo y. Ou seja, f(0) = c."
          },
          {
            id: 6,
            type: "Texto",
            text: "Com a Fórmula de Bháskara conseguimos determinar as raízes de uma equação de 2º grau, ou seja, os pontos de intersecção da parábola com o eixo x. Sua fórmula é:"
          },
          {
            id: 7,
            type: "Math",
            text: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}'
          },
          {
            id: 8,
            type: "Texto",
            text: "O cálculo de delta (Δ), essencial para a fórmula anterior e as próximas, auxilia a descobrirmos quantas vezes a parábola corta o eixo x. Se Δ > 0 há dois pontos, se Δ = 0 há somente um ponto, e se Δ < 0 não há nenhum ponto"
          },
          {
            id: 9,
            type: "Math",
            text: '\\Delta=b^2-4ac'
          },
          {
            id: 10,
            type: "Texto",
            text: "Para acharmos o ponto do vértice da parábola, ou seja, seu ponto mais alto ou mais baixo, podemos usar as fórmulas a seguir:"
          },
          {
            id: 11,
            type: "Math",
            text: 'x_v=\\frac{-b}{2a}'
          },
          {
            id: 12,
            type: "Math",
            text: 'y_v=\\frac{-\\Delta}{4a}'
          }
        ]
      },
      {
        id: 2,
        "contentTitle": "Função Exponencial",
        paragraphs: [
          {
            id: 0,
            type: "Texto",
            text: "Dado um número a, positivo e diferente de 1, uma função exponencial de base a é definida como:"
          },
          {
            id: 1,
            type: "Math",
            text: 'f(x)=a^x'
          },
          {
            id: 2,
            type: "Texto",
            text: "Há algumas restrições. O número a não pode ser igual a 0 ou 1, e negativo. Já x não pode ser igual a 1/2."
          },
          {
            id: 3,
            type: "Texto",
            text: "Em relação ao gráfico, essa função corta o eixo y em b, não corta o eixo x nunca e é ilimitada superiormente. Além disso, se a > 1 a função é crescente, e se 0 < a < 1 a função é decrescente."
          },
          {
            id: 4,
            type: "Texto",
            text: "Um dos maiores usos dessa função é representado no exemplo da Fórmula Financeira a seguir. Nela, V é o valor acumulado após o tempo t, V0 é o valor inicial e i é a taxa, podendo ser negativa ou positiva."
          },
          {
            id: 5,
            type: "Math",
            text: 'V=V_0(1+i)^t'
          }
        ]
      },
      {
        id: 3,
        "contentTitle": "Função Logarítmica",
        paragraphs: [
          {
            id: 0,
            type: "Texto",
            text: "A função logarítmica dá-se por:"
          },
          {
            id: 1,
            type: "Math",
            text: 'f(x)=\\log_{a}{x}'
          },
          {
            id: 2,
            type: "Texto",
            text: "O número a deve ser positivo e diferente de 1. Se a > 1 a função é decrescente, e se 0 < a < 1 a função é decrescente. Além disso, ela nunca toca o eixo y."
          },
          {
            id: 3,
            type: "Texto",
            text: "Abaixo há duas propriedades logarítmicas importantes."
          },
          {
            id: 4,
            type: "Math",
            text: '\\log_{a}b = x \\iff a^{x} = b'
          },
          {
            id: 5,
            type: "Math",
            text: '\\log_{a}(b^{c}) = c \\cdot \\log_{a}b'
          }
        ]
      }
    ],
    questionContent: [
      {
        id: 0,
        contentTitle: 'Atividade 1',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'O custo de fabricação de x unidades de um produto é dado pela função C(x) = 100 + 2x. Qual o custo de fabricação da décima unidade, já tendo sido fabricadas nove unidades?',
          }
        ],
        alternatives: [
          {
            id: 0,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'R$120,00',
          },
          {
            id: 1,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'R$118,00',
          },
          {
            id: 2,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'R$100,00',
          },
          {
            id: 3,
            type: 'Texto',
            isAlternativaCerta: true,
            text: 'R$2,00',
          },
          {
            id: 4,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'R$10,00',
          },
        ],
      },
      {
        id: 1,
        contentTitle: 'Atividade 2',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Duas editoras oferecem emprego com as seguintes condições salariais. Empresa A – Fixo de R$ 1.500,00 e comissão de R$ 15,00 por coleção vendida. Empresa B – Fixo de R$ 1.200,00 e comissão de R$ 20,00 por coleção vendida. Qual a quantidade de coleções vendidas em que o salário das duas empresas será o mesmo?',
          }
        ],
        alternatives: [
          {
            id: 0,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '35 coleções',
          },
          {
            id: 1,
            type: 'Texto',
            isAlternativaCerta: true,
            text: '50 coleções',
          },
          {
            id: 2,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '60 coleções',
          },
          {
            id: 3,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '75 coleções',
          },
          {
            id: 4,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '80 coleções',
          },
        ],
      },
      {
        id: 2,
        contentTitle: 'Atividade 3',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Sabe-se que, sob certo ângulo de tiro, a altura h atingida por uma bala, em metros, em função do tempo t, em segundos, é dada por h(t) = -20t2 + 200t. Qual a altura máxima atingida pela bala? Em quanto tempo, após o tiro, a bala atinge a altura máxima?',
          }
        ],
        alternatives: [
          {
            id: 0,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'A altura máxima é de 350 metros, atingida após 2 segundos',
          },
          {
            id: 1,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'A altura máxima é de 400 metros, atingida após 3.5 segundos',
          },
          {
            id: 2,
            type: 'Texto',
            isAlternativaCerta: true,
            text: 'A altura máxima é de 500 metros, atingida após 5 segundos',
          },
          {
            id: 3,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'A altura máxima é de 550 metros, atingida após 6 segundos',
          },
          {
            id: 4,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'A altura máxima é de 620 metros, atingida após 7.5 segundos',
          },
        ],
      },
      {
        id: 3,
        contentTitle: 'Atividade 4',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'A trajetória de um projétil lançado por um canhão, num local plano e horizontal, é dada pela função:',
          },
          {
            id: 1,
            type: 'Math',
            text: 'y = -\\frac{1}{32} \\cdot x^{2} + \\frac{1}{8} \\cdot x',
          },
          {
            id: 2,
            type: 'Texto',
            text: 'A que distância caiu o projétil?',
          },
        ],
        alternatives: [
          {
            id: 0,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '8,5 quilômetros',
          },
          {
            id: 1,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '10 quilômetros',
          },
          {
            id: 2,
            type: 'Texto',
            isAlternativaCerta: true,
            text: '12 quilômetros',
          },
          {
            id: 3,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '14,5 quilômetros',
          },
          {
            id: 4,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '20 quilômetros',
          },
        ],
      },
      {
        id: 4,
        contentTitle: 'Atividade 5',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'O número de habitantes de uma cidade é hoje igual a 7.000 e cresce a uma taxa de 3% ao ano. Qual o número de habitantes daqui a 30 anos?',
          }
        ],
        alternatives: [
          {
            id: 0,
            type: 'Texto',
            isAlternativaCerta: true,
            text: '16.990 habitantes',
          },
          {
            id: 1,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '17.100 habitantes',
          },
          {
            id: 2,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '21.500 habitantes',
          },
          {
            id: 3,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '24.050 habitantes',
          },
          {
            id: 4,
            type: 'Texto',
            isAlternativaCerta: false,
            text: '32.750 habitantes',
          },
        ],
      },
      {
        id: 5,
        contentTitle: 'Atividade 6',
        paragraphs: [
          {
            id: 0,
            type: 'Texto',
            text: 'Considere que uma determinada xícara de café contém cerca de 100mg de cafeína. O nível Q de cafeína no corpo decresce a uma taxa de 7% por hora, a partir do instante em que o café foi tomado. Considerando o modelo matemático exponencial abaixo, determine após quanto tempo o nível de cafeína atingirá a meia vida.',
          },
          {
            id: 1,
            type: 'Math',
            text: 'Q=Q_0(1+i)^t',
          }
        ],
        alternatives: [
          {
            id: 0,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'Após 3 horas',
          },
          {
            id: 1,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'Após 4 horas e meia',
          },
          {
            id: 2,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'Após 6 horas e 45 minutos',
          },
          {
            id: 3,
            type: 'Texto',
            isAlternativaCerta: false,
            text: 'Após 8 horas',
          },
          {
            id: 4,
            type: 'Texto',
            isAlternativaCerta: true,
            text: 'Após 9 horas e meia',
          },
        ],
      },
    ]
  }
];
