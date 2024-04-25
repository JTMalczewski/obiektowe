import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Products from './pages/products';
import Basket from './pages/basket';
import PayPage from './pages/payPage';
import App from './App';
export const ProdContext = React.createContext(null);

export default function Router() {
    const [prod, setProd] = useState([]);
    const prodProviderValue = useMemo(() => ({ prod: prod, setProd: setProd }), [prod, setProd]);
    return (
        <ProdContext.Provider value={prodProviderValue}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<App />} />
                        <Route path="basket" element={<Basket />} />
                        <Route path="pay" element={<PayPage />} />
                        <Route path="products" element={<Products />} />
                        <Route path="*" element={<App />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ProdContext.Provider>
    )
}