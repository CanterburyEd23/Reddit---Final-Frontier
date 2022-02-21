import React from "react";
import SubReddits from "./SubReddits";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>            
            <SubReddits></SubReddits>
            <SubReddits></SubReddits>
            <SubReddits></SubReddits>
        </div>
    );
};

export default Sidebar;