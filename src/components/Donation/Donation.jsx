/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

// import React from 'react';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import DonateShow from "../DonateShow/DonateShow";




const Donation = () => {
    const donationInfo = useLoaderData();
    console.log(donationInfo);
    const [donation, setDonation] = useState([]);
    console.log(donation);
    useEffect(() => {
        const storedDonationId = getStoredDonation();

        if (donationInfo.length > 0) {
            const donationDone = donationInfo.filter(donationData => storedDonationId.includes(donationData.id));


            setDonation(donationDone)
        }
    
    }, [])
    return (
        <section>
            <div className="grid grid-cols-2 gap-4 rounded-lg">
            {
                donation.map(donate => <DonateShow donate={donate}></DonateShow>)
            }
    
        </div>
        <button className="btn btn-primary block mx-auto my-10">click</button>
        </section>

    );
};

export default Donation;
