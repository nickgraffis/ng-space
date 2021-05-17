export * from './dark'

export function formatDate(string: string | Date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const date = new Date(string)
  const ellapsed = (Date.now() / 1000) - (date.getTime() / 1000)
  if (ellapsed < 604800) {
    if (ellapsed < 3600)
      return `${Math.floor(ellapsed / 60)} minutes ago`

    else if (ellapsed < 86400)
      return `${Math.floor(ellapsed / 3600)} hours ago`

    else if (ellapsed < 60)
      return 'a few seconds ago'

    else
      return days[date.getDay()]
  }
  else if (ellapsed < 3154000) {
    return `${months[date.getMonth()]} ${date.getDate()}`
  }
  else {
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear().toString()}`
  }
}
