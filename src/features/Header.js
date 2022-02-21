import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className="Header">
            <h1>Reddit - The Final Frontier</h1>
            <SearchBar></SearchBar>
        </header>
    );
};

export default Header;