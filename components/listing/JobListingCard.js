import React from 'react'
import Link from 'next/link'
import styles from '../../styles/JobCard.module.css'
import { BsClock, BsBriefcase, BsGeoAlt, BsHeart } from "react-icons/bs";
import Image from 'next/image';


const JobListingCard = ({ id, identity, breadcrumb, title, company, commitment, expected_salary, work_experience, education_level, location }) => {
    return (
        <div className={styles.job_list_container}>
            <Link href='#' className={styles.jlc_box}>
                <div className={styles.jlc_box_content}>
                    <div>
                        <span>{breadcrumb}</span>
                    </div>
                    <div className={styles.jlc_bc_title}>
                        <h5>{title}</h5> <span><BsHeart /></span>
                    </div>
                    {
                        company &&
                        <div className={styles.company_name}>{company}</div>
                    }
                    <div className={styles.salary_range}>{expected_salary}</div>
                    <div className={styles.summary_wrapper}>
                        {
                            commitment &&
                            <div className={styles.sw_key_fact}><BsClock /><span>{commitment}</span></div>
                        }
                        {
                            work_experience &&
                            <div className={styles.sw_key_fact}><BsBriefcase /><span>{work_experience}</span></div>
                        }

                        <div className={styles.sw_key_fact}>
                            <Image src="https://dbzproperty-a.akamaihd.net/frontend-web/listings/assets/listing-card-icons/qualification2.svg" width='20' height='20' />
                            <span>{education_level}</span></div>
                        <div className={styles.sw_key_fact}><BsGeoAlt /><span>{location}</span></div>
                    </div>

                </div>
            </Link >
        </div >
    )
}

export default JobListingCard