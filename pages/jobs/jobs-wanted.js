import Head from 'next/head'
import React from 'react'
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';
import ListingCard from '../../components/listing/ListingCard';
import JobListingCard from '../../components/listing/JobListingCard';

export default function jobsoffered() {

    const { data, isLoading, isError } = fetcher('search/job-wanted')

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
    const { id, identity, breadcrumb, title, education_level, location } = data;
    return (
        <JobListingCard key={id} id={id} identity={identity} breadcrumb={breadcrumb} title={title} education_level={education_level} location={location} />
    )
}