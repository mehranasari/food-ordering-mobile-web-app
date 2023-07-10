import { string, number, object } from 'yup';

export const calendarSchema = object().shape({
  year: number()
    .max(4, ''),
  month: string()
    .max(2, ''),
  day: string()
    .max(31, '')
});