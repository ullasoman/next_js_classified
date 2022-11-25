import Image from 'next/image'
import React from 'react'
import { BiGasPump } from "react-icons/bi";
import { BsCalendar3, BsSpeedometer2, BsPalette } from "react-icons/bs";
const CarFeatures = ({ data }) => {

    const { year, kilometer, color, door, specs, fuel, warranty, transmission_type, body_type, body_condition, mechanical_condition, trim, number_of_cylinders, horse_power, extras, technical_features } = data;
    return (
        <>
            {/* Car Features */}
            <style>
                {`
                .icon_features{
                    display: grid;
                    grid-template-columns: repeat(4,1fr);
                    grid-gap: 1em;
                    list-style: none;
                }
                .feat_icon{
                    font-size:30px;
                    color:#778997;
                }
                .feature_item_content{
                    display: flex;
                    align-items: center;
                    box-shadow: 0 0 15px -3px #00000012,0 4px 6px -2px #0000000a;
                    height: 53px;
                    padding: 10px;
                    border-radius: 8px;
                }
                .fetaure_item_value{
                    margin-left: 15px;
                    display: flex;
                    flex-direction: column;
                }
                .fiv_head{
                    font-size: 14px;
                    font-weight: 500;
                    color: #2b2b2b;
                }
                .fiv_child{
                    font-size: 14px;
                    font-weight: 400;
                    color: #515b62;
                }
                
            
            .details_data{
                width: 100%;
                margin-bottom: 50px;
            }
            .ad_list_item{
                clear: both;
                width: 100%;
                padding: 10px;
                border-bottom: 1px solid #e7e7e7;
            }
            .col_left{
                display: inline-block;
                width: 30%;
                vertical-align: top;
                font-size: 15px;
                color: #2b2b2b;
                font-weight: 600;
            }
            .col_right{
                display: inline-block;
                width: 70%;
                color: gray;
                font-size: 15px;
                font-weight: 400;
                text-transform: capitalize;
            }
                `}
            </style>
            <div className='fetaures_car'>
                <ul className='icon_features'>
                    <li>
                        <div className='feature_item_content'>
                            <img src='/images/icons/calendar.svg' />
                            <div className='fetaure_item_value'>
                                <span className='fiv_head'>Year</span>
                                <span className='fiv_child'>{year}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='feature_item_content'>
                            <img src='/images/icons/odoometer.svg' />
                            <div className='fetaure_item_value'>
                                <span className='fiv_head'>Total Drived</span>

                                <span className='fiv_child'>{kilometer}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='feature_item_content'>
                            <img src='/images/icons/car.png' />
                            <div className='fetaure_item_value'>
                                <span className='fiv_head'>Doors</span>
                                <span className='fiv_child'>{door}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='feature_item_content'>
                            <img src='/images/icons/color-picker.png' />
                            <div className='fetaure_item_value'>
                                <span className='fiv_head'>Color</span>
                                <span className='fiv_child'>{color}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='feature_item_content'>
                            <img src='/images/icons/gas-station.png'></img>
                            <div className='fetaure_item_value'>
                                <span className='fiv_head'>Fuel</span>
                                <span className='fiv_child'>{fuel}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='feature_item_content'>
                            <img src='/images/icons/specification.png' />
                            <div className='fetaure_item_value'>
                                <span className='fiv_head'>Specification</span>
                                <span className='fiv_child'>{specs}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='feature_item_content'>
                            <img src='/images/icons/transmission.png' />
                            <div className='fetaure_item_value'>
                                <span className='fiv_head'>Transmission</span>
                                <span className='fiv_child'>{transmission_type}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='feature_item_content'>
                            <img src='/images/icons/chassis.png' />
                            <div className='fetaure_item_value'>
                                <span className='fiv_head'>Body Type</span>
                                <span className='fiv_child'>{body_type}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            {/* Ads Details*/}
            <div className='ads_details'>
                <h2 className='ads_details_heading'>Details</h2>
                <div className='details_data'>
                    <ul>
                        <li className='ad_list_item'>
                            <span className='col_left'>Body Condition</span>
                            <span className='col_right'>{body_condition}</span>
                        </li>
                        <li className='ad_list_item'>
                            <span className='col_left'>Mechanical Condition</span>
                            <span className='col_right'>{mechanical_condition}</span>
                        </li>
                        <li className='ad_list_item'>
                            <span className='col_left'>Trim</span>
                            <span className='col_right'>{trim}</span>
                        </li>
                        <li className='ad_list_item'>
                            <span className='col_left'>No. Of Cylinders</span>
                            <span className='col_right'>{number_of_cylinders}</span>
                        </li>
                        <li className='ad_list_item'>
                            <span className='col_left'>Horsepower</span>
                            <span className='col_right'>{horse_power}</span>
                        </li>
                        <li className='ad_list_item'>
                            <span className='col_left'>Extras</span>
                            <span className='col_right'>{extras}</span>
                        </li>
                        <li className='ad_list_item'>
                            <span className='col_left'>Technical Features</span>
                            <span className='col_right'>{technical_features}</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Ads Description*/}
        </>
    )
}

export default CarFeatures