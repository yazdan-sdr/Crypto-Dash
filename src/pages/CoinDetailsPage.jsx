import { Link } from "react-router-dom";
const CoinDetails = () => {
    return (
        <div className="p-4 pt-10 flex items-center justify-center">
            <div className="max-w-lg min-w-xl text-white bg-secondary/10 border-2 border-text-primary/50 rounded-2xl p-4">
                <div className="mb-6">
                    <Link to={"/"}>BACK</Link>
                </div>
                <div className="text-center flex flex-col gap-2">
                    <p>rakn:</p>
                    <p>Current Price:</p>
                    <p>Market Cap:</p>
                    <p>24H High:</p>
                    <p>24H Low:</p>
                    <p>24H Price Change:</p>
                    <p>Circulating Supply</p>
                    <p>Total Supply:</p>
                    <p>All-Time High:</p>
                    <p>All-Time Low:</p>
                    <p>Last Updated:</p>
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;
