import React, { createContext, useState } from 'react';

// Create context
export const DataContext = createContext();

// DataProvider component to share state between ContactUs & Overview
export const DataProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([]); // Submissions state

  return (
    <DataContext.Provider value={{ submissions, setSubmissions }}>
      {children}
    </DataContext.Provider>
  );
};
