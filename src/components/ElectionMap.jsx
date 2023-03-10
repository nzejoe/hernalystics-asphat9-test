import React from "react";
import Map from "./Map";

const ElectionMap = ({ mapData }) => {
    const parties = [
        { id: "1", name: "APC", color: "#64CCFF" },
        { id: "2", name: "LP", color: "#0AA83F" },
        { id: "3", name: "PDP", color: "#D62B3C" },
    ];
    return (
        <div className="dark-box rounded-[13px] mt-4 flex justify-between">
            <div className="home-map">
                <Map mapData={mapData} />
            </div>
            <div className="py-[56px] pr-[60px] w-[153px] flex flex-col justify-between">
                <div className="self-end">
                    <div className="flex flex-col">
                        <button>
                            <img src="images/zoom-in-btn.svg" alt="zoom in" />
                        </button>
                        <button>
                            <img src="images/zoom-out-btn.svg" alt="zoom out" />
                        </button>
                    </div>
                </div>
                <div>
                    {parties.map((party) => (
                        <div key={party.id} className="flex gap-3 mb-8">
                            <div className="w-[32px] h-[24px]" style={{ backgroundColor: party.color }}></div>
                            <span className="text-[#57656B] text-sm">{party.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ElectionMap;
