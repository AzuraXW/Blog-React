function format (date) {
  date = new Date(date)
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  return `${date.getFullYear()}年${date.getMonth() + 1}月${day}日`
}

export {
  format
}