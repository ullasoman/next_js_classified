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

    const { data, isLoading, isError } = fetcher('search/community?category=' + category_id(category_slug))

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
    if (category_slug == 'activities') {
        var cat_id = 118;
    } else if (category_slug == 'artists') {
        var cat_id = 119;
    } else if (category_slug == 'car-lift') {
        var cat_id = 120;
    } else if (category_slug == 'childcare') {
        var cat_id = 121;
    } else if (category_slug == 'classes') {
        var cat_id = 122;
    } else if (category_slug == 'clubs') {
        var cat_id = 123;
    } else if (category_slug == 'domestic') {
        var cat_id = 124;
    } else if (category_slug == 'education') {
        var cat_id = 125;
    } else if (category_slug == 'freelancers') {
        var cat_id = 126;
    } else if (category_slug == 'music') {
        var cat_id = 127;
    } else if (category_slug == 'news') {
        var cat_id = 128;
    } else if (category_slug == 'photography') {
        var cat_id = 129;
    } else if (category_slug == 'services') {
        var cat_id = 130;
    } else if (category_slug == 'sports') {
        var cat_id = 131;
    } else if (category_slug == 'health-safety') {
        var cat_id = 5761;
    } else if (category_slug == 'health-fitness') {
        var cat_id = 5762;
    } else {
        var cat_id = 0;
    }

    return cat_id
}