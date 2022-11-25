import React from 'react'
import { useRouter } from 'next/router'
import fetcher from '../../../lib/fetcher';
import Spinner from '../../../components/_child/spinner';
import Error from '../../../components/_child/error';
import Image from 'next/image';
import Link from 'next/link';
import CarFeatures from '../../../components/view/CarFeatures';
import Description from '../../../components/view/Description';
import { Mapmarker } from '../../../components/view/Mapmarker';
import ProductImagesSlider from '../../../components/view/ProductImagesSlider';
import AdContentRight from '../../../components/view/AdContentRight';
import RelatedAds from '.././RelatedAds';
import { BsChevronRight, BsShare } from "react-icons/bs";

import styles from '../../../styles/AdView.module.css'
import AdShare from '../../../components/view/AdShare';

const addetails = () => {
    const router = useRouter()
    const param = router.query.adid
    if (!param) {
        return '';
    }

    let ad_id = param.split('-').pop();
    const { data, isLoading, isError } = fetcher('view/details?id=' + ad_id + '&identity=11')

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    const { id, ad_category, breadcrumb, title, pictures, description, location } = data;
    const current_bc = breadcrumb[2].name;

    return (

        <div className='md:container md:mx-auto'>
            <div className={styles.ad_details_container}>
                <div className={styles.ad_details_header_row}>
                    <nav className="text-black" aria-label="Breadcrumb">
                        <ol className="list-none p-0 inline-flex">
                            <li className="flex items-center">
                                <Link href='/vehicles/number-plates' className='text-slate-500'>{breadcrumb[0].name}</Link>
                                <BsChevronRight />
                            </li>
                            <li className="flex items-center">
                                <Link href='#' className='text-slate-500'>{breadcrumb[1].name}</Link>
                                <BsChevronRight />
                            </li>
                            <li>
                                <span>{breadcrumb[2].name}</span>
                            </li>
                        </ol>
                    </nav>
                    <div>
                        <h2 className='text-3xl font-semibold product_title'>{title}</h2>
                    </div>
                </div>
                <div className={styles.ad_content}>
                    <div className={styles.ad_content_left}>
                        <div className='ad_image_container'>
                            <AdShare />
                            <div className={styles.ad_img_box}>
                                <Image src={pictures} width='600' height='400' />
                            </div>
                        </div>
                        <div className={styles.detail_columns}>

                            {/* Ads Description*/}
                            <Description description={description} />

                            {/* Ads Location*/}
                            <Mapmarker current_bc={breadcrumb[1].name} location={location} />
                        </div>

                    </div>
                    <AdContentRight data={data} />
                </div>
                {/* Related Ads */}
                <RelatedAds />
            </div>
        </div >
    )
}

export default addetails