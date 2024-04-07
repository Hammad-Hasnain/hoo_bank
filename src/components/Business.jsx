import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import { features } from '../constants'

const Business = () => {
  const FeatureCard = ({ icon, title, content, index }) => (
    <div
      className={` flex flex-row p-6 rounded-[20px] ${index === features.length - 1 ? 'mb-0' : 'mb-6'} feature-card hover:bg-blue `}
    >
      <div
        className={`${styles.flexCenter} rounded-full w-[64px] h-[64px] bg-dimBlue `}
      >
        <img src={icon} alt="icon" className='w-[50%] h-[50%]' />
      </div>
      <div className='flex-1 ml-3'>
        <h4
          className='text-white font-semibold font-poppins text-[18px] leading-[23px]'
        >
          {title}
        </h4>
        <p
          className='text-dimWhite font-nomral font-poppins text-[16px] leading-[24px]'
        >
          {content}
        </p>
      </div>
    </div>
  )



  return (
    <section
      className={`${layout.section}`}
    >
      <div
        className={`${layout.sectionInfo}`}>
        <h2
          className={`${styles.heading2}`}
        >
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div
        className={`${layout.sectionImg} flex-col`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Business