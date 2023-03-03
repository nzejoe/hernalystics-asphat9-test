import React from "react";
import Results from "../data/state-results.json";

const StateResults = () => {
    const colors = {
        APC: "#64CCFF",
        LP: "#0AA83F",
        PDP: "#D62B3C",
    };
    return (
        <div className="flex justify-between">
            <table>
                <thead>
                    <tr>
                        <th className="w-[95px] text-left  border border-[#3a3f5c] pl-2 py-2 text-sm">State</th>
                        <th className="w-[95px] text-left  border border-[#3a3f5c] pl-2 py-2 text-sm">APC</th>
                        <th className="w-[95px] text-left border border-[#3a3f5c] pl-2 py-2 text-sm">LP</th>
                        <th className="w-[95px] text-left border border-[#3a3f5c] pl-2 py-2 text-sm">PDP</th>
                        <th className="w-[95px] text-left  border border-[#3a3f5c] pl-2 py-2 text-sm">Leading</th>
                    </tr>
                </thead>
                <tbody>
                    {Results.slice(0, 18).map((result) => (
                        <tr key={result.id}>
                            <td className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm">{result.state}</td>
                            <td className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm">{result.APC}</td>
                            <td className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm">{result.LP}</td>
                            <td className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm">{result.PDP}</td>
                            <td
                                style={{ backgroundColor: colors[result.leading] }}
                                className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm"
                            >
                                {result.leading}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th className="w-[95px] text-left  border border-[#3a3f5c] pl-2 py-2 text-sm">State</th>
                        <th className="w-[95px] text-left  border border-[#3a3f5c] pl-2 py-2 text-sm">APC</th>
                        <th className="w-[95px] text-left border border-[#3a3f5c] pl-2 py-2 text-sm">LP</th>
                        <th className="w-[95px] text-left border border-[#3a3f5c] pl-2 py-2 text-sm">PDP</th>
                        <th className="w-[95px] text-left  border border-[#3a3f5c] pl-2 py-2 text-sm">Leading</th>
                    </tr>
                </thead>
                <tbody>
                    {Results.slice(18, 38).map((result) => (
                        <tr key={result.id}>
                            <td className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm">{result.state}</td>
                            <td className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm">{result.APC}</td>
                            <td className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm">{result.LP}</td>
                            <td className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm">{result.PDP}</td>
                            <td
                                style={{ backgroundColor: colors[result.leading] }}
                                className="w-[95px]  border border-[#3a3f5c] pl-2 py-2 text-sm"
                            >
                                {result.leading}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StateResults;
