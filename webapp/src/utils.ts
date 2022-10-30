import moment from "moment"

function getDays() {
    
    const date = new Date()

    date.setDate(1)
    
    const days:{day:number}[]= new Array(moment(date).daysInMonth()).map((i, day) => ({day}))

    return [days, moment(date).weekday()]
}

export default {
    getDays
}