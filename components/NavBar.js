import Link from 'next/link';
import React from 'react'
import { BiChevronDown, } from "react-icons/bi";
import styles from '../styles/Header.module.css'
const NavBar = () => {
    return (
        <nav>

            <div className='md:container md:mx-auto'>

                <div className={styles.menuList}>
                    <div className="dropdown inline-block relative">
                        <Link className='py-4 rounded inline-flex items-center' href='/vehicles'>
                            <span className="mr-1">Vehicles</span>
                            <BiChevronDown />
                        </Link>
                        <ul className="dropdown-menu absolute hidden bg-white text-gray-700 w-60 shadow rounded">
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/vehicles/used-cars">Used Cars</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/vehicles/auto-accessories">Auto Accessories & Parts</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/vehicles/boats">Boats</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/vehicles/heavy-vehicles">Heavy Vehicles</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/vehicles/motorcycles">Motorcycles</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/vehicles/number-plates">Number Plates</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                        <Link className='py-4 rounded inline-flex items-center' href='/property-for-sale'>
                            <span className="mr-1">Property for Sale</span>
                            <BiChevronDown />
                        </Link>
                        <ul className="dropdown-menu absolute hidden bg-white text-gray-700 w-60 shadow rounded">
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/property-for-sale/buy-residential">Buy Residential</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/property-for-sale/buy-commercial">Buy Commercial</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                        <Link className='py-4 rounded inline-flex items-center' href='/property-for-rent'>
                            <span className="mr-1">Property for Rent</span>
                            <BiChevronDown />
                        </Link>
                        <ul className="dropdown-menu absolute hidden bg-white text-gray-700 w-60 shadow rounded">
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/property-for-rent/rent-residential">Rent Residential</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/property-for-rent/rent-commercial">Rent Commercial</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/property-for-rent/rooms-for-rent">Rooms for Rent</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                        <Link className='py-4 rounded inline-flex items-center' href='/classified'>
                            <span className="mr-1">Classifieds</span>
                            <BiChevronDown />
                        </Link>
                        <ul className="dropdown-menu absolute hidden bg-white text-gray-700 min-w-30 shadow rounded">
                            <div className='grid grid-cols-2'>
                                <div>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified">All Categories</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/baby-items">Baby Items</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/books">Books</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/business-industrial">Business & Industrial</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/cameras-imaging">Cameras & Imaging</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/clothing-accessories">Clothing & Accessories</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/collectibles">Collectibles</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/computers-networking">Computers & Networking</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/dvds-movies">DVDs & Movies</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/electronics">Electronics</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/for-free">For Free</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/furniture-home-garden">Furniture, Home & Garden</Link>
                                    </li>

                                </div>
                                <div>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/gaming">Gaming</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/home-appliances">Home Appliances</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/jewelry-watches">Jewelry & Watches</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/lost-found">Lost/Found</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/misc">Misc</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/music">Music</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/musical-instruments">Musical Instruments</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/pets">Pets</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/sports-equipment">Sports Equipment</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/stuff-wanted">Stuff Wanted</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/tickets-vouchers">Tickets & Vouchers</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/classified/toys">Toys</Link>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                        <Link className='py-4 rounded inline-flex items-center' href='/mobile-phones-tablets'>
                            <span className="mr-1">Mobiles & Tablets</span>
                            <BiChevronDown />
                        </Link>
                        <ul className="dropdown-menu absolute hidden bg-white text-gray-700 w-60 min-w-16 shadow rounded">
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/mobile-phones-tablets/mobile-phones">Mobile Phones</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/mobile-phones-tablets/tablets">Tablets</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/mobile-phones-tablets/mobile-phone-tablet-accessories">Mobile - Tablet Accessories</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/mobile-phones-tablets/other-mobile-phones-tablets">Other</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                        <Link className='py-4 rounded inline-flex items-center' href='/business'>
                            <span className="mr-1">Business</span>
                            <BiChevronDown />
                        </Link>
                        <ul className="dropdown-menu absolute hidden bg-white text-gray-700 w-60 min-w-22 shadow rounded">
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/agriculture-forestry">Agriculture & Forestry</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/businesses-for-sale">Businesses for Sale</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/commercial-printing-copy-machines">Commercial Printing & Copy Machines</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/construction">Construction</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/electrical-equipment">Electrical Equipment</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/food-beverage">Food & Beverage</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/healthcare-lab">Healthcare & Lab</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/industrial-supplies">Industrial Supplies</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/manufacturing">Manufacturing</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/office-furniture-equipment">Office Furniture & Equipment</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/packing-shipping">Packing & Shipping</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/retail-services">Retail & Services</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/business/other">Other</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                        <Link className='py-4 rounded inline-flex items-center' href='/furniture-home-garden'>
                            <span className="mr-1">Furniture, Home & Garden</span>
                            <BiChevronDown />
                        </Link>
                        <ul className="dropdown-menu absolute hidden bg-white text-gray-700 w-60 min-w-16 shadow rounded">
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/furniture-home-garden/curtains-blinds">Curtains & Blinds</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/furniture-home-garden/furniture">Furniture</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/furniture-home-garden/garden-outdoor">Garden & Outdoor</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/furniture-home-garden/home-accessories">Home Accessories</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/furniture-home-garden/lighting-fans">Lighting & Fans</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/furniture-home-garden/rugs-carpets">Rugs & Carpets</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/furniture-home-garden/tools-home-improvement">Tools & Home Improvement</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                        <Link className='py-4 rounded inline-flex items-center' href='/community'>
                            <span className="mr-1">Community</span>
                            <BiChevronDown />
                        </Link>
                        <ul className="dropdown-menu absolute hidden bg-white text-gray-700 w-60 min-w-30 shadow rounded">
                            <div className='grid grid-cols-2'>
                                <div>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community">All Categories</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/activities">Activities</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/artists">Artists</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/car-lift">Car Lift</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/childcare">Childcare</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/classes">Classes</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/photography">Photography</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/services">Services</Link>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/sports">Sports</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/clubs">Clubs</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/domestic">Domestic Helpers</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/education">Education</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/freelancers">Freelancers</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/music">Music</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/news">News</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/health-safety">Health & Safety</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/community/health-fitness">Health & Fitness</Link>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                        <Link className='py-4 rounded inline-flex items-center' href='/jobs'>
                            <span className="mr-1">Jobs</span>
                            <BiChevronDown />
                        </Link>
                        <ul className="dropdown-menu absolute hidden bg-white text-gray-700 w-60 shadow rounded">
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/jobs/jobs-offered">Jobs Offered</Link>
                            </li>
                            <li>
                                <Link className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/jobs/jobs-wanted">Jobs Wanted</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar