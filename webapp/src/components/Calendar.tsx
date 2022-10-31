import { Typography } from "@mui/material";
import { DAYS_OF_WEEKS } from "../Constants";

export default function Calendar({ title = "default title", days, startDayAtDayOfWeek }) {
    const num_rows = Math.ceil(days.length / 7);

    console.log("num_rows:", num_rows, "startDayAtDayOfWeek:", startDayAtDayOfWeek, "days:", days);

    function getDay(dayi, canDisplay) {
        return <div className={"calendar_day" + (dayi == 0 || dayi == 6 ? " callendar_weekend" : "")}>{day < days.length && canDisplay ? day : ""}</div>
    }

    let day = 0;

    return (
        <div className="calendar_container">
            <Typography>{title}</Typography>

            <div className="calendar_row">
                {DAYS_OF_WEEKS.map((_, dayi) => (
                    <div key={dayi} className="calendar_week">
                        <div className="calendar_day_head">{DAYS_OF_WEEKS[dayi]}</div>
                    </div>
                ))}
            </div>

            {"1"
                .repeat(num_rows)
                .split("1")
                .map((row, rowi) => (
                    <div key={rowi} className="calendar_row">
                        {"1"
                            .repeat(6)
                            .split("1")
                            .map((_, dayi) => (
                                <div key={dayi} className="calendar_week">
                                    {/* <div className={"calendar_day" + (dayi == 0 || dayi == 6 ? " callendar_weekend" : "")}>{day < days.length && ((rowi == 0 && dayi >= startDayAtDayOfWeek) || rowi > 0) ? day++ + 1 : ""}</div> */}
                                    {getDay(dayi, day < days.length && ((rowi == 0 && dayi >= startDayAtDayOfWeek) || rowi > 0))}
                                </div>
                            ))}
                    </div>
                ))}
        </div>
    );
}