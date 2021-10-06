import React, { createContext, useState, useContext, useEffect } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const decodedJwt = JSON.parse(atob(token.split('.')[1]));
      console.log(decodedJwt)
      const userData = {
        userId: decodedJwt.Id,
      };
      setProfile(userData);
      setIsLoading(false);
    } else {
      setProfile(null);
      setIsLoading(false);
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
