import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';
import ListingCard from '../../components/listing/ListingCard';
import NoDataFound from '../../components/_child/NoDataFound';

const category = (context) => {
    const router = useRouter()
    const category_slug = router.query.category
    const parts = router.asPath.split('-')

    const { data, isLoading, isError } = fetcher('search/classifieds?category=' + category_id(category_slug))

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>
    if (data.length == 0) return <NoDataFound />
    return (
        <section className="container mx-auto">

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Classifieds: Buy and sell Sell Anything Online - New &amp; Used items for sale Dobuyme ,United Arab Emirates</title>
                <meta name="description" content="Buy & sell used cars, motorcycles, special number plates, truck vehicles, automotive parts & accessories online at cheap prices in United Arab Emirates on  and reach our automotive market of 1.6+ million buyers in the United Arab Emirates." />
            </Head>
            {

                data && (data).map((value, index) => (
                    <Ads data={value} key={index}></Ads>
                ))

            }
        </section>
    )
}

export default category

function Ads({ data }) {
    const { id, identity, breadcrumb, title, images, currency, price, year, location, ad_age, ad_condition } = data;
    return (
        <ListingCard key={id} id={id} identity={identity} breadcrumb={breadcrumb} title={title} images={images} currency={currency} price={price} location={location} ad_age={ad_age} ad_condition={ad_condition} />
    )
}

function category_id(category_slug) {
    if (category_slug == 'curtains-blinds') {
        var cat_id = 5434;
    } else if (category_slug == 'furniture') {
        var cat_id = 5435;
    } else if (category_slug == 'garden-outdoor') {
        var cat_id = 5436;
    } else if (category_slug == 'home-accessories') {
        var cat_id = 5437;
    } else if (category_slug == 'lighting-fans') {
        var cat_id = 5438;
    } else if (category_slug == 'rugs-carpets') {
        var cat_id = 5439;
    } else if (category_slug == 'tools-home-improvement') {
        var cat_id = 5440;
    } else {
        var cat_id = 0;
    }

    return cat_id
}