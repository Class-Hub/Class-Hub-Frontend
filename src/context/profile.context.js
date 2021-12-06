import React, { createContext, useState, useContext, useEffect } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem('classHub');
  useEffect(() => {
    if (token) {
      const decodedJwt = JSON.parse(atob(token.split('.')[1]));
      if (Date.now() >= decodedJwt.exp * 1000) {
        // console.log(false);
        localStorage.removeItem('classHub');
      } else {
        // console.log(false);
        const userData = {
          userId: decodedJwt.Id,
        };

        setProfile(userData);
      }
      setIsLoading(false);
    } else {
      setProfile(null);
      setIsLoading(false);
    }
  }, [token]);

  return (
    <ProfileContext.Provider value={{ isLoading, profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
