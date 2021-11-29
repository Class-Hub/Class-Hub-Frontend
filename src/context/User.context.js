import axios from 'axios';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  const loadUser = useCallback(async () => {
    const token = localStorage.getItem('classHub');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    if (token) {
      await axios
        .get('/student', config)
        .then(result => {
          setUser(result.data.user);
          setIsUserLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsUserLoading(false);
        });
    } else {
      setIsUserLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <UserContext.Provider value={{ user, isUserLoading, setUser, loadUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
