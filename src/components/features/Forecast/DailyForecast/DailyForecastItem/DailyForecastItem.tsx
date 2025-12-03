import weatherIcon from '/images/icon-drizzle.webp'

export function DailyForecastItem() {
  return (
    <article className='bg-Neutral-800 flex flex-col px-2 py-3 h-44 rounded-md items-center justify-between'>
        <h2 className='text-Neutral-0'>Tue</h2>
        <img src={weatherIcon} alt="weather-icon" width={70}/>
        <section className='flex items-center justify-between w-full'>
            <p className='text-Neutral-0'>68°</p>
            <p className='text-Neutral-300'>57°</p>
        </section>
    </article>
  )
}