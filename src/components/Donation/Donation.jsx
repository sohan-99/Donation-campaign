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
    // console.log(donation);
    const [dataLength,setDataLength]=useState(4)
    useEffect(() => {
        const storedDonationId = getStoredDonation();

        if (donationInfo.length > 0) {
            const donationDone = donationInfo.filter(donationData => storedDonationId.includes(donationData.id));


            setDonation(donationDone)
        }
    
    }, [])
    return (
        <section>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2 gap-3 rounded-lg">
            {
                donation.slice(0, dataLength).map(donate => <DonateShow donate={donate}></DonateShow>)
            }
    
        </div >
        <div className={dataLength === donation.length && 'hidden' }>

        <button  onClick={()=>setDataLength(donation.length)}
        className="btn  block mx-auto my-10 w-[160px] h-[22px] text-white bg-[#009444] ">See All</button>
        </div>
        </section>

    );
};


export default Donation;
