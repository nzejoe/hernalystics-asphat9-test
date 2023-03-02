import React, { useState } from "react";
import Layout from "./Layout";
import ProElection from "./ProElection";

const Home = () => {
    const [electEvent, setElectEvent] = useState("pro-election");

    return <Layout>{electEvent === "pro-election" && <ProElection />}</Layout>;
};

export default Home;
