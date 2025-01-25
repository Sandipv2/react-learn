import { createContext, useContext } from "react";

export const CountContext = createContext(
    {
        count: 0,
        setCount: () => {}
    }
);

export const CountProvider = CountContext.Provider

export const useCount = () => {
    return useContext(CountContext)
}