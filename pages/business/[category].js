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
    if (category_slug == 'agriculture-forestry') {
        var cat_id = 5350;
    } else if (category_slug == 'businesses-for-sale') {
        var cat_id = 5351;
    } else if (category_slug == 'commercial-printing-copy-machines') {
        var cat_id = 5352;
    } else if (category_slug == 'construction') {
        var cat_id = 5353;
    } else if (category_slug == 'electrical-equipment') {
        var cat_id = 5354;
    } else if (category_slug == 'food-beverage') {
        var cat_id = 5355;
    } else if (category_slug == 'healthcare-lab') {
        var cat_id = 5356;
    } else if (category_slug == 'industrial-supplies') {
        var cat_id = 5357;
    } else if (category_slug == 'manufacturing') {
        var cat_id = 5358;
    } else if (category_slug == 'office-furniture-equipment') {
        var cat_id = 5359;
    } else if (category_slug == 'packing-shipping') {
        var cat_id = 5360;
    } else if (category_slug == 'retail-services') {
        var cat_id = 5361;
    } else if (category_slug == 'other') {
        var cat_id = 5362;
    } else {
        var cat_id = 0;
    }

    return cat_id
}