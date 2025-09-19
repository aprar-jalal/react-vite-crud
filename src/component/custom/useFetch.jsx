import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useFetch(path) {
      const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isloading, setLoader] = useState(true);
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BURL_USERS}/${path}`
      );
      setData(response.data.users??response.data);
      setError(null);
      ;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return {data,error,isloading,setData}
}

export default useFetch