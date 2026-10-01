const FilterInput = ({ filter, onFilterChange }) => {
    return (
        <div className="flex w-full pr-2">
            <input
                className="bg-text-inverse/15 focus:outline-2 outline-secondary h-10 text-text-inverse rounded-md px-2 py-1 w-full"
                type="text"
                value={filter}
                placeholder="Search..."
                onChange={(e) => onFilterChange(e.target.value)}
            />
        </div>
    );
};

export default FilterInput;
