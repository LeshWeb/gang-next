export function typeOfState(type: string): string {
  if (type === 'Стандартный') return 'minimum'
  if (type === 'Продвинутый') return 'medium'
  if (type === 'Эксклюзивный') return 'maxiumum'
  return ''
}
