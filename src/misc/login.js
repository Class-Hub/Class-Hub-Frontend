import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    setMessage(' ');
    try {
      console.log(email, password);
      const response = await axios.post('/login', {
        email: email,
        password: password,
      });
      console.log(response.data.token);
      if (response.status === 200) {
        localStorage.setItem('jwtToken', response.data.token);
        setMessage('Successful');
        window.location.href = '/dashboard';
      } else {
        setMessage('fail');
      }
      setIsLoading(false);
    } catch (err) {
      setMessage(err.message);
      setIsLoading(false);
    }
  };
  return { isLoading, message, setMessage, onLogin };
};

export default useLogin;
