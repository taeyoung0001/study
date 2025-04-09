export function getSafeItem<T>(list: T[], index: number): T | null {
  if (isNaN(index) || index < 0 || index >= list.length) return null;
  return list[index];
}
