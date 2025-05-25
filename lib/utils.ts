export function generateCalendarDays(): Date[] {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth = new Date(year, month + 1, 0);

  // Começa pelo Domingo
  const start = new Date(firstOfMonth);
  start.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

  // Termina no Sábado
  const end = new Date(lastOfMonth);
  end.setDate(lastOfMonth.getDate() + (6 - lastOfMonth.getDay()));

  const calendarDays: Date[] = [];
  const current = new Date(start);

  while (current <= end) {
    calendarDays.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return calendarDays;
}

export function getDayName(date: Date): string {
  const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return dayNames[date.getDay()];
}

export function getMonthName(date: Date | number): string {
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  if (typeof date === 'number') return monthNames[date];
  return monthNames[date.getMonth()];
}
