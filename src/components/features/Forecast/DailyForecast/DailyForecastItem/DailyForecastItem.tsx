import weatherIcon from '/images/icon-drizzle.webp'

export function DailyForecastItem() {
  return (
    <article className='bg-Neutral-800 flex flex-col flex-1 min-w-20 max-w-[150px] px-2 py-3 h-40 rounded-md items-center justify-between'>
        <h2 className='text-Neutral-0'>Tue</h2>
        <img src={weatherIcon} alt="weather-icon" width={70}/>
        <section className='flex items-center justify-between w-full'>
            <p className='text-Neutral-0'>68°</p>
            <p className='text-Neutral-300'>57°</p>
        </section>
    </article>
  )
}