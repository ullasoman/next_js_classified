import React from 'react'
import Head from 'next/head'
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';
import ListingCard from '../../components/listing/ListingCard';
import NoDataFound from '../../components/_child/NoDataFound';

const home = (context) => {

    const { data, isLoading, isError } = fetcher('search/classifieds?main_category=25')

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

export default home

function Ads({ data }) {
    const { id, identity, breadcrumb, title, images, currency, price, year, location, ad_age, ad_condition } = data;
    return (
        <ListingCard key={id} id={id} identity={identity} breadcrumb={breadcrumb} title={title} images={images} currency={currency} price={price} location={location} ad_age={ad_age} ad_condition={ad_condition} />
    )
}
