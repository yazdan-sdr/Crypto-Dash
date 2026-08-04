import CryptoCard from "../components/cryptoCard";
import { useState, useEffect } from "react";
import Hero from "../components/shared/hero";
import LimitSelector from "../components/limitSelector";
import FilterInput from "../components/filterInput";
import SortCoinsBy from "../components/sortCoinsBySelector";
const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setlimit] = useState(10);
    const [filter, setFilter] = useState("");
    const [sortBy, setSortby] = useState("market_cap_desc");
    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const result = await fetch(
                    `${API_URL}&per_page=${limit}&order=market_cap_desc&page=1&sparkline=false`,
                );
                if (!result.ok) throw new Error("failed to fetch data");
                const data = await result.json();
                setCoins(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCoins();
    }, [limit]);
    const filteredCoins = coins
        .filter((coin) => {
            return (
                coin.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
                coin.symbol.toLowerCase().includes(filter.toLocaleLowerCase())
            );
        })
        .slice()
        .sort((a, b) => {
            switch (sortBy) {
                case "market_cap_desc":
                    return b.market_cap - a.market_cap;
                case "market_cap_asc":
                    return a.market_cap - b.market_cap;
                case "price_desc":
                    return b.current_price - a.current_price;
                case "price_asc":
                    return a.current_price - b.current_price;
                case "change_desc":
                    return (
                        b.price_change_percentage_24h -
                        a.price_change_percentage_24h
                    );
                case "change_asc":
                    return (
                        a.price_change_percentage_24h -
                        b.price_change_percentage_24h
                    );
            }
        });

    return (
        <div>
            <Hero />
            <div className="px-4">
                <div className="flex mx-5 mb-10 gap-4 flex-col md:flex-row md:items-center md:justify-between">
                    <FilterInput filter={filter} onFilterChange={setFilter} />
                    <SortCoinsBy sortBy={sortBy} onSortChange={setSortby} />
                    <LimitSelector limit={limit} onLimitChange={setlimit} />
                </div>
                {loading && (
                    <p className="text-text-inverse text-center text-5xl">
                        Loading...
                    </p>
                )}
                {error && (
                    <p className="text-text-inverse text-center text-5xl">
                        {error}
                    </p>
                )}
                {!loading && !error && (
                    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
                        {filteredCoins.length > 0 ? (
                            filteredCoins.map((coin) => (
                                <CryptoCard coin={coin} key={coin.id} />
                            ))
                        ) : (
                            <p>there is no match with {filter}</p>
                        )}
                    </main>
                )}
            </div>
        </div>
    );
};

export default App;
