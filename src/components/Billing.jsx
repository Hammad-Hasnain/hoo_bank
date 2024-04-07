import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section
      className={`${layout.sectionReverse}`}
    >
      <div
        className={`${layout.sectionImgReverse}`}
      >
        <img src={bill} alt="billing"
          className=' className="w-[100%] h-[100%] relative z-[5px]'
        />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div
        className={`${layout.sectionInfo}`}
      >
        <h4
          className={`${styles.heading2}`}
        >
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h4>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div
          className='flex flex-row flex-wrap sm:mt-10 mt-6'
        >
          <img src={apple} alt="apple_store"
            className='w-[128px] h-[42px] cursor-pointer object-contain mr-5'
          />
          <img src={google} alt="google_play"
            className='w-[128px] h-[42px] cursor-pointer object-contain '
          />
        </div>

      </div>

    </section>
  )
}

export default Billing