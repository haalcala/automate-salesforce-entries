import { Typography } from "@mui/material"

export default function Calendar({ title = "default title", days, startDayAtDayOfWeek }) {
    const num_rows = Math.ceil(days.length / 7)

    console.log("num_rows:", num_rows, "startDayAtDayOfWeek:",startDayAtDayOfWeek)

    let day = 1

    return (
        <div className="calendar_container">
            <Typography>
                {title}
            </Typography>

            {("1".repeat(num_rows).split("1")).map((row, rowi) =>
                <div key={rowi} className="calendar_row">
                    {("1".repeat(6).split("1")).map((_, dayi) =>
                        <div key={dayi} className="calendar_week">
                            <div className="calendar_day">
                            {day <= days.length && (rowi==0 && dayi >= startDayAtDayOfWeek || rowi > 0) ? day++ : ""}
                            </div>
                        </div>
                    )}
                </div>
            )}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {days ? days.map(day => <div key={day.day} style={{ width: "100px" }}>{day.day}</div>) : ""}
            </div>
        </div>
    )
}
