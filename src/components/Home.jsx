import React, { useState } from "react";
import Layout from "./Layout";
import ProElection from "./ProElection";
import ElectionAnalysis from "./ElectionAnalysis";

const Home = () => {
    const [electEvent, setElectEvent] = useState("pro-election");

    const handleSelectEvent = (event) => {
        setElectEvent(event);
    };

    return (
        <Layout>
            {electEvent === "pro-election" && (
                <ProElection electEvent={electEvent} handleSelectEvent={handleSelectEvent} />
            )}
            {electEvent === "election-analysis" && (
                <ElectionAnalysis electEvent={electEvent} handleSelectEvent={handleSelectEvent} />
            )}
        </Layout>
    );
};

export default Home;
