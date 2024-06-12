export enum VISIBILITY_FILTER {
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_ALL = 'SHOW_ALL'
}

export type TodoFilter = {
  label: string;
  value: VISIBILITY_FILTER;
};

export const initialFilters: TodoFilter[] = [
  { label: 'Все заметки', value: VISIBILITY_FILTER.SHOW_ALL },
  { label: 'Завершенные', value: VISIBILITY_FILTER.SHOW_COMPLETED },
  { label: 'Активные', value: VISIBILITY_FILTER.SHOW_ACTIVE }
];
