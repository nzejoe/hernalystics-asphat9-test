import React from "react";
import HomeSelect from "./HomeSelect";
import ElectionMap from "./ElectionMap";

const LiveUpdates = ({ electEvent, handleSelectEvent }) => {
    const presPolls = [
        {
            id: "1",
            partyName: "APC",
            contestant: "Tinubu",
            avatar: "images/tinubu-avatar.svg",
            number: "81,283,786",
            percentage: "51.3%",
            color: "#64CCFF",
        },
        {
            id: "2",
            partyName: "LP",
            contestant: "Peter",
            avatar: "images/obi-avatar.svg",
            number: "60,283,786",
            percentage: "42%",
            color: "#0AA83F",
        },
        {
            id: "3",
            partyName: "PDP",
            contestant: "Atiku",
            avatar: "images/atiku-avatar.svg",
            number: "283,786",
            percentage: "7.3%",
            color: "#D62B3C",
        },
    ];
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

            <div className="flex">
                {presPolls.map((poll) => (
                    <div key={poll.id} style={{ width: `${poll.percentage}` }} className="relative">
                        <div className={` h-[16px]`} style={{ backgroundColor: poll.color }}></div>
                        <div className={`absolute top-[20px] ${poll.partyName === "PDP" ? "right-2" : "left-2"}`}>
                            <div className={`relative`}>
                                <img
                                    src="images/point-up-icon.svg"
                                    alt=""
                                    className={`absolute top-0 ${poll.partyName === "PDP" ? "right-3" : "left-4"}`}
                                />
                            </div>
                            <div
                                className={`flex bg-white p-2 gap-2 min-w-[200px] mt-2 ${
                                    poll.partyName === "PDP" ? "right-2" : "left-2"
                                }`}
                            >
                                <div>
                                    <img src={`${poll.avatar}`} alt="" />
                                </div>
                                <div>
                                    <p style={{ color: poll.color }} className="text-sm font-medium">
                                        <span>{poll.contestant}</span>,<span>{poll.partyName}</span>
                                    </p>
                                    <p className="text-[#585858] text-sm">
                                        {poll.number} votes <span>{poll.percentage}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-[130px]">
                <ElectionMap />
            </div>
        </div>
    );
};

export default LiveUpdates;