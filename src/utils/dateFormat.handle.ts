
export const dateFormat = (date: Date) => {
  const dateIso: string = new Date(date).toISOString().slice(0, 10);

  return new Date(dateIso).toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}