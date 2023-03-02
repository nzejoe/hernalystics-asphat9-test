import React from "react";
import HomeSelect from "./HomeSelect";
import ElectionMap from "./ElectionMap";

const ProElection = () => {
    return (
        <div className="pro-election">
            <div className="flex justify-between items-center">
                <div>
                    <h3>Pro-Election</h3>
                    <p>
                        <span className="updated">UPDATED</span>MAR. 15, 2021, 9:43 A.M. EDT
                    </p>
                </div>
                <HomeSelect />
            </div>
            <ElectionMap />
        </div>
    );
};

export default ProElection;
