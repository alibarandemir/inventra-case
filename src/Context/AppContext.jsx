import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [results, setResults] = useState([]);
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const response = await fetch('https://6733b11da042ab85d117b0a5.mockapi.io/inventra');
          const data = await response.json();
          setUserInfo(data[0].userProfile);
          setDoctors(data[0].doctors);
          setNewProducts(data[0].brandNewProducts);
          setResults(data[0].results)
          setArticles(data[0].articles)
        } catch (error) {
          console.error('Veri çekme hatası:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <AppContext.Provider value={{ userInfo, doctors, newProducts,doctors,articles,results }}>
        {children}
      </AppContext.Provider>
    );
  };



export const useAppContext = () => {
    return useContext(AppContext);
  };