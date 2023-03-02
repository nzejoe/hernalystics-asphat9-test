import React from "react";
import HomeSelect from "./HomeSelect";
import ElectionMap from "./ElectionMap";

const LiveUpdates = ({ electEvent, handleSelectEvent }) => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="mb-[46px] ">
                    <div className="flex items-center">
                        <h3 className="text-[30px] font-bold mr-4">Post Election Data</h3>
                        <div className="text-sm dark-box px-[5px] py-[2.5px] rounded">
                            <span className="font-medium">PRESIDENTIAL</span>{" "}
                            <span className="font-medium text-xs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                                /
                            </span>{" "}
                            <span className="font-medium">2023</span>
                        </div>
                    </div>
                    <p>
                        <span className="text-[#E5B805] mr-1">UPDATED</span>MAR. 15, 2021, 9:43 A.M. EDT
                    </p>
                </div>
                <HomeSelect electEvent={electEvent} handleSelectEvent={handleSelectEvent} />
            </div>
            <h5 className="text-2xl font-medium mb-6">PRESIDENT</h5>
            <div className=""></div>
            <ElectionMap />
        </div>
    );
};

export default LiveUpdates;
