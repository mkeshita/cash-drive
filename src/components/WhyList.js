import React from 'react';
import WhyItem from './WhyItem';

function WhyList() {
    let data = [
        {
            title: "Fast Disbursment",
            text: "Get your cash disbursed within 24 hours."
        },
        {
            title: "Flexible Repayment",
            text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit."
        },
        {
            title: "No Guarantor Required",
            text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit."
        },
        {
            title: "Safe, Secure & Confidential",
            text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit."
        }
    ]
    return (
        <>
           <div className="row why__list">

                {data.map( (item, number) => {
                    return <WhyItem key={number.toString()} data={item}/>
                })}

            </div> 
        </>
    )
}

export default WhyList;
