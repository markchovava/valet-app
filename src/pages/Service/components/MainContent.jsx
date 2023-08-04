import ServiceData from './../../../data/ServiceData.json'
import SingleItem from './SingleItem'


const MainContent = () => {
    const serviceData = ServiceData

  return (
    <section className='w-[100%] h-auto'>
        <div className='mx-[8rem] py-24'>
            
        { serviceData && 
            serviceData.map((item, i) => (
            <SingleItem key={i} title={item.title} price={item.price} id={item.id}/>
        ))}
            
            
        </div>
    </section>
  )
}

export default MainContent