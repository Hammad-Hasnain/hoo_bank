import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { navLinks } from '../constants'
import { close, menu } from '../assets'


// const Navbar = () => {
//     const [toggle, setToggle] = useState(false)

//     return (
//         <nav className="w-full flex py-6 justify-between items-center">
//             <img src={logo} alt="hoobank"
//                 className="w-[124px] h-[32px]"
//             />

//             <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//                 {navLinks.map((nav, index) => (

//                     <li key={nav.id}
//                         className='font-poppins font-normal cursor-pointer  text-[16px] mr-10 text-white'
//                     >
//                         <a href={`#${nav.id}`}>{nav.title}</a>
//                     </li>

//                 ))
//                 }
//             </ul>

//             <div className='sm:hidden flex flex-1 justify-end items-center '>
//                 <img
//                     src={toggle ? close : menu} alt="menu"
//                     className='w-[28px] h-[28px] object-contain'
//                     onClick={() => {
//                         setToggle(prev => !prev)
//                     }}
//                 />
//                 <div
//                     className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient  absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl sidebar`}>

//                     <ul className="list-none flex flex-col justify-end items-center flex-1">
//                         {navLinks.map((nav, index) => (
//                             <li key={nav.id}
//                                 className='font-poppins font-normal cursor-pointer  text-[16px] mb-4 text-white'
//                             >
//                                 <a href={`#${nav.id}`}>{nav.title}</a>
//                             </li>

//                         ))
//                         }
//                     </ul>

//                 </div>



//             </div>


//         </nav>
//     )
// }


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (

        <nav
            className="w-full flex justify-between items-center py-6"
        >
            <img src={logo} alt="hoo_bank"
                className='w-[120px] h-[20px]'
            />

            <ul
                className=" sm:flex hidden justify-end items-center flex-1"
            >
                {
                    navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`text-white font-poppins font-normal text-[16px] cursor-pointer ${(index === navLinks.length - 1) ? 'mr-0' : 'mr-10'} `}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))
                }
            </ul>

            <div
                className='sm:hidden flex flex-1 justify-end items-center '
            >
                <img src={toggle ? close : menu} alt=""
                    onClick={() => setToggle(prev => !prev)}
                    className='w-[28px] h-[28px] object-contain'
                />

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient mx-4 my-2 rounded-xl min-w-[140px] absolute top-20 right-0 sidebar`}
                >

                    <ul
                        className=" flex flex-col justify-center items-center flex-1"
                    >
                        {
                            navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`text-white font-poppins font-normal text-[16px] cursor-pointer ${(index === navLinks.length - 1) ? 'mb-0' : 'mb-4'} `}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </nav >
    )
}

export default Navbar