import dayjs from 'dayjs';

export const useFormatInputDate = (date: string): string => {
  return date
}

export const useFormatOutputDate = (value: string, datetime = true): string => {
  const date = dayjs(value)
  const format = (datetime) ? 'DD/MM/YYYY HH:mm' : 'DD/MM/YYYY'

  if (date.isValid()) {
    return dayjs(date).utc().format(format)
  }

  return value
}
