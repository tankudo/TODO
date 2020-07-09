export interface TodoFace {
  priority: number;
  task: string;
  date: string;
  upToDate: { 'year': string, 'month': string, 'day': string };
}
