const About = () => {
    return (
        <div className="p-4 pt-10 flex items-center justify-center">
            <div className="max-w-lg bg-secondary/10 border-2 border-text-primary/50 rounded-2xl p-4">
                <h2 className="text-text-inverse text-2xl mb-3 font-bold font-heading md:text-3xl">
                    About Crypto Dash
                </h2>
                <p className="text-primary text-sm">
                    Crypto Dash is a simple React application that displays live
                    cryptocurrency data using the CoinGecko API.
                    <br />
                    <br />
                    You can explore the top cryptocurrencies by market cap,
                    filter by name or symbol, and sort them by price, market
                    cap, or 24-hour change.
                </p>
            </div>
        </div>
    );
};

export default About;
