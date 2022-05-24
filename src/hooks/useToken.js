import { useEffect, useState } from 'react';
import authFetch from '../config/axios';

const useToken = (user, name) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const fnc = async () => {
      const email = user?.user?.email;
      const username = user?.user?.displayName || name;

      if (email) {
        const { data } = await authFetch.put('/users', { email, name: username });

        setToken(data.token);
        localStorage.setItem('fire_token', data.token);
      }
    };

    fnc();
  }, [user, name]);
  return [token];
};

export default useToken;
