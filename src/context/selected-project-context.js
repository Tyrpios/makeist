import React, { createContext, useContext, useState } from 'react';

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
    const [selectedProjects, setSelectedProject]  = useState('INBOX');

    return (
        <SelectedProjectContext.Provider value={{ selectedProjects, setSelectedProject }}>
            {children}
        </SelectedProjectContext.Provider>
    );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);