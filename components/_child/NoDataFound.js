import Image from 'next/image'
import React from 'react'

const NoDataFound = () => {
    return (
        <div className='md:container md:mx-auto text-center py-5'>
            <div className='flex justify-center'>
                <Image src={"/images/no-web-result.png"} width={300} height={300}></Image>
            </div>
            <div><h1 className="text-3xl font-bold text-orange-600 py-5">Oops! No data found</h1></div>
            <p className='mt-2'>Change your filters and then try again.</p>
        </div>
    )
}

export default NoDataFound