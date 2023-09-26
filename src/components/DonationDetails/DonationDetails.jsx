/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import React from 'react';

import { Link, useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const donationData = useLoaderData();
    const { id } = useParams()
    console.log(donationData,id);
    const donationDetails = donationData.find(donationDetails => donationDetails.id === id)
    // console.log(donationDetails);
    return (
        <div>
            <img className="w-full mt-8" src={donationDetails.picture} alt="" />
            <div className="w-40 text-white bg-[#fff9] rounded font-semibold text-xl -mt-14 p-3" >
                <Link to={`/donation/${id}`}>
                    Donate {donationDetails.price}
                </Link>
            </div>
            <p className="my-4 font-bold text-[40px] ">{donationDetails.category}</p>
            <p className="mb-4 font-normal text-base">{donationDetails.dscription}</p>
        </div>

    );
};
export default DonationDetails;