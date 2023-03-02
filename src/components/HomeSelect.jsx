import React from "react";

const HomeSelect = ({ electEvent, handleSelectEvent }) => {
    const year = ["2023", "2019", "2015", "2011", "2007", "2003", "1999", "1995", "1991", "1987"];
    return (
        <div className="flex">
            <select
                defaultValue={electEvent}
                className="home_select dark-box"
                name=""
                id=""
                onChange={(e) => handleSelectEvent(e.target.value)}
            >
                <option value="pro-election">Pro-Election</option>
                <option value="live-updates">Election Day Live Updates</option>
                <option value="election-analysis">Pro-Election Analysis</option>
            </select>
            <select className="home_select dark-box" name="" id="">
                <option value="">Presidential</option>
                <option value="">Governorship</option>
                <option value="">Senate</option>
                <option value="">House of Representatives</option>
            </select>
            <select className="home_select dark-box" name="" id="">
                {year.map((year, idx) => (
                    <option key={idx}>{year}</option>
                ))}
            </select>
        </div>
    );
};

export default HomeSelect;
