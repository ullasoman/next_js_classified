import Head from 'next/head'
import React from 'react'
import styles from '../../styles/AdListing.module.css'
import { SlHeart, SlPicture, SlSpeedometer, SlLocationPin } from "react-icons/sl";
import { RiPaletteLine } from "react-icons/ri";
import { CiChat2, CiPhone } from "react-icons/ci";
import { BiHeart } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';


export default function usedcars() {

    const { data, isLoading, isError } = fetcher('listing/motors?identity=25')

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    return (
        <section className="container mx-auto">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Buy and sell any car in online - used cars for sale in Dubai | Dobuyme</title>
                <meta name="description" content="Buy & sell used cars, motorcycles, special number plates, truck vehicles, automotive parts & accessories online at cheap prices in United Arab Emirates on  and reach our automotive market of 1.6+ million buyers in the United Arab Emirates." />
            </Head>
            {
                (data || []).map((value, index) => (
                    <Post data={value} key={index}></Post>
                ))
            }
        </section>
    )
}


function Post({ data }) {
    const { id, make, model, ad_category, title, images, currency, price, year, kilometer, color, location } = data;
    return (
        <>
            <div className={styles.ad_listing_container}>
                <Link href='#'>
                    <div className={styles.ad_box}>
                        <div className={styles.ad_image_container}>

                            <div className={styles.ad_img}>
                                <div className={styles.img_count}><span><SlPicture /></span> 10</div>
                                <Image src={images[0] || "/"} width='321' height='214' />
                            </div>

                        </div>
                        <div className={styles.listing_info_container}>
                            <span className={styles.listing_breadcrumbs}>Cars / {make || 'Unknown'} / {model || 'Unknown'}</span>
                            <h2 className={styles.listing_title}>{title || "Title"}</h2>
                            <div className={styles.featured_badge}><button className={styles.ad_fav_btn}><BiHeart /></button></div>
                            <div className="sm-list-attr">
                                <div className={styles.listing_price}>
                                    <span className={styles.listing_price_attrs}>{currency || 'Unknown'}</span>
                                    <span className={styles.listing_price_amount}>{price || 'Unknown'}</span>
                                </div>
                            </div>
                            <div className={styles.listing_key_facts}>
                                <span className={styles.listing_key_fact}><IoCalendarOutline /> {year || 'Unknown'}</span>
                                <span className={styles.listing_key_fact}><SlSpeedometer /> {kilometer || 'Unknown'}</span>
                                <span className={styles.listing_key_fact}><RiPaletteLine /> {color || 'Unknown'}</span>
                            </div>
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
            </div>
        </>
    )
}