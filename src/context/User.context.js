import axios from 'axios';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  //Placing this side bar state here because of making another context 
  const [sidebarOpened, setSidebarOpened] = useState(true);
  const ToggleSideBar = () => {
    setSidebarOpened(!sidebarOpened);
  };

  const loadUser = useCallback(async () => {
    const token = localStorage.getItem('classHub');

    if (token) {
      await axios
        .get('/student')
        .then(result => {
          // console.log(result.data.user);
          setUser(result.data.user);
          setIsUserLoading(false);
        })
        .catch(err => {
          toast.error('Error occured', err);
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
    <UserContext.Provider value={{ user, isUserLoading, setUser, loadUser ,sidebarOpened , ToggleSideBar}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
