/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";


const Donation = () => {
    const donationCurrent = useLoaderData()
    const { id } = useParams()
    // console.log(donationCurrent,intId);

    const donationDone = donationCurrent.find(donationDone => donationDone.id === id.toString())
    // console.log(donationDone);
    return (
        <div className="flex "  style={{ background: `${donationDone.card_bg}` }} >
            <div>
                <img src={donationDone.picture} alt="" />
            </div>
            <div>
                <div className="w-24 m-2 rounded items-center mt-4 ml-4" style={{ background: `${donationDone.category_bg}` }}>
                    <h2 className="font-medium text-base ml-4" style={{ color: `${donationDone.text_color}` }}>{donationDone.category}</h2>
                </div>
                <h2 className=" ml-4 text-xl font-semibold mb-2" style={{ color: `${donationDone.text_color}` }}>{donationDone.title}</h2>
                <h2 className="ml-4 text-base font-semibold" style={{ color: `${donationDone.text_color}` }}>{donationDone.price}</h2>
                {/* <button className="btn btn-primary">View Details</button> */}
                <div className="w-[160px] h-[22px] m-2 rounded items-center mt-2 ml-4" style={{ background: `${donationDone.text_color}` }}>
                    <h2 className="font-medium text-base ml-4 text-white" >View Details</h2>
                </div>
            </div>

        </div>
    );
};

export default Donation;
