import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSquareYoutube,   } from '@fortawesome/free-brands-svg-icons'




import  s from  '../components/h/header.module.css'
import logo from '../public/android-icon-144x144.png'

import Image from 'next/image'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faSearch, faShoppingBag,  } from '@fortawesome/free-solid-svg-icons'





const Header = () => {
  const iconstyle:React.CSSProperties = {
    width:'20px',
    color:'',
  }

  return (
    <div>
      <header className='
        flex w-full justify-between px-2 items-center shadow-md
      '>


        {/* sos */}
        <div className={`${s.sosicons } hidden  
            grid-cols-1  gap-2
            md:flex`}>
          <FontAwesomeIcon style={iconstyle} icon={faSquareYoutube} />
          <FontAwesomeIcon style={iconstyle} icon={faFacebook} />
          <FontAwesomeIcon style={iconstyle} icon={faInstagram} />
        </div>


        {/* title */}
        <div className={`${s.logo} flex grid-cols-1  justify-center lg:self-start  items-center `}>
          <div >
            <Image 
              src={logo}
              alt='Midwife Inspired Plus'
              width={144}
              height={144}
            />
          </div>
          <h1 className={`flex flex-col text-2xl sm:text-4xl font-extrabold ${s.title}`}>
            <span>Midwife</span>
            <span>Inspired</span>
            <span>Plus</span>
          </h1>
        </div>



        {/* c&c & sear */}
        <div className='flex items-center '>
         <div className={`flex gap-2 ${s.contIcons}`}>
          <FontAwesomeIcon icon={faUser} style={iconstyle} />
          <FontAwesomeIcon icon={faEnvelope} style={iconstyle}
            className='hidden md:block'
          />
          <FontAwesomeIcon icon={faPhone} style={iconstyle} 
            className='hidden md:block'
          />
          <FontAwesomeIcon icon={faShoppingBag} style={iconstyle} />

          <form action="" className=' max-w-[500px] h-[40px]   hidden lg:flex justify-between items-center border shadow-md px-4 rounded-md '>
            <input type="search" placeholder='Search MIP' className='w-4/5 h-full
                    
            ' />
            <button>
                <FontAwesomeIcon icon={faSearch} className='w-1/5' style={{width:'22px'}} />
            </button>
        </form>
         </div>
         {/* <form action="" className='hidden lg:flex shadow-md border justify-start items-center'>
          <input type="search" placeholder='Search Mindwife Inspired Plus' />
          <button className='w-[20px]'>
           <FontAwesomeIcon icon={faSearch} style={{width:'100%'}} />
          </button>
         </form> */}

 
        </div>



        
  



      </header>
    </div>
  )
}

export default Header