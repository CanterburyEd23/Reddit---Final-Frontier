import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../app/redditSlice";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleSearchTermChange = (event) => {
        setSearch(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            setSearchTerm(search)
        );
    };

    return (
        <section className="searchbar">
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={handleSearchTermChange}
                    aria-label="Search Posts"
                />
                <button type="submit" onClick={handleSubmit} aria-label="Search">Go</button>
            </form>            
        </section>
    );
};

export default SearchBar;