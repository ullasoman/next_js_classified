import Head from 'next/head'
import React from 'react'
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';
import ListingCard from '../../components/listing/ListingCard';

export default function motorcycles() {

    const { data, isLoading, isError } = fetcher('search/motorcycle')

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    return (
        <section className="container mx-auto">

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Buy and sell any car in online - used cars for sale in Dubai | Dobuyme</title>
                <meta name="description" content="Buy & sell used cars, motorcycles, special number plates, truck vehicles, automotive parts & accessories online at cheap prices in United Arab Emirates on  and reach our automotive market of 1.6+ million buyers in the United Arab Emirates." />
            </Head>
            {
                (data || []).map((value, index) => (
                    <Ads data={value} key={index}></Ads>
                ))
            }
        </section>
    )
}


function Ads({ data }) {
    const { id, identity, breadcrumb, title, title_for_vue_url, images, currency, price, year, kilometers, color, location } = data;
    return (
        <ListingCard key={id} id={id} identity={identity} directory={'motorcycles'} breadcrumb={breadcrumb} title={title} title_for_vue_url={title_for_vue_url} images={images} currency={currency} price={price} year={year} kilometer={kilometers} color={color} location={location} />
    )
}