import OIM from '../Asset/6.png'
import OMT from '../Asset/5.png'
import Right from './Right'
import React, {useState} from 'react';
import WebcamScanner from './WebcamScanner'




const Board = () => {
   const [showModal, setShowModal ] = useState(false);

   const handleOnClose = () => {
     setShowModal(false);
       }
   

  return (
    <section className=' ml-[20rem]'>
      <div className='flex'>

      <div className='gird item-start'>
          <h1 className='text-start font-bold text-2xl py-[3rem]'>Hi,<span>Welcome</span></h1>
          <div className=' bg-[--btn-color] rounded-lg grid justify-center   h-[15rem] w-[50rem]'>
          <div className='flex justify-between gap-10 items-center '>
             <div className='grid gap-8 h-[5rem] '>
                <div className='grid text-start text-white'>
                   <h1 className='font-semibold text-lg'>Carry out check on the Product</h1>
                   <p className='text-sm'>Click on the barcode icon to verify the originality of your product.</p>
                </div>
                <button onClick={() => setShowModal(true)}
                 className='flex items-center bg-[#FF9900] py-2  px-2 rounded-full gap-2 w-[11rem] text-white font-medium'
                  >
                  <img src={OIM} alt='' className='w-[2rem]'/>
                  Scan Barcode
                  </button>
        
                 </div>
                <img src={OMT} alt='' className='w-[10rem] h-[10rem] rounded-full ' />
             </div>
          </div>

          <div className='grid w-[50rem] items-start  mt-[4rem]'>
            <h1 className='text-start text-2xl font-semibold'>Activity history</h1>
            <div className='grid gap-5 pt-10'>
              <div className='flex items-center justify-between'>
                <div className='text-start'>
                  <h1 className='font-medium'>Nestle Milo</h1>
                  <p>nestle</p>
                </div>
                <div className='text-end'>
                  <p className='font-medium'>13 Sept 23</p>
                  <p className='text-[#34ca34] text-sm'>Original</p>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='text-start'>
                  <h1 className='font-medium'>Coco-pops</h1>
                  <p>nestle</p>
                </div>
                <div className='text-end'>
                  <p className='font-medium'>13 Sept 23</p>
                  <p className='text-[#ca3434] text-sm'>Counterfit</p>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='text-start'>
                  <h1 className='font-medium'>Nestle Milo</h1>
                  <p>nestle</p>
                </div>
                <div className='text-end'>
                  <p className='font-medium'>13 Sept 23</p>
                  <p className='text-[#cabd34] text-sm'>Expired</p>
                </div>
              </div>
            </div>
          </div>

          
      </div>

        <div className='absolute left-[73rem]'>
         <Right />
        </div>
      
       <WebcamScanner onClose={handleOnClose} isVisible={showModal} />
      </div>

    </section>
  )
}

export default Board
