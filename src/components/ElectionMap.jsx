import React from "react";

const ElectionMap = () => {
    const parties = [
        { id: "1", name: "APC", color: "#64CCFF" },
        { id: "2", name: "LP", color: "#0AA83F" },
        { id: "3", name: "PDP", color: "#D62B3C" },
    ];
    return (
        <div>
            <div className="home-map">
                <img src="images/home-map.svg" alt="Home map" />
            </div>
            <div>
                <div>
                    <div>
                        <span>
                            <img src="images/zoom-in-btn.svg" alt="zoom in" />
                        </span>
                        <span>
                            <img src="images/zoom-out-btn.svg" alt="zoom out" />
                        </span>
                    </div>
                </div>
                <div>
                    {parties.map((party) => (
                        <div key={parties.id}>
                            <div className="w-[32px] h-[24px]" style={{ backgroundColor: party.color }}></div>
                            <span>{party.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ElectionMap;
