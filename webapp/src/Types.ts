export type API = {
    setState(new_state)

    getBrowserLocation(): string

    // setSFLogin(user:string,pass:string)

    waitForSFHomePage()

    loadUrl(url: string)

    setSFMonthYear(monthYear: string)

    getSFProjectHoursDays(): Promise<ProjectHoursDay[]>
    getSFProjectHoursJobs(): Promise<ProjectHoursJob[]>

    setSFProjectHoursDayJobs(day:number, projectHoursDayJobs : ProjectHoursDayJob[])

    getSFTimesheetDays()
    setSFTimesheetDayHours(day:number, timesheetHours:TimesheetHours)

}

export type ProjectHoursDay = {

}

export type ProjectHoursJob = {

}

export type ProjectHoursDayJob = {

}

export type TimesheetHours = {

}


