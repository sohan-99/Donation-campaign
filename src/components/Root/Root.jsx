import { Outlet } from "react-router-dom";
import Navber from './../Navber/Navber';


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;