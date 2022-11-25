import Head from 'next/head'
import React from 'react'
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';
import ListingCard from '../../components/listing/ListingCard';

export default function rentresidential() {

    const { data, isLoading, isError } = fetcher('search/rent-residential')

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    return (
        <section className="container mx-auto">

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Buy Commercial Property : Buy and sell Sell Anything Online - New &amp; Used items for sale Dobuyme ,United Arab Emirates</title>
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
    const { id, identity, breadcrumb, title, images, currency, price, location, category_type, bedrooms, bathrooms, area } = data;
    return (
        <ListingCard key={id} id={id} identity={identity} breadcrumb={breadcrumb} title={title} images={images} currency={currency} price={price} location={location} category_type={category_type} bedrooms={bedrooms} bathrooms={bathrooms} area={area} />
    )
}