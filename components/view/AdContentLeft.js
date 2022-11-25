import React from 'react'
import AdsImages from './AdsImages';
import CarFeatures from './CarFeatures';
import Description from './Description';
import { Mapmarker } from './Mapmarker';

export const AdContentLeft = (data) => {
    const { id, model, title, pictures, year, kilometer, color, door, specs, fuel, warranty, transmission_type, body_type, body_condition, mechanical_condition, trim, number_of_cylinders, horse_power, extras, technical_features, description, location } = data;
    const answer_array = pictures.split(',');
    return (
        <>
            <style>
                {`
                .ad_content_left{
                    width:70%;
                }
                .ad_img_box{
                    width: 100%;
                    height:500px;
                }
                .ad_img{
                    object-fit:cover;
                }
                `}
            </style>
            <div className='ad_content_left'>
                <div className='ad_img_box'>
                    <Image className='ad_img' src={answer_array[0]} width="1152" height="280" alt={title}></Image>
                </div>
                <div className='detail_columns'>

                    {/* Ads CarFeatures*/}
                    <CarFeatures year={year} kilometer={kilometer} door={door} color={color} fuel={fuel} specs={specs} transmission_type={transmission_type} body_type={body_type} body_condition={body_condition} mechanical_condition={mechanical_condition} trim={trim} number_of_cylinders={number_of_cylinders} horse_power={horse_power} extras={extras} technical_features={technical_features} />

                    {/* Ads Description*/}
                    <Description description={description} />

                    {/* Ads Location*/}
                    <Mapmarker key={id} model={model} location={location} />
                </div>

            </div>
        </>
    )
}
