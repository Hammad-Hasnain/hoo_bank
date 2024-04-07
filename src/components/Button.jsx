import React from 'react'

const Button = ({ styles }) => {
    return (
        <div
            className={`font-poppins font-medium text-[18px] bg-blue-gradient px-6 py-4 oultine-none rounded-[10px] ${styles}`}
        >
            Get Started
        </div>
    )
}

export default Button