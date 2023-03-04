import React from "react";
import HomeSelect from "./HomeSelect";
import ElectionMap from "./ElectionMap";
import StateResults from "./StateResults";

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

    const senPolls = [
        {
            id: "1",
            partyName1: "All Progressive",
            partyName2: "Congress",
            partyCode: "APC",
            avatar: "images/apc-logo.svg",
            seats: "54",
            percentage: "51.3%",
            color: "#64CCFF",
        },
        {
            id: "2",
            partyName1: "The",
            partyName2: "Labor Party",
            partyCode: "LP",
            avatar: "images/lp-logo.svg",
            seats: "12",
            percentage: "16.3%",
            color: "#0AA83F",
        },
        {
            id: "3",
            partyName1: "People",
            partyName2: "Democratic Party",
            partyCode: "PDP",
            avatar: "images/pdp-logo.svg",
            seats: "36",
            percentage: "46%",
            color: "#D62B3C",
        },
    ];
    const housePolls = [
        {
            id: "1",
            partyName1: "All Progressive",
            partyName2: "Congress",
            partyCode: "APC",
            avatar: "images/apc-logo.svg",
            seats: "54",
            percentage: "51.3%",
            color: "#64CCFF",
        },
        {
            id: "2",
            partyName1: "The",
            partyName2: "Labor Party",
            partyCode: "LP",
            avatar: "images/lp-logo.svg",
            seats: "12",
            percentage: "16.3%",
            color: "#0AA83F",
        },
        {
            id: "3",
            partyName1: "People",
            partyName2: "Democratic Party",
            partyCode: "PDP",
            avatar: "images/pdp-logo.svg",
            seats: "36",
            percentage: "46%",
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

            {/* PRESIDENTIAL POLLS */}
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

            {/* SENATE POLLS */}
            <div className="mt-[130px]">
                <div className="flex gap-[120px]">
                    <div className="flex-1">
                        <h5 className="text-2xl font-medium mb-6">SENATE</h5>
                        <div className="flex">
                            {senPolls.map((poll) => (
                                <div key={poll.id} style={{ width: `${poll.percentage}` }} className="relative">
                                    <div className={` h-[16px]`} style={{ backgroundColor: poll.color }}></div>
                                    <div
                                        className={`absolute top-[20px] ${
                                            poll.partyCode === "LP"
                                                ? "left-1/2 transform -translate-x-1/2"
                                                : poll.partyCode === "PDP"
                                                ? "right-0 "
                                                : ""
                                        }`}
                                    >
                                        <div className={`relative`}>
                                            <img
                                                src="images/point-up-icon.svg"
                                                alt=""
                                                className={`absolute top-0 left-1/2`}
                                            />
                                        </div>
                                        <div className={`flex bg-white p-2 gap-2 min-w-[180px] mt-2 `}>
                                            <div>
                                                <img src={`${poll.avatar}`} alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: poll.color }} className="text-sm font-medium">
                                                    <span>
                                                        {poll.partyName1} <br />
                                                        {poll.partyName2}
                                                    </span>
                                                </p>
                                                <p className="text-[#585858] text-sm">
                                                    {poll.seats} Seats <span>{poll.percentage}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h5 className="text-2xl font-medium mb-6">HOUSE</h5>
                        <div className="flex">
                            {housePolls.map((poll) => (
                                <div key={poll.id} style={{ width: `${poll.percentage}` }} className="relative">
                                    <div className={` h-[16px]`} style={{ backgroundColor: poll.color }}></div>
                                    <div
                                        className={`absolute top-[20px] ${
                                            poll.partyCode === "LP"
                                                ? "left-1/2 transform -translate-x-1/2"
                                                : poll.partyCode === "PDP"
                                                ? "right-0 "
                                                : ""
                                        }`}
                                    >
                                        <div className={`relative`}>
                                            <img
                                                src="images/point-up-icon.svg"
                                                alt=""
                                                className={`absolute top-0 left-1/2`}
                                            />
                                        </div>
                                        <div className={`flex bg-white p-2 gap-2 min-w-[180px] mt-2 `}>
                                            <div>
                                                <img src={`${poll.avatar}`} alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: poll.color }} className="text-sm font-medium">
                                                    <span>
                                                        {poll.partyName1} <br />
                                                        {poll.partyName2}
                                                    </span>
                                                </p>
                                                <p className="text-[#585858] text-sm">
                                                    {poll.seats} Seats <span>{poll.percentage}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[130px] mb-[56px]">
                <div className="flex justify-between mb-[54px]">
                    <h5 className="text-2xl font-medium">Presidential Race</h5>
                    <div className="flex items-center gap-2">
                        <h5>Filter By:</h5>
                        <select name="" id="" className="bg-[#1E1E1E] p-3 border rounded-lg">
                            <option value="">Presidential</option>
                            <option value="">Senate</option>
                            <option value="">House of Representative</option>
                        </select>
                    </div>
                </div>
                <ElectionMap />
            </div>
            <div className="">
                <h5 className="text-2xl font-medium border-b border-[#3d435e] pb-3 mb-5">State Results</h5>
                <StateResults />
            </div>
        </div>
    );
};

export default LiveUpdates;
