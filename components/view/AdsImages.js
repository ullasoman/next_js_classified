import Image from 'next/image'
import React from 'react'

const AdsImages = ({ data }) => {
    const { id, title, pictures } = data;
    return (
        <>
            <style>
                {`
                    .ad_img_box{
                        width: 100%;
                        height:500px;
                    }
                    .ad_img{
                        object-fit:cover;
                    }
                `}
            </style>
            <div className='ad_img_box'>
                <Image className='ad_img' src={pictures[0]} width="1152" height="280" alt={title}></Image>
            </div>
        </>
    )
}

export default AdsImages