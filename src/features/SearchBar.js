import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchTerm);
    };

    return (
        <section className="searchbar">
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    aria-label="Search Posts"
                />
                <button type="submit" onClick={handleSubmit} aria-label="Search">Go</button>
            </form>            
        </section>
    );
};

export default SearchBar;