

const ServiceType = () => {
  return (
    <section className="w-[100%] pt-4 pb-8 h-auto bg-slate-50">
      <div className="mx-[8rem] flex flex-col items-start justify-center">
        <h1 className='w-[100%] py-6 font-bold text-[2.5rem]'>
          Tired of not getting parking? We here to help.
        </h1>
        <div className="flex justify-start gap-4 pb-12">
          <div className="w-[50%]">
            <div className="rounded-lg overflow-hidden pb-3">
              <img src="./assets/img/parking/events.jpg" className="object-cover aspect-[5/3]"/>
            </div>
            <div className="pb-3">
              <h3 className="text-2xl">Events Parking</h3>
            </div>
            <div className="pb-3">
              <p>We secure cars at shows, clubs, churches and any gathering.</p>
            </div>
            <div className="pb-3">
              <button className="text-white px-3 py-2 rounded-full transition bg-slate-800  hover:bg-slate-900">
                  Click here
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="rounded-lg overflow-hidden pb-3">
              <img src="./assets/img/parking/all-day.jpg" className="object-cover aspect-[5/3]"/>
            </div>
            <div className="pb-3">
              <h3 className="text-2xl">All Day Parking</h3>
            </div>
            <div className="pb-3">
              <p>We secure cars at shows, clubs, churches and any gathering.</p>
            </div>
            <div className="pb-3">
              <button className="text-white px-3 py-2 rounded-full transition bg-slate-800  hover:bg-slate-900">
                  Click here
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceType