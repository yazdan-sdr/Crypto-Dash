const CryptoCard = () => {
    return (
        <div className="m-4 flex flex-col border-2 w-auto p-4 max-w-xs h-auto">
            <div className="flex justify-between gap-2 border-b-2 mb-2 pb-2">
                <span>LOGO</span>
                <h4>name</h4>
                <p>FN</p>
                <span>go</span>
            </div>

            <div className="flex justify-between items-center">
                <span>
                    <p>price</p>
                    <p>percent</p>
                    <p>capital</p>
                </span>
                <span>GRAPH</span>
            </div>
        </div>
    );
};

export default CryptoCard;
