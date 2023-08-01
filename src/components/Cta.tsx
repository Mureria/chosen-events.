
import {MdEventAvailable, MdPeopleOutline} from 'react-icons/md'
import {BiDish, BiMap} from 'react-icons/bi'
const Cta = () => {
  return (
   <>
    <div className="w-full h-full mx-auto justify-center items-center text-black py-12 ">
        <div className="flex justify-center items-center flex-wrap mx-10 px-8 rounded-md md:px-24 md:flex-nowrap ">
            <div className="relative py-4 text-2xl font-semibold text-center px-8 my-8 md:px-24">
                <div className='flex justify-center items-center mb-4'><MdEventAvailable size={60}/></div>
                <h2>245</h2>
                <h2>Events</h2>
            </div>
            <div className="text-2xl font-semibold text-center px-8 my-8 md:px-24">
                <div className='flex justify-center items-center mb-4'><MdPeopleOutline  size={60} /></div>
                <h2>500,000</h2>
                <h2>People</h2>
            </div>
            <div className="text-2xl font-semibold text-center px-8 my-8 md:px-24">
                <div className='flex justify-center items-center mb-4'><BiDish size={60}/></div>
                <h2>1,000</h2>
                <h2>Dishes</h2>
            </div>
            <div className="text-2xl font-semibold text-center px-8 my-8 md:px-24">
                <div className='flex justify-center items-center mb-4'><BiMap size={60}/></div>
                <h2>47</h2>
                <h2>Counties</h2>
            </div>
        </div>
    </div>
   </>
  )
}

export default Cta