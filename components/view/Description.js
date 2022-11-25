import React from 'react'

const Description = ({ description }) => {
    return (
        <>
            <style>
                {`
                    .decription_text{
                        color: #525252;
                        line-height: 22px;
                        font-weight: 400;
                        overflow-wrap: break-word;
                        white-space: pre-line;
                        line-height: 1.5em;
                        overflow: hidden;
                        transition: height .2s;
                    }
                    .ads_details h2.ads_details_heading{
                        font-weight: 600;
                        font-size: 28px;
                        line-height: 60px;
                        color: #2b2b2b;
                        margin-bottom: 11px;
                        padding-left: 0;
                        border-radius: 5px;
                        margin-top: 23px;
                    }
                `}
            </style>
            <div className='ads_details'>
                <h2 className='ads_details_heading'>Description</h2>
                <p className='decription_text'>{description}</p>
            </div>
        </>
    )
}

export default Description