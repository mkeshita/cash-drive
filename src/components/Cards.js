import React from 'react';
import CardItem from './CardItem'

function Cards() {
    const data = [
        {
            title: "Fast Disbursement",
            textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauri",
            color: "#FFE2E4"
        },
        {
            title: "Fast Disbursement",
            textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauri",
            color: "#DBF8EE"
        },
        {
            title: "Fast Disbursement",
            textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauri",
            color: "#E2EBFF"
        }
    ]
    return (
        <>
            <div className="d-flex justify-content-between align-items-strech flex-wrap mt-5 pt-3 position-relative">
                {data.map((item, number) => {
                    console.log(number)
                    return <CardItem key={number.toString()} data={item} />
                })}
                <img 
                    src="./images/sq.dot.png" 
                    className="position-absolute"
                    style={{ right: "-7%", bottom: "-50px", zIndex: 0, }}
            />
            </div>
            
        </>
    )
}

export default Cards;
