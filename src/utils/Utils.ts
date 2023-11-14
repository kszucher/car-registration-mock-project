export const epochToYMD = (dateStr: Date): string => {
  const year = dateStr.toLocaleString('default', {year: 'numeric'})
  const month = dateStr.toLocaleString('default', {month: '2-digit'})
  const day = dateStr.toLocaleString('default', {day: '2-digit'})
  return [year, month, day].join('-')
}

export const ymdToEpoch = (dateStr: string): Date => {
  const [year, month, day] = dateStr.split('-').map(part => parseInt(part))
  return new Date(year, month - 1, day)
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
