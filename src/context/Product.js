import { createContext, useState } from "react";

export const ProductContext = createContext(null);

export function ProductProvider({ children }) {
    const [value, setValue] = useState(0);
    return (
        <ProductContext.Provider value={{ value, setValue }}>
            {children}
        </ProductContext.Provider>
    )
}