import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return <AppContext.Provider value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
    }}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => useContext(AppContext); //useContext ei kane custom hook function e call kore patanu lagbe
//ei ta custom hook akare patanu lagtece jodi hook er moto use na diye onno nam function create kori taile ei ta error show korbe



export { AppContext, AppProvider };