const LimitSelector = ({ limit, onLimitChange }) => {
    return (
        <div className="flex items-center w-full">
            <label className="text-text-inverse" htmlFor="limit">
                Show:
            </label>
            <select
                className="bg-text-inverse/15 h-10 text-text-inverse rounded-md mx-2 p-1 text-sm w-full"
                value={limit}
                id="limit"
                onChange={(e) => onLimitChange(Number(e.target.value))}>
                <option className="bg-dark/90" value="5">
                    5
                </option>
                <option className="bg-dark/90" value="10">
                    10
                </option>
                <option className="bg-dark/90" value="20">
                    20
                </option>
                <option className="bg-dark/90" value="50">
                    50
                </option>
                <option className="bg-dark/90" value="100">
                    100
                </option>
            </select>
        </div>
    );
};

export default LimitSelector;
