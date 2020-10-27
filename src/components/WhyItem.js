import React from 'react'

function WhyItem(props) {
    console.log(props.data)
        return (
        <div className="col-6 col-md-3 mb-4 mb-md-0">
            <div className="why__icon-container mb-4">

            </div>     
            <h5 className="why__title">{props.data.title}</h5>
            <p>{props.data.text}</p>
        </div>

    )
}

export default WhyItem;
