/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// import React from 'react';

import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const CategoryList = () => {
    const [donationCatagory, setDonationCatagory] = useState([]);
    useEffect(() => {
        fetch('/public/donation.json')
            .then(res => res.json())
            .then(data => setDonationCatagory(data));

    }, [])
    console.log(donationCatagory);
    return (
        <div><div>

            {/* <h1>donation list:{donationCatagory.length}</h1> */}

        </div>
            <div className="grid grid-cols-4 my-3">

                {
                    donationCatagory.map(donationCard => <DonationCard key={donationCatagory.id} donationCard={donationCard}></DonationCard>)
                }
            </div>

        </div>
    );
};

export default CategoryList;

