import { useState } from "react";
import { createContext } from "react"

export const DataContext = createContext(null);

const DataProvider = ({children}) =>
{
    const [account, sAccount] = useState('');

    return <DataContext.Provider
        value={{ account, sAccount }}>
            {children}
    </DataContext.Provider>
}
export default DataProvider;