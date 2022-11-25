import Head from 'next/head'

import Banner from '../components/home/Banner';
import PopularSearches from '../components/home/PopularSearches';
import Trending from '../components/home/Trending';
import Properties from '../components/home/Properties';
import Motors from '../components/home/Motors';
import FurnitureAndHomeGarden from '../components/home/FurnitureAndHomeGarden';
import Classifieds from '../components/home/Classifieds';

export default function Home() {
  return (
    <div className='md:container md:mx-auto'>
      <Head>
        <title>Dobuyme  Classifieds - Best place to rent a property, sell a car or find a job in</title>
        <meta name="description" content="Dobuyme is your leading free classifieds website in  to buy, sell and find anything. Find a properties, cars, jobs, or items for sale in ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <PopularSearches />
      <Trending />
      <Properties />
      <Motors />
      <FurnitureAndHomeGarden />
      <Classifieds />
    </div>
  )
}
