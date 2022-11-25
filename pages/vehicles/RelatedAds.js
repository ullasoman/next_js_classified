import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { SlLocationPin } from "react-icons/sl";

const RelatedAds = () => {
    return (
        <section>
            <div className='ads_details'><h2 className='ads_details_heading'>Related Ads</h2></div>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {post()}
                {post()}
                {post()}
                {post()}
                {post()}
            </div>
        </section >
    )
}

export default RelatedAds

function post() {
    return (
        <div className={styles.deals_card}>
            <Link href='#'>
                <div className={styles.deals_img_container}>
                    <Image className={styles.adsImage} src='/images/dummy1.webp' width={208} height={125} alt='dobuyme' />
                </div>
                <div className={styles.deals_price_with_off}>
                    <span>AED </span>
                    <h5 className={styles.product_price}>55,000</h5>
                </div>
                <div className={styles.deal_item_title}>
                    <h2>1 of 4 studios for rent in old town</h2>
                </div>
                <div className={styles.free_delivery}>
                    <SlLocationPin /> <span>Reehan</span>
                </div>
            </Link >
        </div >
    )
}