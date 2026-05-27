import React from 'react'
import About from './About'
import Instructions from './Instructions'

const Hero = () => {
    return (
        <>

            <div className='w-screen flex flex-col items-center justify-center mt-50'>
                <img src="logo.svg" alt="Logo Here" className="h-30" />
                <div className='h-px bg-black opacity-20 w-[60vw] '></div>
                <div className='w-[60vw] text-center text-lg'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                </div>
                <div className='flex gap-6 mt-5'>
                    <button className="px-7 py-2.5 text-white text-[16px] font-normal bg-linear-to-r drop-shadow-md/15 from-[#63b3ff] to-[#0047d9] transition-all duration-200 hover:opacity-95 hover:-translate-y-px ">
                        Get Started
                    </button>
                    <button className="px-7 py-2.5 drop-shadow-2xl/30 text-[16px] font-normal text-black transition-all duration-200 hover:opacity-95 hover:-translate-y-px ">
                        Learn More
                    </button>
                </div>
            </div>
            <div className='px-14'>
                <About />
                <Instructions />
            </div>
        </>
    )
}

export default Hero
