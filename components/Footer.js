import Link from 'next/link';
import React from 'react'
import { TfiInfo, TfiHeadphoneAlt } from "react-icons/tfi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='footer'>
            <style jsx>
                {`
                    .footer_section {
                        width: 100%;
                    }
                    .footer_header{
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        background-color: #007bff17;
                        padding: 15px 50px;
                    }
                    .header_left{
                        display: flex;
                        flex-direction: column;
                    }
                    .header_left h2{
                        color: #1a1a1a;
                        font-size: 22px;
                        font-weight: 700;
                    }
                    .header_left span{
                        color: #1a1a1a;
                        font-size: 14px;
                        font-weight: 400;
                    }
                    .header_right{
                        display: flex;
                        align-items: center;
                    }
                    .help_contact{
                        display: flex;
                        align-items: center;
                        margin-left: 30px;
                    }
                    .help_contact_icon{
                        width: 50px;
                        height: 50px;
                        background: #fff;
                        box-shadow: 2px 4px 20px #3470a833;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 5px;
                    }
                    .help_icon{
                        border: 2px solid #34a853;
                        border-radius: 8px;
                        padding: 5px;
                    }
                    .help_contact_text{
                        display: flex;
                        flex-direction: column;
                        margin-left: 10px;
                    }
                    .help_contact_text span{
                        color: #1a1a1a;
                        font-weight: 400;
                        font-size: 14px;
                    }
                    .help_contact_text a{
                        font-size: 14px;
                        font-weight: 600;
                        margin-top: 5px;
                        color: #000;
                        text-decoration: underline;
                    }
                    .footer_middle_section{
                        width:100%;
                        padding: 50px 0;
                    }
                    .fsm_box h2{
                        font-size: 16px;
                        font-weight: 600;
                        color: #1a1a1a;
                        margin-bottom: 15px;
                    }
                    .fsm_box ul li{
                        margin-bottom: 8px;
                    }
                    .fsm_box ul li a{
                        color: #75777c;
                        font-size: 14px;
                        font-weight: 400;
                    }
                    .footer_middle_bottom{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        border-top: 1px dashed rgba(0,0,0,.2);
                        margin-top: 30px;
                        padding: 30px 50px;
                    }
                    .footer_middle_left_col h2,.footer_middle_right_col h2{
                        color: #1a1a1a;
                        font-weight: 600;
                        font-size: 20px;
                        margin-bottom: 15px;
                    }
                    .app_badges,.social_links{
                        display: flex;
                        align-items: center;
                    }
                    
                    .footer_bottom_section{
                        display: flex;
                        padding: 30px 50px;
                        align-items: center;
                        justify-content: space-between;
                        background: #37475A;
                    }
                    .copyright_info{
                        display: flex;
                        align-items: center;
                    }
                    .copyright_info span{
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        color: #fff;
                        font-weight: 500;
                    }
                    .copyright_info p{
                        font-size: 14px;
                        color: #fff;
                        font-weight: 300;
                        margin: 0 4px;
                    }
                    .pages_info{
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }
                    .pages_info ul{
                        display: flex;
                        align-items: center;
                        list-style: none;
                        gap: 10px;
                    }
                    .pages_info ul li{
                        color: #fff;
                        font-size: 14px;
                        text-decoration: none;
                        font-weight: 500;
                    }
                `}
            </style>
            <div className='footer_section'>
                <div className='footer_header'>
                    <div className='header_left'>
                        <h2>We're Always Here To Help</h2>
                        <span>Reach out to us through any of these support channels</span>
                    </div>
                    <div className='header_right'>
                        <div className='help_contact'>
                            <div className='help_contact_icon'>
                                <div className='help_icon'><TfiInfo /></div>
                            </div>
                            <div className='help_contact_text'>
                                <span>Get Help At</span>
                                <Link href='mailto:support@dubada.com'>support@dubada.com</Link>
                            </div>
                        </div>
                        <div className='help_contact'>
                            <div className='help_contact_icon'>
                                <div className='help_icon'><TfiHeadphoneAlt /></div>
                            </div>
                            <div className='help_contact_text'>
                                <span>Contact Support</span>
                                <Link href='mailto:support@dubada.com'>Click here to contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:container md:mx-auto footer_middle_section'>
                    <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-5'>
                        <div className='fsm_box'>
                            <h2>Company</h2>
                            <ul>
                                <li><Link href='#'>About Us</Link></li>
                                <li><Link href='#'>Careers</Link></li>
                                <li><Link href='#'>Terms & Conditions</Link></li>
                                <li><Link href='#'>Privacy Policy</Link></li>
                                <li><Link href='#'>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div className='fsm_box'>
                            <h2>Help</h2>
                            <ul>
                                <li><Link href='#'>Live Chat</Link></li>
                                <li><Link href='#'>Support</Link></li>
                                <li><Link href='#'>Login</Link></li>
                                <li><Link href='#'>Signup</Link></li>
                                <li><Link href='#'>Contact Us</Link></li>
                                <li><Link href='#'>Sitemap</Link></li>
                            </ul>
                        </div>
                        <div className='fsm_box'>
                            <h2>UAE</h2>
                            <ul>
                                <li><Link href='#'>Dubai</Link></li>
                                <li><Link href='#'>Umm Al Quwain</Link></li>
                                <li><Link href='#'>Ras Al Khaimah</Link></li>
                                <li><Link href='#'>Sharjah</Link></li>
                                <li><Link href='#'>Ajman</Link></li>
                                <li><Link href='#'>Abu Dhabi</Link></li>
                                <li><Link href='#'>Fujairah</Link></li>
                                <li><Link href='#'>Al Ain</Link></li>
                            </ul>
                        </div>
                        <div className='fsm_box'>
                            <h2>Countries</h2>
                            <ul>
                                <li><Link href='#'>United Arab Emirates</Link></li>
                                <li><Link href='#'>Saudi Arabia</Link></li>
                                <li><Link href='#'>Qatar</Link></li>
                                <li><Link href='#'>Oman</Link></li>
                                <li><Link href='#'>Kuwait</Link></li>
                                <li><Link href='#'>Bahrain</Link></li>
                                <li><Link href='#'>Lebanon</Link></li>
                                <li><Link href='#'>Egypt</Link></li>
                                <li><Link href='#'>Iraq</Link></li>
                                <li><Link href='#'>Algeria</Link></li>
                                <li><Link href='#'>Morocco</Link></li>
                            </ul>
                        </div>
                        <div className='fsm_box'>
                            <h2>Stay in touch</h2>
                            <ul>
                                <li><Link href='#'>Facebook</Link></li>
                                <li><Link href='#'>Twitter</Link></li>
                                <li><Link href='#'>Youtube</Link></li>
                                <li><Link href='#'>Instagram</Link></li>
                            </ul>
                        </div>
                        <div className='fsm_box'>
                            <h2>Stay in touch</h2>
                            <ul>
                                <li><Link href='#'>English</Link></li>
                                <li><Link href='#'>عربى</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer_middle_bottom'>
                    <div className='footer_middle_left_col'>
                        <h2>Download the app Now!</h2>
                        <div className='app_badges'>
                            <Link href='#'><Image src='/images/apple-store.png' width={125} height={100} /></Link>
                            <Link href='#'><Image src='/images/play-store.png' width={125} height={100} /></Link>
                        </div>
                    </div>
                    <div className='footer_middle_right_col'>
                        <h2>Connect With Us!</h2>
                        <div className='social_links'>
                            <Link target="_blank" href='#' className='social_icons'><FaFacebookF /></Link>
                            <Link target="_blank" href='#' className='social_icons'><FaTwitter /></Link>
                            <Link target="_blank" href='#' className='social_icons'><FaYoutube /></Link>
                            <Link target="_blank" href='#' className='social_icons'><FaInstagram /></Link>
                        </div>
                    </div>
                </div>
                <div className='footer_bottom_section'>
                    <div className='copyright_info'>
                        <span>Copyright © 2022 dubada.com |</span>
                        <p>powered by Ullas Soman</p>
                    </div>
                    <div className='pages_info'>
                        <ul>
                            <li><Link href='#'>Free Delivery Policy</Link></li>
                            <li><Link href='#'>Return Policy</Link></li>
                            <li><Link href='#'>About Us</Link></li>
                            <li><Link href='#'>Terms and conditions</Link></li>
                            <li><Link href='#'>FAQs</Link></li>
                            <li><Link href='#'>Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
