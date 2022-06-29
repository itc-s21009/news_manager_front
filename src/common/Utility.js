export const translateDate = (dateStr) => {
    const f = (n) => ("00" + n).slice(-2)
    const date = new Date(Date.parse(dateStr))
    const year = date.getFullYear()
    const month = f(date.getMonth())
    const day = f(date.getDay())
    const hour = f(date.getHours())
    const min = f(date.getMinutes())
    const sec = f(date.getSeconds())
    return `${year}/${month}/${day} ${hour}:${min}:${sec}`
}