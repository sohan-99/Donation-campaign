/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import React from 'react';
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localStorage";

const DonationDetails = () => {
   
        
    const donationData = useLoaderData();
    const { id } = useParams()
    // console.log(donationData, id);
    const donationDetails = donationData.find(donationDetails => donationDetails.id === id)
    // console.log(donationDetails);
    const notify = () =>
    {
    saveDonation(id)
        toast.success("Donated!")
    }
    
    return (

        <div className="max-w-6xl mx-auto mb-20">
            <div className="w-full relative ">
                <img className="w-full  mt-8" src={donationDetails.picture} alt="" />
                <div className="absolute lg:h-36 h-16 w-full bottom-0" style={{ backgroundColor: "rgb(0,0,0,0.6)" }}>
                </div>
                {/* <Link to={`/donation/${id}`}> */}
                <div className="py-1 px-2 w-36 m-2  items-center  ml-4 -mt-14 lg:-mt-20 rounded-md absolute button-10 left-20">
                    <button onClick={notify} className="btn text-white" style={{ background: `${donationDetails.text_color}` }} >
                        Donate {donationDetails.price}
                    </button>
                </div>
                {/* </Link> */}
            </div >
            <p className="mx-4 my-4 lg:font-bold md:font-medium font-normal  lg:text-[40px]  md:text-[30px] text-[20px]">{donationDetails.category}</p>
            <p className="mx- mb-4 lg:font-normal md:font-extralight font-thin lg:text-base md:text-sm text-xs">{donationDetails.dscription}</p>
            <ToastContainer
                position="top-center"
            />

        </div >
    );
};
export default DonationDetails;

