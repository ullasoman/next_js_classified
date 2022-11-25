import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { BiSearch, BiUser, BiMap, BiPlus, BiChevronDown, } from "react-icons/bi";

import styles from '../styles/Header.module.css'
import NavBar from './NavBar';


const Header = () => {
    return (
        <header>
            <div className='md:container md:mx-auto'>
                <div className={styles.top_row}>
                    <div>
                        <Link href='/'><Image src='/dubada.png' width={150} height={100} alt='dobuyme' /></Link>
                    </div>

                    <div>
                        <section className={styles.classified_search_container}>
                            <div className={styles.search_body}>
                                <div className={styles.input_container}>
                                    <div className={styles.search_text}>
                                        <input type='text' />
                                    </div>
                                    <div className={styles.search_icon}>
                                        <button className={styles.search_btn}><BiSearch /></button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className='flex justify-between gap-5'>
                        <div className='flex items-center gap-1'><BiUser /><Link href='/login'>Login</Link> or <Link href='/register'>Register</Link></div><div className={styles.li_border}></div>
                        <div className='flex items-center gap-1'><BiMap /> All Cities</div><div className={styles.li_border}></div>
                        <div>عربي</div>
                    </div>
                    <div>
                        <Link href='/post-ad'><span className={styles.postAdBtn}> <BiPlus className='plus-anim' />Post Free Ad</span></Link>
                    </div>

                </div>
            </div>

            <NavBar />
        </header >

    )
}

export default Header