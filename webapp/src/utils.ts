function getDays() {
    const days:{day:number}[]= []

    const date = new Date()

    const month = date.getMonth()

    for (let day = 1; day <= 31; day++) {
        date.setDate(day)

        if (date.getMonth() === month) {
            days.push({day})
        }
    }

    return days
}

export default {
    getDays
}