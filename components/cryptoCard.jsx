import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";
const CryptoCard = ({ coin }) => {
    return (
        <>
            <div className="m-4 flex flex-col border-2 border-border bg-white/6 rounded-2xl w-auto p-4 h-auto">
                <div className="flex justify-between gap-2 mb-2 pb-2 max-w-sm items-center">
                    <span>
                        <img
                            src={coin.image}
                            alt={coin.name}
                            width={48}
                            className="rounded-full"
                        />
                    </span>
                    <h4 className="text-text-inverse font-bold">
                        {coin.symbol.toUpperCase()}
                    </h4>
                    <p className="text-text-primary bg-neutral-300 h-fit p-1 text-xs rounded-md">
                        {coin.name}
                    </p>
                    <span className="">
                        <Link to={"/CoinDetails"}>
                            <MoveUpRight className="text-text-primary cursor-pointer p-2 w-10 h-10 bg-secondary hover:bg-border transition-colors delay-20 rounded-full" />
                        </Link>
                    </span>
                </div>
                <div className="border-b-2 border-text-primary/50"></div>
                <div className="flex justify-between items-center mt-4">
                    <span>
                        <p className="text-text-inverse">
                            Price: ${coin.current_price}
                        </p>
                        <p
                            className={`${
                                coin.price_change_percentage_24h >= 0
                                    ? "text-percent-up"
                                    : "text-percent-down"
                            }`}>
                            {coin.price_change_percentage_24h} %
                        </p>
                        <p className="text-text-inverse">
                            Market Cap:
                            <br />$ {coin.market_cap.toLocaleString("en-US")}
                        </p>
                    </span>
                    <span className="p-2 rounded-lg max-w-25">
                        {coin.price_change_percentage_24h >= 0 ? (
                            <img
                                src="src/assets/images/chart-up.png"
                                alt="chart-up"
                            />
                        ) : (
                            <img
                                src="src/assets/images/chart-down.png"
                                alt="chart-up"
                            />
                        )}
                    </span>
                </div>
            </div>
        </>
    );
};

export default CryptoCard;
