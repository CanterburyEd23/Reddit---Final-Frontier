import React from "react";
import SearchBar from "./SearchBar";
import SubReddits from "./SubReddits";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <SearchBar></SearchBar>
            <SubReddits></SubReddits>
        </div>
    );
};

export default Sidebar;