import React from "react";
import HomeSelect from "./HomeSelect";
import ElectionMap from "./ElectionMap";

const ElectionAnalysis = ({ electEvent, handleSelectEvent }) => {
    const geoZones = [
        { id: "1", name: "North East", color: "#449352", number: "3,000" },
        { id: "2", name: "North West", color: "#6D769D", number: "3,000" },
        { id: "3", name: "North Central", color: "#A163BE", number: "3,000" },
        { id: "4", name: "South West", color: "#E30325", number: "3,000" },
        { id: "5", name: "South Southt", color: "#2249D1", number: "3,000" },
        { id: "6", name: "South East", color: "#018796", number: "3,000" },
    ];
    return (
        <div>
            <div className="mb-[46px] flex items-center">
                <h3 className="text-[30px] font-bold mr-4">Post Election Data</h3>
                <div className="text-sm dark-box px-[5px] py-[2.5px] rounded">
                    <span className="font-medium">PRESIDENTIAL</span>{" "}
                    <span className="font-medium text-xs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                        /
                    </span>{" "}
                    <span className="font-medium">2023</span>
                </div>
            </div>
            <div className="flex justify-between">
                <h5 className="text-2xl font-medium">Presidential Race</h5>
                <HomeSelect electEvent={electEvent} handleSelectEvent={handleSelectEvent} />
            </div>
            <ElectionMap />
            <div className="mt-[30px] dark-box px-[30px] py-[45px] rounded-[13px] flex gap-5">
                <div className="dark-box p-[34px] rounded-[13px]">
                    <div className="flex">
                        <div className="relative">
                            <img src="images/election-donut-chart.svg" alt="election donut chart" />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[143px] h-[143px] border-[0.25px] border-[#A28888] rounded-full flex flex-col justify-center items-center">
                                <span className="block text-xs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                                    TOTAL VOTES
                                </span>
                                <span className="block">168,912,222</span>
                            </p>
                        </div>
                        <p className="mt-8">
                            <span className="block text-xs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                                REJECTED VOTES
                            </span>
                            <span className="block">8,400,000</span>
                        </p>
                    </div>
                    <p className="mt-1.5">
                        <span className="block text-xs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                            ACCEPTED VOTES
                        </span>
                        <span className="block">160,512,222</span>
                    </p>
                </div>

                <div className="dark-box rounded-[13px] px-8 pt-[22px] pb-[53px] flex">
                    <div className="mr-[30px]">
                        <p className="text-sm mb-5">CANDIDATES BY GEOPOLITICAL ZONES</p>
                        <div>
                            <img src="images/analysis-map.svg" alt="nigerian map" />
                        </div>
                    </div>
                    <ul className="self-end">
                        {geoZones.map((geo) => (
                            <li key={geo.id} className="flex items-center gap-2 text-xs mb-3">
                                <div
                                    className=""
                                    style={{ backgroundColor: geo.color, width: "22px", height: "14px" }}
                                ></div>
                                <span>{geo.name}</span>
                                <span className="opacity-60">{geo.number}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="dark-box pt-[42px] pl-[27px] pr-[72px] rounded=[13px]">
                    <div className="mb-[30px]">
                        <p className="text-sm">TOTAL ELECTED MEMBERS</p>
                        <p className="text-xl font-bold">10,000</p>
                    </div>
                    <div className="mb-[30px]">
                        <p className="text-sm flex">
                            MALE <img src="images/male-gender-icon.svg" alt="" className="ml-2" />
                        </p>
                        <p className="text-xl font-bold">10,000</p>
                    </div>
                    <div>
                        <p className="text-sm  flex">
                            FEMALE <img src="images/female-gender-icon.svg" alt="" className="ml-2" />
                        </p>
                        <p className="text-xl font-bold">10,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectionAnalysis;
