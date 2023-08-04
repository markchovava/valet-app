import { BsArrowRight } from 'react-icons/bs'

const PackageList = () => {
  return (
    <section className="w-[100%] py-12 h-auto bg-slate-100">
        <div className="mx-[8rem]  flex flex-col items-start justify-center">
        <div className='w-[100%] pb-6 font-bold text-[2.5rem]'>
            Our Parking Packages
        </div>
       {/*  <div className="w-[100%] border-black flex items-center justify-between py-8 text-2xl">
            <div className="px-4 flex items-center justify-start">
            <div className='font-semibold text-[2rem]'>DURATION</div>
            </div>
            <div className="px-4 flex items-center justify-start gap-8">
            <div className='font-semibold text-[2rem]'>FEE</div>
            </div>
        </div> */}
        <div className="w-[100%] mb-4 bg-slate-400 hover:bg-slate-500 text-white rounded-lg flex items-center justify-between py-8 text-2xl">
            <div className="px-4 flex items-center justify-start">
            <div className='drop-shadow-md'>1 hour Parking</div>
            </div>
            <div className="px-4 flex items-center justify-start gap-8">
            <div className='drop-shadow-md'>$0.50c</div>
            <div><BsArrowRight className='drop-shadow-md fot-semibold' /></div>
            </div>
        </div>
        <div className="w-[100%] mb-4 bg-slate-500 hover:bg-slate-600 text-white rounded-lg flex items-center justify-between py-8 text-2xl">
            <div className="px-4 flex items-center justify-start">
            <div className='drop-shadow-md'>2 hours Parking</div>
            </div>
            <div className="px-4 flex items-center justify-start gap-8">
            <div className='drop-shadow-md'>$1.00</div>
            <div><BsArrowRight /></div>
            </div>
        </div>
        <div className="w-[100%] mb-4 bg-slate-400 hover:bg-slate-500 text-white rounded-lg flex items-center justify-between py-8 text-2xl">
            <div className="px-4 flex items-center justify-start">
            <div className='drop-shadow-md'>3 hours Parking</div>
            </div>
            <div className="px-4 flex items-center justify-start gap-8">
            <div className='drop-shadow-md'>$2.00</div>
            <div><BsArrowRight /></div>
            </div>
        </div>
        <div className="w-[100%] mb-4 bg-slate-500 hover:bg-slate-600 text-white rounded-lg flex items-center justify-between py-8 text-2xl">
            <div className="px-4 flex items-center justify-start">
            <div className='drop-shadow-md'>8 hours Parking</div>
            </div>
            <div className="px-4 flex items-center justify-start gap-8">
            <div className='drop-shadow-md'>$3.00</div>
            <div><BsArrowRight /></div>
            </div>
        </div>
        
        </div>
    </section>
  )
}

export default PackageList