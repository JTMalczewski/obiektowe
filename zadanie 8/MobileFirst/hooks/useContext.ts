import {
    createContext,
    useContext
} from "react";

type BasketContextType = {
    basket: {
        Apple: number;
        Orange: number;
        Banana: number;
        Carrot: number;
        Potato: number;
        Tomato: number;
        Shirt: number;
        Jacked: number;
        Hat: number;
    },
    setBasket: (b: { Apple: number; Orange: number; Banana: number; Carrot: number; Potato: number; Tomato: number; Shirt: number; Jacked: number; Hat: number }) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(
    {
        basket: {
            Apple: 0,
            Orange: 0,
            Banana: 0,
            Carrot: 0,
            Potato: 0,
            Tomato: 0,
            Shirt: 0,
            Jacked: 0,
            Hat: 0
        },
        setBasket: () => {}
    }
);

const useBasketContext = () => useContext(BasketContext)

export {BasketContext, useBasketContext, BasketContextType };