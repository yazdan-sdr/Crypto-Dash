import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import App from "./App";
import About from "./pages/aboutpage";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer/page";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/coin/:id" element={<CoinDetailsPage />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
        ,
    </StrictMode>,
);
