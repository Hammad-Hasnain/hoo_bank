import React from 'react'
import { stats } from '../constants'
import styles from '../style'



const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb:6 `}
      id="features"
    >
      {stats.map((stat, id) => (
        <div
          key={stat.id}
          className='flex justify-start items-center flex-row m-3'
        >
          <h4
            className='font-poppins font-semibold text-white xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'
          >
            {stat.value}
          </h4>
          <p
            className='font-poppins font-normal text-gradient xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] ml-3 uppercase'
          >
            {stat.title}
          </p>

        </div>
      ))



      }

    </section >
  )
}

export default Stats