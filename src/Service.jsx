import React from 'react'

const Service = () => {
    return (
        <>


         

            <div className="bg-gray-100 min-h-screen py-32 px-10 ">
                <p className='text-center w-full p-5 text-3xl font-bold'>Our Services</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">

                    <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiBSrY3rPB6EYrh3FaDqXejdrHY_MZKMmPIJ0IKPsuyaIWBZdqJkJItFZ9ndL3i6HTBI&usqp=CAU" alt="" className="rounded-t-lg w-full"/>
                            <div className="p-6">
                                <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">Website Development.</h1>
                                <p className="text-gray-700 my-2 hover-text-900 ">We create amazing website According to your needs.</p>
                            </div>
                    </div>
                    <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
                        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_Web_Designing.jpg" alt="" className="rounded-t-lg w-full"/>
                            <div className="p-6">
                                <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">Web Designing.</h1>
                                <p className="text-gray-700 my-2 hover-text-900 ">Designs that you won't beilve it could be yours.</p>
                            </div>
                    </div>
                    <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
                        <img src="https://foundr.com/wp-content/uploads/2023/03/Marketing-campaign.jpg" alt="" className="rounded-t-lg w-full"/>
                            <div className="p-6">
                                <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">Social Media Marketing.</h1>
                                <p className="text-gray-700 my-2 hover-text-900 ">We can promote your product digitally.</p>
                            </div>
                    </div>
                

                </div>
            </div>



        </>
    )
}

export default Service