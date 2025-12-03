import sunnyIcon from '/images/icon-sunny.webp'

export function CurrentWeather() {
  return (
    <article className='flex items-center justify-center flex-col lg:flex-row lg:justify-between rounded-3xl p-5 bg-[url(/images/bg-today-large.svg)] bg-no-repeat bg-cover w-full h-[286px]'>
        <section className='font-bold text-center lg:text-start'>
            <h2 className='text-Neutral-0 text-2xl'>Berlin, Germany</h2>
            <span className='text-Neutral-300 text-sm'>Tuesday, Aug 5, 2025</span>
        </section>
        <section className='flex items-center'>
            <img width={100} src={sunnyIcon} alt="icon-sunny"/>    
            <h1 className='text-Neutral-0 text-7xl font-semibold font-DM-Sans-Italic'>68°</h1>
        </section>
    </article>
  )
}