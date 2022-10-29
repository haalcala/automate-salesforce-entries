import React, { createContext, useEffect, useRef, useState } from 'react'
import { API } from './Types'

export const AppContext = createContext<any>(null)

export default function Context({children}) {
    const [state, setState] = useState({})

    const api = useRef<API|null>(null)

    useEffect(() => {
      api.current = {
        setState(new_state) {
            setState(new_state)
        },
        getBrowserLocation() {
            return ""
        },
        waitForSFHomePage() {
            return
        },
        getSFProjectHoursDays() {
            return {}as any
        },
        getSFTimesheetDays() {
            return {}as any
        },

        loadUrl(url) {
            
        },

        setSFMonthYear(monthYear) {
            
        },

        setSFProjectHoursDayJobs(day, projectHoursDayJobs) {
            
        },

        setSFTimesheetDayHours(day, timesheetHours) {
            
        },

        getSFProjectHoursJobs() {
            return {}as any
        },
      }
    
      return () => {
        
      }
    }, [state])
    

  return (
    <AppContext.Provider value={{state, api}}>{children}</AppContext.Provider>
  )
}
