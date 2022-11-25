import Image from 'next/image'
import React from 'react'

const error = () => {
    return (
        <div className='md:container md:mx-auto text-center'>
            <div><h1 className="text-3xl font-bold text-orange-600 py-10">Something Went Wrong</h1></div>
            <div className='flex justify-center hidden'>
                <Image src={"/images/not_found.png"} width={400} height={400}></Image>
            </div>
        </div>
    )
}

export default error