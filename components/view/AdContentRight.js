import Image from 'next/image';
import React from 'react'
import { BsTelephone, BsChatText, BsCheck, BsLightbulb } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
const AdContentRight = ({ data }) => {
    const { id, currency, price, username, mobile } = data;
    return (
        <>
            <style>
                {`
                .ad_detail_card{
                    display: flex;
                    flex-direction: column;
                    background-color: #fff;
                }
                .ad_card_body{
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 3px 10px #0000001a;
                    padding: 17px;
                    border-radius: 5px;
                    border: 1px solid #a6d5fa;
                }
                .price_section{
                    display: flex;
                    width: 100%;
                    margin-bottom: 20px;
                    align-items:baseline;
                }
                .ad_currency{
                    font-weight: 400;
                    color: #212529;
                    font-size: 18px;
                    display: flex;
                    align-items: baseline;
                }
                .ad_price{
                    font-size: 32px;
                    color: #212529;
                    font-weight: 600;
                    letter-spacing: 1px;
                    margin-left: 5px;
                }
                .profile_section{
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 0;
                    border-bottom: 1px solid #f5f5f5;
                }
                .user_detail{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .seller_info{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .sold_by{
                    font-weight: 400;
                    font-size: 12px;
                    color: #969696;
                    margin-bottom: 0;
                }
                .seller_name{
                    color: #1e1e1e;
                    position: relative;
                    font-size: 16px;
                    font-weight: 500;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 0;
                }
                .seller_details{
                    display:flex;
                    align-items: center;
                    margin: 10px 0 5px;
                    overflow: hidden;
                    gap: 5px;
                }
                .seller_logo{
                    width: 100px;
                    height: 100px;
                    border-radius: 17px;
                    object-fit: cover;
                    margin-right: 5px;
                }
                .ad_card_footer{
                    text-align: center;
                    margin: 10px 0 0;
                }
                .ad_action_buttons{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .btn_action{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 0 15px;
                    background-color: #007bff;
                    color: #fff;
                    height: 39px;
                    width: 100%;
                    font-size: 13px;
                    font-weight: 500;
                    border-radius: 8px;
                    margin-bottom: 10px;
                    border: 1px solid transparent;
                }
                .ad_icon{
                    width: 22px;
                    height: 22px;
                    margin: 0 15px;
                }
                .show_number_btn{
                    background-color: #fff;
                    color: #008dca;
                    border-color: #008dca;
                }
                .show_number_btn:hover{
                    background-color: #008dca;
                    color: #fff;
                    box-shadow: 0 5px 11px #0000002e, 0 4px 15px #00000026;
                }
                .chat_btn{
                    background-color: #fff;
                    color: #484848;
                    border-color: #484848;
                }
                .chat_btn:hover{
                    background-color: #484848;
                    color: #fff;
                    box-shadow: 0 5px 11px #0000002e, 0 4px 15px #00000026;
                }
                .white_box {
                    background: #fff;
                    margin: 20px 0;
                    box-shadow: 0px 0px 60px rgb(0 0 0 / 8%);
                    border: 1px solid #edeef5;
                    border-radius: 5px;
                }
                .white_box_title {
                    padding: 10px 20px;
                    border-bottom: 1px solid #f2f2f2;
                }
                .white_box_title h5{
                    display:flex;
                    align-items:center;
                    gap:5px;
                    font-size:18px;
                    font-weight:500;
                }
                .white_box_content {
                    padding: 10px 20px 20px 20px;
                }
                ul.general_tips li {
                    display:flex;
                    align-items:center;
                    padding: 15px 0;
                    border-bottom: 0.5px dashed #e5e5e5;
                }
                ul.general_tips li svg {
                    color: #007bff;
                    width: 25px;
                    height: 25px;
                    padding: 4px;
                    border-radius: 50%;
                    margin-right: 10px;
                    background-color: #dcecf8;
                    border: 1px solid #007bff;
                }
                `}
            </style>
            <div className='ad_content_right'>
                <div className='ad_detail_card sticky top-5'>
                    <div className='ad_card_body'>
                        <div className='price_section'>
                            <label className='ad_currency'>{currency}</label>
                            <span className='ad_price'>{price}</span>
                        </div>
                        <div className='profile_section'>
                            <div className='user_detail'>
                                <div className='seller_info'>
                                    <p className='sold_by'>Posted By</p>
                                    <div className='seller_details'>
                                        <Image src='/user-avatar.png' width='50' height='50' />

                                        <span className='seller_name'>{username}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ad_card_footer'>
                            <div className='ad_action_buttons'>
                                <button className='btn_action show_number_btn'> <BiPhoneCall className='ad_icon' /> Show contact number</button>
                                <button className='btn_action chat_btn'> <BsChatText className='ad_icon' /> Chat with Seller</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* General Tips */}
                <div className='white_box'>
                    <div className='white_box_title'><h5><BsLightbulb className='brand_red' /> General Tips</h5></div>
                    <div className='white_box_content'>
                        <ul class="general_tips">
                            <li><BsCheck /> Use a safe location to meet seller</li>
                            <li><BsCheck /> Avoid cash transactions</li>
                            <li><BsCheck /> Beware of unrealistic offers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AdContentRight