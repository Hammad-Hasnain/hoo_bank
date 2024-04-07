import React from 'react'
import styles from '../style'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
    return (
        <section
            id='client'
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
        >
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />            <div
                className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6"
            >
                <h1
                    className={`${styles.heading2}`}
                >
                    What people are
                    <br className='sm:block hidden ' />
                    saying about us.
                </h1>
                <div>
                    <p
                        className={`${styles.paragraph} max-w-[450px]`}
                    >
                        Everything you need to accept card payments and grow your business
                        anywhere on the planet.
                    </p>
                </div>
            </div>
            <div
                className="flex flex-wrap justify-center w-full feedback-container relative z-[1]"
            >
                {
                    feedback.map((feedback, index) => (
                        <FeedbackCard key={feedback.id} index={index} {...feedback} />
                    ))
                }
            </div>
        </section>)
}

export default Testimonials