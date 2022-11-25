import Head from 'next/head'
import React from 'react'
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';
import ListingCard from '../../components/listing/ListingCard';

export default function usedcars() {

    const { data, isLoading, isError } = fetcher('search/car')

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
                    <Post data={value} key={index}></Post>
                ))
            }
        </section>
    )
}


function Post({ data }) {
    const { id, identity, images, breadcrumb, title, title_for_vue_url, currency, price, year, kilometer, color, location } = data;
    return (
        <ListingCard key={id} id={id} identity={identity} directory={'used-cars'} breadcrumb={breadcrumb} images={images} title={title} title_for_vue_url={title_for_vue_url} currency={currency} price={price} year={year} kilometer={kilometer} color={color} location={location} />
    )
}