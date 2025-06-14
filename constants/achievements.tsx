import { FunctionAchievementSvg } from "~/assets/achievements/FunctionAchievementSvg";
import { MathAchievementSvg } from "~/assets/achievements/MathAchievementSvg";
import { MatrixAchievementSvg } from "~/assets/achievements/MatrixAchievementSvg";
import { PolynomialAchievementSvg } from "~/assets/achievements/PolynomialAchievementSvg";

export const achievementsList: TAchivementsConst[] = [
  {
    id: 0,
    slug: 'achievement-test',
    title: 'Conquista Title',
    description: 'Teste de conquista descrição',
    svg: <MathAchievementSvg size={100} />
  },
  {
    id: 1,
    slug: 'achievement-polynomials',
    title: 'Mestre dos Polinômios',
    description: 'Concluiu a atividade sobre polinômios com pelo menos 60% de acertos.',
    svg: <PolynomialAchievementSvg size={100} />,
  },
  {
    id: 2,
    slug: 'achievement-derivatives',
    title: 'Derivador',
    description: 'Concluiu a atividade sobre derivadas com pelo menos 60% de acertos.',
    svg: <MathAchievementSvg size={100} />,
  },
  {
    id: 3,
    slug: 'achievement-matrix',
    title: 'Neo Matrix',
    description: 'A realidade pode não ser o que parece, mas você segue completando a atividade.',
    svg: <MatrixAchievementSvg size={100} />,
  },
  {
    id: 4,
    slug: 'achievement-functions',
    title: 'Funcionalista',
    description: 'Você segue mantendo sua função de manter suas atividades em dia.',
    svg: <FunctionAchievementSvg size={100} />,
  },
];
