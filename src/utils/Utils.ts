export const formatDate = (date: Date): string => {
  const year = date.toLocaleString('default', {year: 'numeric'})
  const month = date.toLocaleString('default', {month: '2-digit'})
  const day = date.toLocaleString('default', {day: '2-digit'})
  return [year, month, day].join('-')
}

export const isValidDate = (dateString: string): boolean => {
  return dateString.match(/(\d{4})-(\d{2})-(\d{2})$/) !== null
}

export const isValidUrl = (urlString: string): boolean => {
  try {
    new URL(urlString)
    return true;
  } catch (err) {
    return false
  }
}
