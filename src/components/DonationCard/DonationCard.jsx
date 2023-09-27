/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react';

import { Link } from "react-router-dom";

const DonationCard = ({ donationCard }) => {
    const { title, picture, category, category_bg, card_bg, text_color, id } = donationCard;
    return (
        <div>
               <Link to={`/donationDetails/${id}`}>
            <div className="card card-compact w-[95%] my-4 rounded-lg"
                style={{ background: `${card_bg}` }}>
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="w-24 m-2 rounded items-center mt-4 ml-4" style={{ background: `${category_bg}` }}>
                        <h2 className="font-medium text-base ml-4" style={{ color: `${text_color}` }}>{category}</h2>
                    </div>
                    <p className="ml-3 text-xl font-semibold mb-4" style={{ color: `${text_color}` }}>{title}</p>
               
            </div>
            </Link>

        </div>
    );
};


export default DonationCard;