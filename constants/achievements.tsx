import { MathAchievementSvg } from "~/assets/achievements/MathAchievementSvg";

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
    svg: <MathAchievementSvg size={100} />,
  },
];
