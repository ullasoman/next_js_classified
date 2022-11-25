import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { SlLocationPin } from "react-icons/sl";

const Motors = () => {
    return (
        <section>
            <h2 className={styles.ps_heading}>What's new in  <span className={styles.higlight_title}>Motors</span></h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {ads()}
                {ads()}
                {ads()}
                {ads()}
                {ads()}
            </div>
        </section >
    )
}

export default Motors

function ads() {
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