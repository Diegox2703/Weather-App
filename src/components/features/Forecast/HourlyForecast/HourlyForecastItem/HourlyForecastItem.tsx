import weatherIcon from '/images/icon-sunny.webp'

export function HourlyForecastItem() {
  return (
    <article className='flex items-center justify-between bg-Neutral-700 rounded-md h-14 pr-4 pl-2 border border-Neutral-600'>
      <section className='flex items-center gap-1'>
        <img width={40} src={weatherIcon} alt="weather-icon"/>
        <h2 className='text-Neutral-0 font-medium'>3 PM</h2>
      </section>
      <section>
        <span className='text-Neutral-0'>20°</span>
      </section>
    </article>
  )
}
