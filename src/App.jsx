import CryptoCard from "../components/cryptoCard";
import { useState, useEffect } from "react";
import Hero from "../components/shared/hero";
const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&order=market_cap_desc&page=1&sparkline=false";
// curl --request GET \
//   --url 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&per_page=10&order=market_cap_desc&page=1&sparkline=false' \
//   --header 'x-cg-demo-api-key: <api-key>'

const App = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const result = await fetch(API_URL);
                if (!result.ok) throw new Error("failed to fetch data");
                const data = await result.json();
                console.log(data);
                setCoins(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCoins();

        // fetch(API_URL)
        //     .then((result) => {
        //         if (!result.ok) throw new Error("Failed to fetch data");
        //         return result.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         setCoins(data);
        //         setLoading(false);
        //     })
        //     .catch((err) => {
        //         setError(err.message);
        //         setLoading(false);
        //     });
    }, []);
    return (
        <div>
            <Hero />
            <div className="px-4">
                {loading && <p>Loading...</p>}
                {loading && <p>Error</p>}
                {!loading && !error && (
                    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
                        {coins.map((coin) => (
                            <CryptoCard coin={coin} key={coin.id} />
                        ))}
                    </main>
                )}
            </div>
        </div>
    );
};

export default App;
