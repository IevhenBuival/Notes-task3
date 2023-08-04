import { CategoryType, ITotal, ITotalInput } from 'src/types/ITotal';

export function recalcTotal(notes: ITotalInput[]) {
  const CategorySet = new Set<CategoryType>();
  notes.forEach((element) => {
    CategorySet.add(element.category);
  });
  const total: ITotal[] = [];
  for (let item of CategorySet) {
    const filtered = notes.filter((el) => el.category === item);
    const activeCount = filtered.reduce((accumulator, currentValue) => {
      if (!currentValue.archived) return accumulator + 1;
      return accumulator;
    }, 0);
    const archivedCount = filtered.reduce((accumulator, currentValue) => {
      if (currentValue.archived) return accumulator + 1;
      return accumulator;
    }, 0);
    total.push({
      category: item,
      active: activeCount,
      archived: archivedCount,
    });
  }
  return total;
}
