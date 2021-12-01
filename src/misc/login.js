import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    setMessage(' ');
    try {
      // console.log(email, password);
      const response = await axios.post('/login', {
        email: email,
        password: password,
      });
      // console.log(response.data.token);
      if (response.status === 200) {
        localStorage.setItem('classHub', response.data.token);
        setMessage('Successful');
        window.location.href = '/dashboard';
      } else {
        setMessage('fail');
      }
      setIsLoading(false);
    } catch (err) {
      setMessage(err.message);
      toast.error('Invalid Credentials', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsLoading(false);
    }
  };
  return { isLoading, message, setMessage, onLogin };
};

export default useLogin;
