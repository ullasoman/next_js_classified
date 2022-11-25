import React from 'react'
import { useRouter } from 'next/router'
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';
import Image from 'next/image';
import Link from 'next/link';
import CarFeatures from '../../components/view/CarFeatures';
import Description from '../../components/view/Description';
import { Mapmarker } from '../../components/view/Mapmarker';
import ProductImagesSlider from '../../components/view/ProductImagesSlider';
import AdContentRight from '../../components/view/AdContentRight';
import RelatedAds from './RelatedAds';

//import { productImages } from './public'

const addetails = () => {
    const router = useRouter()
    const param = router.query.adid
    if (!param) {
        return '';
    }

    let ad_id = param.split('-').pop();
    const { data, isLoading, isError } = fetcher('view/details?id=' + ad_id + '&identity=3')

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    const { id, ad_category, breadcrumb, title, pictures, description, location } = data;
    const current_bc = breadcrumb[2].name;

    return (

        <div className='md:container md:mx-auto'>
            <style jsx>{`
            .ad_details_container{
                display:flex;
                flex-direction:column;
                gap: 15px;
                margin: 15px 0;
            }
            .ad_details_header_row{
                width: 100%;
                padding: 20px 0;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .product_title{
                font-size: 24px;
                font-weight: 600;
                line-height: 2rem;
                margin: 0;
                word-break: break-word;
                display: flex;
                align-items: center;
                color: #2d2d2d;
            }
            .ad_content{
                display:flex;
                gap:15px;
            }
            
            .ad_content_left{
                width:70%;
            }
            .ad_img_box{
                width: 100%;
                height:auto;
            }
            .ad_img{
                object-fit:cover;
            }
            .detail_columns{
                display: flex;
                flex-direction: column;
                padding:20px 0;
            }
            
            `}

            </style>
            <div className='ad_details_container'>
                <div className='ad_details_header_row'>
                    <nav className="text-black" aria-label="Breadcrumb">
                        <ol className="list-none p-0 inline-flex">
                            <li className="flex items-center">
                                <Link href='#' className='text-slate-500'>{breadcrumb[0].name}</Link>
                                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
                            </li>
                            <li className="flex items-center">
                                <Link href='#' className='text-slate-500'>{breadcrumb[1].name}</Link>
                                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
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
                <div className='ad_content'>
                    <div className='ad_content_left'>
                        <div className='ad_img_box'>
                            <ProductImagesSlider data={data} />
                        </div>
                        <div className='detail_columns'>

                            {/* Ads CarFeatures*/}
                            <CarFeatures data={data} />

                            {/* Ads Description*/}
                            <Description description={description} />

                            {/* Ads Location*/}
                            <Mapmarker current_bc={breadcrumb[2].name} location={location} />
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