const SortCoinsBy = ({ sortBy, onSortChange }) => {
    return (
        <div className="flex items-center w-full flex-nowrap">
            <label
                className="text-text-inverse whitespace-nowrap"
                htmlFor="sortBy">
                Sort By:
            </label>
            <select
                className="bg-text-inverse/15 h-10 text-text-inverse rounded-md mx-2 p-1 text-sm w-full"
                value={sortBy}
                id="limit"
                onChange={(e) => onSortChange(e.target.value)}>
                <option className="bg-dark/90" value="market_cap_desc">
                    Market Cap (High To Low)
                </option>
                <option className="bg-dark/90" value="market_cap_asc">
                    Market Cap (Low To High)
                </option>
                <option className="bg-dark/90" value="price_desc">
                    Price (High To Low)
                </option>
                <option className="bg-dark/90" value="price_asc">
                    Price (Low To High)
                </option>
                <option className="bg-dark/90" value="change_desc">
                    24H Change (High To Low)
                </option>
                <option className="bg-dark/90" value="change_asc">
                    24H Change (Low To High)
                </option>
            </select>
        </div>
    );
};

export default SortCoinsBy;
