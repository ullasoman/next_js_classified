import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Mapmarker = ({ current_bc, location }) => {
    return (
        <>
            <style>
                {`
                .ads_location_row{
                    padding:50px 0;
                }
                .ads_location_heading{
                    font-weight: 600;
                    font-size: 22px;
                    line-height: 35px;
                    color: #2b2b2b;
                    margin-bottom: 2px;
                }
                .ad_content_right{
                    width:30%;
                }
                `}
            </style>

            <div className='ads_location_row'>
                <h2 className='ads_location_heading'>Find this, {current_bc} in {location}</h2>
                <div className='map_marker py-5 flex justify-center'>
                    <Image src='/images/icons/map-marker.png' width='100' height='100' />
                </div>
                <div className='locaton_btn flex justify-center'>
                    <Link href='#' className='rounded-full bg-gray-500 text-white py-2 px-5'>View on Map</Link>
                </div>
            </div>
        </>
    )
}
