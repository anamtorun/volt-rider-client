import { useEffect, useState } from 'react';

const useToken = (user, name) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const fnc = async (done) => {
      const email = user?.user?.email;
      const name = user?.user?.displayName || name;

      if (email) {
        const { data } = put('/users', { email, name });

        setToken(data.token);
        localStorage.setItem('fire_token', data.token);
      }
    };
  });
  return [token];
};

export default useToken;
