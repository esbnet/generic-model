import { useState, useContext, createContext } from "react";

export enum Page {
    Articles = 'Articles',
    Authors = 'Authors',
}

type ContextType = {
    page: Page;
    setPage(page: Page): void;
}

const Context = createContext<ContextType>({
    page: Page.Articles,
    setPage: (page: Page) => { console.warn('setPage not implemented'); }
});

export const usePage = () => useContext(Context);

export const PageStore: React.FC = ({ children }) => {
    const [page, setPage] = useState<Page>(Page.Articles);

    return (
        <Context.Provider value={{ page, setPage }}>
            {children}
        </Context.Provider>
    );
};

