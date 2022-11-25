import React from 'react'
import { BiShareAlt, BiHeart } from "react-icons/bi";
const AdShare = () => {
    return (
        <div className='ad_share'>
            <button className='btn ad_share_btn'><BiShareAlt /> Share</button>
            <button className='btn ad_share_btn'><BiHeart /> Favorite</button>
        </div>
    )
}

export default AdShare