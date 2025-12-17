import type { CurrentTime, Hourly } from "@/types";

export interface HourlyForecastListProps {
    hourlyItems: Hourly
    defaultTime: CurrentTime
}