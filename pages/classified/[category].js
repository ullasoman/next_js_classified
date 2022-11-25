import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';
import ListingCard from '../../components/listing/ListingCard';
import NoDataFound from '../../components/_child/NoDataFound';

const category = () => {
    const router = useRouter()
    const category_slug = router.query.category
    const parts = router.asPath.split('-')

    const { data, isLoading, isError } = fetcher('search/classifieds?main_category=' + category_id(category_slug))

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
    if (category_slug == 'baby-items') {
        var cat_id = 15;
    } else if (category_slug == 'books') {
        var cat_id = 16;
    } else if (category_slug == 'business-industrial') {
        var cat_id = 17;
    } else if (category_slug == 'cameras-imaging') {
        var cat_id = 18;
    } else if (category_slug == 'clothing-accessories') {
        var cat_id = 19;
    } else if (category_slug == 'collectibles') {
        var cat_id = 20;
    } else if (category_slug == 'computers-networking') {
        var cat_id = 21;
    } else if (category_slug == 'dvds-movies') {
        var cat_id = 22;
    } else if (category_slug == 'electronics') {
        var cat = 23;
    } else if (category_slug == 'for-free') {
        var cat_id = 24;
    } else if (category_slug == 'furniture-home-garden') {
        var cat_id = 25;
    } else if (category_slug == 'gaming') {
        var cat_id = 26;
    } else if (category_slug == 'home-appliances') {
        var cat_id = 27;
    } else if (category_slug == 'jewelry-watches') {
        var cat_id = 28;
    } else if (category_slug == 'lost-found') {
        var cat_id = 29;
    } else if (category_slug == 'misc') {
        var cat_id = 30;
    } else if (category_slug == 'mobile-phones-tablets') {
        var cat_id = 31;
    } else if (category_slug == 'music') {
        var cat_id = 32;
    } else if (category_slug == 'musical-instruments') {
        var cat_id = 33;
    } else if (category_slug == 'pets') {
        var cat_id = 34;
    } else if (category_slug == 'sports-equipment') {
        var cat_id = 35;
    } else if (category_slug == 'stuff-wanted') {
        var cat_id = 36;
    } else if (category_slug == 'tickets-vouchers') {
        var cat_id = 37;
    } else if (category_slug == 'toys') {
        var cat_id = 38;
    } else {
        var cat_id = 0;
    }

    return cat_id
}