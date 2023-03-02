import React from "react";
import HomeSelect from "./HomeSelect";
import ElectionMap from "./ElectionMap";

const ProElection = () => {
    return (
        <div className="pro-election">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-[30px] font-semibold mb-1">Pro-Election</h3>
                    <p>
                        <span className="text-[#E5B805] mr-1">UPDATED</span>MAR. 15, 2021, 9:43 A.M. EDT
                    </p>
                </div>
                <HomeSelect />
            </div>
            <ElectionMap />
        </div>
    );
};

export default ProElection;
