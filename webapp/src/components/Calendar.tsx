
export default function Calendar({ title = "default title", days, startDayAtDayOfWeek }) {
    return (
        <div>{title}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {days ? days.map(day => <div key={day.day} style={{ width: "100px" }}>{day.day}</div>) : ""}
            </div>
        </div>
    )
}
