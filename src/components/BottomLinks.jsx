import { GrContactInfo } from 'react-icons/gr'
import { MdHomeRepairService } from 'react-icons/md'
import { BsFillMegaphoneFill } from 'react-icons/bs'



const BottomLinks = () => {
  return (
    <section className="w-[100%] pt-16 pb-24 h-auto bg-slate-50">
        <div className="mx-[8rem] flex flex-col items-start justify-center">
            <div className='w-[100%] grid lg:grid-cols-3 grid-cols-1 xl:gap-8 gap-4'>
                <div className='bg-slate-200 flex items-center justify-start gap-8 py-4 cursor-pointer transition-all drop-shadow-sm hover:drop-shadow-lg'>
                    <div className='px-4'>
                        <GrContactInfo className='text-[4rem] '/>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>About Us</h3>
                    </div>
                </div>
                <div className='bg-slate-200 flex items-center justify-start gap-8 py-4 cursor-pointer transition-all drop-shadow-sm hover:drop-shadow-lg'>
                    <div className='px-4'>
                        <MdHomeRepairService className='text-[4rem] '/>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>Our Services</h3>
                    </div>
                </div>
                <div className='bg-slate-200 flex items-center justify-start gap-8 py-4 cursor-pointer transition-all drop-shadow-sm hover:drop-shadow-lg'>
                    <div className='px-4'>
                        <BsFillMegaphoneFill className='text-[4rem] '/>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>Contact Us</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BottomLinks