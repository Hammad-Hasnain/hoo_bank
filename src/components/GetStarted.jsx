import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

// const GetStarted = () => {
//     return (
//         <div
//             className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
//         >
//             <div
//                 className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
//             >
//                 <div
//                     className={`${styles.flexStart} flex-row`}
//                 >
//                     <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
//                         <span className='text-gradient'>Get</span>
//                     </p>
//                     <img src={arrowUp} alt="arrow-up"
//                         className='w-[23px] h-[23px] object-contain' />
//                 </div>
//                 <p className='font-poppins font-medium text-[18px] leading-[23px]'>
//                     <span className='text-gradient'>Started</span>
//                 </p>
//             </div>

//         </div>
//     )
// }


const GetStarted = () => {


    return (

        <div className={`bg-blue-gradient w-[140px] h-[140px]  ${styles.flexCenter} rounded-full p-[2px]`}>
            <div className={`bg-primary w-[100%] h-[100%]  ${styles.flexCenter} flex-col rounded-full`}>
                <div
                    className={`flex-row ${styles.flexStart}`}
                >
                    <p className='font-[18px] font-poppins font-medium mr-[2px]'>
                        <span className='text-gradient  '>Get</span>
                    </p>
                    <img src={arrowUp} alt="arrowUp"
                        className='object-contain -[23px] h-[23px]'
                    />
                </div>

                <p className='font-[18px] font-poppins font-medium'>
                    <span className='text-gradient '>Started</span>
                </p>
            </div>
        </div>

    )
}

export default GetStarted