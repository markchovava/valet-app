import React from 'react'

const MainContent = () => {
  return (
    <section className='w-[100%] h-auto'>
        <div className='mx-[8rem] py-24'>
            <div>
                <h1 className="font-bold lg:text-[2.5rem] text-[2rem] mb-2">
                    Lorem ipsum dolor sit amet consectetur. 
                </h1>
                <p className='w-[80%]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt harum ut temporibus 
                    consequatur at impedit, praesentium laudantium sunt minima! Mollitia reprehenderit eveniet 
                    dolore architecto sapiente. Veritatis rem commodi facilis non exercitationem itaque tempore 
                    culpa possimus eaque, impedit sunt voluptatum eligendi quas saepe numquam deleniti accusamus 
                    vel quis id architecto?
                </p>
            </div>
            <div className=''></div>
        </div>
        <div className='bg__gradientRed w-[100wv] xl:h-[40vh] lg:h-[50vh] h-[70vh] flex flex-col items-start justify-center'>
            <div className="mx-[8rem] text-white">
            <h1 className="font-bold lg:text-[2.5rem] text-[2rem] mb-4">
            Lorem ipsum dolor sit amet consectetur. 
            </h1>
            <p className="text-xl mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, autem?</p>
            <button className="px-4 py-3 text-lg font-medium rounded-full transition bg-slate-800 hover:bg-slate-950 ">
                Contact Us
            </button>
            </div>
        </div>
        <div className='mx-[8rem] '>
            {/* -------------------------------- */}
            <div className='flex justify-between items-center gap-8 pt-24 pb-12'>
                <div className='w-[50%] overflow-hidden rounded-xl'>
                    <img src="./assets/img/parking/events.jpg" className='aspect-[5/3] object-cover' />
                </div>
                <div className='w-[50%]'>
                    <h2 className='text-[2.5rem] font-semibold mb-4'>Safety First</h2>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde mollitia dolorem 
                        adipisci suscipit quo quasi. Optio similique cumque placeat qui nesciunt esse, iste alias 
                        dolorem corrupti, autem cupiditate quam magni consequatur tenetur unde praesentium beatae 
                        rem. Excepturi, fuga temporibus deleniti eius dignissimos aliquam quasi nulla vitae 
                        exercitationem voluptatem natus.
                    </p>
                  
                </div>
            </div>
            {/* -------------------------------- */}
            <div className='flex justify-between items-center gap-8 pt-12 pb-24'>
                <div className='w-[50%] overflow-hidden rounded-xl'>
                    <img src="./assets/img/parking/events.jpg" className='aspect-[5/3] object-cover' />
                </div>
                <div className='w-[50%]'>
                    <h2 className='text-[2.5rem] font-semibold mb-4'>Safety First</h2>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde mollitia dolorem 
                        adipisci suscipit quo quasi. Optio similique cumque placeat qui nesciunt esse, iste alias 
                        dolorem corrupti, autem cupiditate quam magni consequatur tenetur unde praesentium beatae 
                        rem. Excepturi, fuga temporibus deleniti eius dignissimos aliquam quasi nulla vitae 
                        exercitationem voluptatem natus.
                    </p>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainContent