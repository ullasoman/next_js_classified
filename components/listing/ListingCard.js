import React from 'react'
import styles from '../../styles/AdListing.module.css'
import { SlHeart, SlPicture, SlSpeedometer, SlLocationPin } from "react-icons/sl";
import { RiPaletteLine } from "react-icons/ri";
import { CiChat2, CiPhone } from "react-icons/ci";
import { BiHeart, BiGasPump, BiBath } from "react-icons/bi";
import { IoCalendarOutline, IoBedOutline } from "react-icons/io5";
import { BsAspectRatio } from "react-icons/bs";

import Image from 'next/image';
import Link from 'next/link';

const ListingCard = ({ id, identity, directory, images, breadcrumb, title, title_for_vue_url, currency, price, year, kilometer, color, location, fuel, cyclinder, category_type, area, bedrooms, bathrooms, ad_age, ad_condition }) => {

    return (

        <div className={styles.ad_listing_container}>
            <Link href={`${directory}/${title_for_vue_url}-${id}`}>
                <div className={styles.ad_box}>
                    <div className={styles.ad_image_container}>

                        <div className={styles.ad_img}>
                            <div className={styles.img_count}><span><SlPicture /></span> {images.length}</div>
                            <Image src={images[0] || "/"} width='321' height='214' />
                        </div>

                    </div>
                    <div className={styles.listing_info_container}>
                        <span className={styles.listing_breadcrumbs}>{breadcrumb}</span>
                        <h2 className={styles.listing_title}>{title || "Title"}</h2>
                        <div className={styles.featured_badge}><button className={styles.ad_fav_btn}><BiHeart /></button></div>
                        <div className="sm-list-attr">

                            <div className={styles.listing_price}>
                                <span className={styles.listing_price_attrs}>{currency}</span>
                                <span className={styles.listing_price_amount}>{price}</span>
                            </div>

                        </div>
                        {/* keyfacts for cars */}
                        {

                            identity == 3 &&
                            <div className={styles.listing_key_facts}>
                                <span className={styles.listing_key_fact}><IoCalendarOutline /> {year}</span>
                                <span className={styles.listing_key_fact}><SlSpeedometer /> {kilometer}</span>
                                <span className={styles.listing_key_fact}><RiPaletteLine /> {color}</span>
                            </div>
                        }
                        {/* keyfacts for heavy vehicles */}
                        {
                            identity == 6 &&
                            <div className={styles.listing_key_facts}>
                                <span className={styles.listing_key_fact}><IoCalendarOutline /> {year}</span>
                                <span className={styles.listing_key_fact}><SlSpeedometer /> {kilometer}</span>
                                <span className={styles.listing_key_fact}><BiGasPump /> {fuel}</span>
                                <span className={styles.listing_key_fact}>Cylinders : {cyclinder}</span>
                            </div>
                        }
                        {/* keyfacts for motorcylces */}
                        {
                            identity == 9 &&
                            <div className={styles.listing_key_facts}>
                                <span className={styles.listing_key_fact}><IoCalendarOutline /> {year}</span>
                                <span className={styles.listing_key_fact}><SlSpeedometer /> {kilometer}</span>
                            </div>
                        }
                        {/* keyfacts for sale commercial */}
                        {
                            identity == 14 &&
                            <div className={styles.listing_key_facts}>
                                <span className={styles.listing_key_fact}><span className='bg-blue-500 text-white py-2 px-4 rounded-full text-xs'> {category_type}</span></span>
                                <span className={styles.listing_key_fact}><BsAspectRatio /> {area}</span>
                            </div>
                        }
                        {/* keyfacts for sale residential */}
                        {
                            identity == 15 &&
                            <div className={styles.listing_key_facts}>
                                <span className={styles.listing_key_fact}><span className='bg-blue-500 text-white py-2 px-4 rounded-full text-xs'> {category_type}</span></span>
                                <span className={styles.listing_key_fact}><IoBedOutline /> {bedrooms}</span>
                                <span className={styles.listing_key_fact}><BiBath /> {bathrooms}</span>
                                <span className={styles.listing_key_fact}><BsAspectRatio /> {area}</span>
                            </div>
                        }
                        {/* keyfacts for rent residential */}
                        {
                            identity == 13 &&
                            <div className={styles.listing_key_facts}>
                                <span className={styles.listing_key_fact}><span className='bg-blue-500 text-white py-2 px-4 rounded-full text-xs'> {category_type}</span></span>
                                <span className={styles.listing_key_fact}><IoBedOutline /> {bedrooms}</span>
                                <span className={styles.listing_key_fact}><BiBath /> {bathrooms}</span>
                                <span className={styles.listing_key_fact}><BsAspectRatio /> {area}</span>
                            </div>
                        }
                        {/* keyfacts for rent residential */}
                        {
                            identity == 12 &&
                            <div className={styles.listing_key_facts}>
                                <span className={styles.listing_key_fact}><span className='bg-blue-500 text-white py-2 px-4 rounded-full text-xs'> {category_type}</span></span>
                                <span className={styles.listing_key_fact}><BsAspectRatio /> {area}</span>
                            </div>
                        }
                        {/* keyfacts for classifieds */}
                        {
                            identity == 4 &&
                            <div className={styles.listing_key_facts}>
                                <span className={styles.listing_key_fact}><span className='bg-blue-500 text-white py-2 px-4 rounded-full text-xs'> {ad_age}</span></span>
                                <span className={styles.listing_key_fact}><span className='bg-green-500 text-white py-2 px-4 rounded-full text-xs'> {ad_condition}</span></span>
                            </div>
                        }
                        <div className={styles.listing_location}><SlLocationPin />{location || "Unknown"}</div>
                        <div className={styles.listing_actions}>
                            <div className={styles.list_item_cta}>
                                <button className={styles.ad_chat}> <CiChat2 /> Chat</button>
                                <button className={styles.ad_call}> <CiPhone /> Call</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div >
    )
}

export default ListingCard