import Navbar from './Navbar.tsx'

const Header = () => {

    return (
      <>
       <Navbar/>
        <div className='flex items-center relative justify-center h-screen bg-fixed bg-center bg-cover pic'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'></div>
      <div className='p-5 text-white z-[2] '>
        <h2 className='text-5xl font-bold'>Chosen Events</h2>
        <p className='py-5 text-xl text-center italic '>You  dream it! We make it.</p>
        <button className='px-8 py-2 border ml-24'>Book</button>
      </div>
    </div>
      </>
    )
  };
  
  export default Header