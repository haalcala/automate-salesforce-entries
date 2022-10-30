import moment from "moment"

function getDays() {
    
    const date = new Date()

    date.setDate(1)
    
    const days:{day:number}[]= ("1".repeat(moment(date).daysInMonth()).split("1")).map((i, day) => ({day, dow:moment(date).add(day, "d").weekday()}))

    return [days, moment(date).weekday()]
}

export default {
    getDays
}