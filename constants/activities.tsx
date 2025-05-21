import { MathTextComponent } from "~/components/MathTextComponent";
import { MathViewComponent } from "~/components/MathViewComponent";

export const activitiesList: TActivities = [
  {
    id: 1,
    title: "Conteúdo 1",
    teoricalContent: [ //// PÁGINAS
      {
        id: 0,
        contentTitle: "Explicação 1",
        paragraphs: [ //// PARAGRAFOS
          {
            id: 0,
            type: "Texto",
            text: "Texto de teste 21321321 dsasdsadsadvcx, segue abaixo uma formula matemateca"
          },
          {
            id: 1,
            type: "Math",   //// FORMULAS MATEMÁTICAS EM "EXPRESSÕES DE LaTeX" (LaTeX é uma expressão matematica ou formula que é formatada e exibida em um documento digital)
            text: <MathViewComponent math={'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}'} />
          }
        ]
      },
      {
        id: 1,
        contentTitle: "Explicação 2",
        paragraphs: [ //// PARAGRAFOS
          {
            id: 0,
            type: "Texto",
            text: "Texto de teste 21321321 dsasdsadsadvcx, segue abaixo uma formula matemateca"
          },
          {
            id: 1,
            type: "Texto-Math",
            text: <MathTextComponent
              value={`This text includes math notations and should be wrapped correctly for \\( \\alpha \\) and $\\beta$ within the view. \nThe following formula shouldn't be inline:$$x_{1,2} = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$However the following formula should be inline with the text: \\( a^2 + b^2 = c^2 \\)`}
            />
          }
        ]
      }
    ],
    questionContent: [ //// PÁGINAS
      {
        id: 0,
        contentTitle: "Atividade 1",
        paragraphs: [ //// PARAGRAFOS DO TEXTO
          {
            id: 0,
            type: "Texto",
            text: "Assinale a resposta correta da seguinte fórmula"
          },
          {
            id: 1,
            type: "Math",
            text: <MathViewComponent math={'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}'} />
          }
        ],
        alternatives: [
          {
            id: 0,
            type: "Math",
            isAlternativaCerta: true,
            text: <MathViewComponent math={'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}'} />
          },
          {
            id: 0,
            type: "Math",
            isAlternativaCerta: false,
            text: <MathViewComponent math={'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}'} />
          },
        ],
      },
    ]
  }
]