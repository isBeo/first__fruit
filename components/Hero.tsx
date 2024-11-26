import React from 'react'

const Hero = () => {
  
  return (
    <section className='hero
        w-full h-[55vh] flex
        flex-col text-5xl 
        justify-center items-center
        relative
    '>
        <h2 className='text-secColor '>EMPOWERING BIRTH</h2>
        <h2 className='text-pryColor'>NURTURING BOND</h2>
        <div className="button
          flex justify-center items-center 
          bottom-2 left-2 absolute  text-2xl
          max-width-[150px] 
        ">
          <button className='text-center bg-pryColor 
            text-secColor p-4 rounded-md'>
              BOOK 
            
             A CONSULTATION
          </button>
          <button>BOOK A CLASS</button>
        </div>
    </section>
  )
}

export default Hero