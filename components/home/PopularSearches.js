import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

const PopularSearches = () => {
    return (
        <section className='m-0'>
            <h2 className={styles.ps_heading}>Popular Searches in UAE Edited</h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {Vehicles()}
                {propertySale()}
                {propertyRent()}
                {classifieds()}
                {businesses()}
                {furniture()}
                {services()}
                {jobs()}
            </div>
        </section >
    )
}

export default PopularSearches

function Vehicles() {
    return (
        <div className={styles.adBox}>
            <div className={styles.abHeader}>
                <Image className={styles.abCategoriesIcon} src='/images/icons/steering-wheel-car.svg' width={40} height={40} />

                <div className={styles.abTitle}>
                    <h5>Vehicles</h5>
                </div>
            </div>
            <div className={styles.abBody}>
                <ul>
                    <li><Link href='/vehicles/used-cars' className={styles.hover}>Used Cars</Link></li>
                    <li><Link href='/vehicles/auto-accessories' className={styles.hover}>Auto Accessories and Parts</Link></li>
                    <li><Link href='/vehicles/boats' className={styles.hover}>Boats</Link></li>
                    <li><Link href='/vehicles/heavy-vehicles' className={styles.hover}>Heavy Vehicles</Link></li>
                    <li><Link href='/vehicles/motorcycles' className={styles.hover}>Motorcycles</Link></li>
                    <li><Link href='/vehicles/number-plates' className={styles.hover}>Number Plates</Link></li>
                    <li><Link href='/vehicles/index' className={styles.view_more}>View All</Link></li>
                </ul>
            </div>
        </div>
    )
}
function propertySale() {
    return (
        <div className={styles.adBox}>
            <div className={styles.abHeader}>
                <Image className={styles.abCategoriesIcon} src='/images/icons/building.svg' width={40} height={40} />

                <div className={styles.abTitle}>
                    <h5>Property Sale</h5>
                </div>
            </div>
            <div className={styles.abBody}>
                <ul>
                    <li><Link href='#' className={styles.hover}>Buy Residential</Link></li>
                    <li><Link href='#' className={styles.hover}>Buy Commercial</Link></li>
                    <li><Link href='#' className={styles.hover}>Apartments For Sale</Link></li>
                    <li><Link href='#' className={styles.hover}>Villa/House for Sale</Link></li>
                    <li><Link href='#' className={styles.hover}>Land for Sale</Link></li>
                    <li><Link href='#' className={styles.hover}>Office</Link></li>
                    <li><Link href='#' className={styles.view_more}>View All</Link></li>
                </ul>
            </div>
        </div>
    )
}
function propertyRent() {
    return (
        <div className={styles.adBox}>
            <div className={styles.abHeader}>
                <Image className={styles.abCategoriesIcon} src='/images/icons/residential.svg' width={40} height={40} />

                <div className={styles.abTitle}>
                    <h5>Property Rent</h5>
                </div>
            </div>
            <div className={styles.abBody}>
                <ul>
                    <li><Link href='#' className={styles.hover}>Rent Residential</Link></li>
                    <li><Link href='#' className={styles.hover}>Rent Commercial</Link></li>
                    <li><Link href='#' className={styles.hover}>Rooms For Rent</Link></li>
                    <li><Link href='#' className={styles.hover}>Apartments For Rent</Link></li>
                    <li><Link href='#' className={styles.hover}>Villa/House for Rent</Link></li>
                    <li><Link href='#' className={styles.hover}>Land For Rent</Link></li>
                    <li><Link href='#' className={styles.view_more}>View All</Link></li>
                </ul>
            </div>
        </div>
    )
}
function classifieds() {
    return (
        <div className={styles.adBox}>
            <div className={styles.abHeader}>
                <Image className={styles.abCategoriesIcon} src='/images/icons/classified.svg' width={40} height={40} />

                <div className={styles.abTitle}>
                    <h5>Classifieds</h5>
                </div>
            </div>
            <div className={styles.abBody}>
                <ul>
                    <li><Link href='#' className={styles.hover}>Electronics</Link></li>
                    <li><Link href='#' className={styles.hover}>Clothing & Accessories</Link></li>
                    <li><Link href='#' className={styles.hover}>Books</Link></li>
                    <li><Link href='#' className={styles.hover}>Baby Items</Link></li>
                    <li><Link href='#' className={styles.hover}>Business & Industrial</Link></li>
                    <li><Link href='#' className={styles.hover}>Cameras & Imaging</Link></li>
                    <li><Link href='#' className={styles.view_more}>View All</Link></li>
                </ul>
            </div>
        </div>
    )
}
function businesses() {
    return (
        <div className={styles.adBox}>
            <div className={styles.abHeader}>
                <Image className={styles.abCategoriesIcon} src='/images/icons/business.svg' width={40} height={40} />

                <div className={styles.abTitle}>
                    <h5>Businesses</h5>
                </div>
            </div>
            <div className={styles.abBody}>
                <ul>
                    <li><Link href='#' className={styles.hover}>Businesses for Sale</Link></li>
                    <li><Link href='#' className={styles.hover}>Food & Beverage</Link></li>
                    <li><Link href='#' className={styles.hover}>Construction</Link></li>
                    <li><Link href='#' className={styles.hover}>Industrial Supplies</Link></li>
                    <li><Link href='#' className={styles.hover}>Manufacturing</Link></li>
                    <li><Link href='#' className={styles.hover}>Retail & Services</Link></li>
                    <li><Link href='#' className={styles.view_more}>View All</Link></li>
                </ul>
            </div>
        </div>
    )
}
function furniture() {
    return (
        <div className={styles.adBox}>
            <div className={styles.abHeader}>
                <Image className={styles.abCategoriesIcon} src='/images/icons/furniture.svg' width={40} height={40} />

                <div className={styles.abTitle}>
                    <h5>Furniture & Home</h5>
                </div>
            </div>
            <div className={styles.abBody}>
                <ul>
                    <li><Link href='#' className={styles.hover}>Curtains & Blinds</Link></li>
                    <li><Link href='#' className={styles.hover}>Furniture</Link></li>
                    <li><Link href='#' className={styles.hover}>Garden & Outdoor</Link></li>
                    <li><Link href='#' className={styles.hover}>Home Accessories</Link></li>
                    <li><Link href='#' className={styles.hover}>Lighting & Fans</Link></li>
                    <li><Link href='#' className={styles.hover}>Tools & Home Improvement</Link></li>
                    <li><Link href='#' className={styles.view_more}>View All</Link></li>
                </ul>
            </div>
        </div>
    )
}
function services() {
    return (
        <div className={styles.adBox}>
            <div className={styles.abHeader}>
                <Image className={styles.abCategoriesIcon} src='/images/icons/services.svg' width={40} height={40} />

                <div className={styles.abTitle}>
                    <h5>Services</h5>
                </div>
            </div>
            <div className={styles.abBody}>
                <ul>
                    <li><Link href='#' className={styles.hover}>Activities</Link></li>
                    <li><Link href='#' className={styles.hover}>Car Lift</Link></li>
                    <li><Link href='#' className={styles.hover}>Childcare</Link></li>
                    <li><Link href='#' className={styles.hover}>Classes</Link></li>
                    <li><Link href='#' className={styles.hover}>Photography</Link></li>
                    <li><Link href='#' className={styles.hover}>Services</Link></li>
                    <li><Link href='#' className={styles.view_more}>View All</Link></li>
                </ul>
            </div>
        </div>
    )
}
function jobs() {
    return (
        <div className={styles.adBox}>
            <div className={styles.abHeader}>
                <Image className={styles.abCategoriesIcon} src='/images/icons/jobs.svg' width={40} height={40} />

                <div className={styles.abTitle}>
                    <h5>Jobs</h5>
                </div>
            </div>
            <div className={styles.abBody}>
                <ul>
                    <li><Link href='#' className={styles.hover}>Jobs Offered</Link></li>
                    <li><Link href='#' className={styles.hover}>Jobs Wanted</Link></li>
                    <li><Link href='#' className={styles.hover}>Accounting & Auditing</Link></li>
                    <li><Link href='#' className={styles.hover}>Airlines & Aviation</Link></li>
                    <li><Link href='#' className={styles.hover}>Architecture & Interior Design</Link></li>
                    <li><Link href='#' className={styles.hover}>Banking & Finance</Link></li>
                    <li><Link href='#' className={styles.view_more}>View All</Link></li>
                </ul>
            </div>
        </div>
    )
}
