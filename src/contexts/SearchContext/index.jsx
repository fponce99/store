import { useState, createContext } from "react";

const SearchContext = createContext()

function SearchProvider ({ children }) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContext.Provider value= {{
            searchValue,
            setSearchValue,
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContext, SearchProvider }