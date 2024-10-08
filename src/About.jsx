import React from 'react'

const About = () => {
    return (
        <>


            <div className="flex  px-6 md:px-20  items-center justify-center bg-hero md:min-h-[90vh] overflow-hidden">
                <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">

                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/11/IIMK-ASMP.jpg.optimal.jpg" />
                    </div>
                    <div className="w-full md:w-1/2 lg:pr-32">
                    <h1 classNameName='pb-2 text-3xl font-bold text-blue-900'>About us</h1>
                        <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-500 leading-tight font-medium">
                            Dedicated to work for the better future
                        </h2>
                        <h3
                            className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                            hello there we are WE-DIGI, we are here to help all the people who wants be online or make their business online.
                        </h3>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">Get started</button>
                            <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">Watch a Demo</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default About