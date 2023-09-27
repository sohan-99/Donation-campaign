/* eslint-disable react/prop-types */


const DonateShow = ({ donate }) => {
    return (
    
        <div>
            <div className="flex rounded lg:mx-2 mx-1" style={{ background: `${donate.card_bg}` }} >
                <div>
                    <img  src={donate.picture} alt="" />
                </div>
                <div>
                    <div className="lg:w-24 md:w-16 w-12 m-2 rounded items-center lg:mt-4 mt-1 lg:ml-4 md:ml-2 ml-1  " style={{ background: `${donate.category_bg}` }}>
                        <h2 className="lg:font-medium md:font-extralight font-thin  lg:text-base md:text-sm text-xs lg:ml-4 md:ml-2 ml-1" style={{ color: `${donate.text_color}` }}>{donate.category}</h2>
                    </div>
                    <h2 className=" lg:ml-4 md:ml-2 ml-1 lg:text-xl md:text-lg text-base font-semibold lg:mb-2 mb-0" >{donate.title}</h2>
                    <h2 className="lg:ml-4 md:ml-2 ml-1 lg:text-base md:text-sm text-xs lg:font-semibold md:font-medium font-normal" style={{ color: `${donate.text_color}` }}>{donate.price}</h2>
                    <div className="lg:w-[160px] md:w-[100px] w-[80px] lg:h-[30px] md:h-[20px] h-[20px] text-white lg:text-lg md:text-base text-sm lg:font-semibold md:font-normal font-extralight  rounded items-center mt-2 lg:ml-4 md:ml-2 ml-1" style={{ background: `${donate.text_color}` }}>
                        <h2 className="text-center lg:m-2 m-0">View Details </h2>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DonateShow;

