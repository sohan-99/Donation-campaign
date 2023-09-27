/* eslint-disable react/prop-types */


const DonateShow = ({ donate }) => {
    return (
    
        <div >
            <div className="flex rounded " style={{ background: `${donate.card_bg}` }} >
                <div>
                    <img src={donate.picture} alt="" />
                </div>
                <div>
                    <div className="w-24 m-2 rounded items-center mt-4 ml-4" style={{ background: `${donate.category_bg}` }}>
                        <h2 className="font-medium text-base ml-4" style={{ color: `${donate.text_color}` }}>{donate.category}</h2>
                    </div>
                    <h2 className=" ml-4 text-xl font-semibold mb-2" >{donate.title}</h2>
                    <h2 className="ml-4 text-base font-semibold" style={{ color: `${donate.text_color}` }}>{donate.price}</h2>
                    <div className="w-[160px] h-[22px] m-2 rounded items-center mt-2 ml-4" style={{ background: `${donate.text_color}` }}>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DonateShow;