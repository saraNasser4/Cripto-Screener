import { createContext } from "react";

export const CryptoContext = createContext({})


export const CryptoProvider = ({children}) => {
    
    return (
        <CryptoContext.Provider>

        </CryptoContext.Provider>
    )
}
