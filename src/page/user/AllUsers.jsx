import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../component/loader/Loader";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isloading, setLoader] = useState(true);
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BURL_USERS}/users`
      );
      setUsers(data.users);
      setError(null);
      console.log(data.users);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  if (isloading) {
    return (
      <span className="d-flex justify-content-center align-items-center vh-100 bg-secondary-subtle bg-opacity-50 backdrop-blur">
        <Loader />
      </span>
    );
  }
  if (error) {
    return <p className="alert alert-danger"> {error}</p>;
  }
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center align-items-center flex-wrap gap-3">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="card mb-3 col-lg-3  col-md-4 col-sm-8 text-center"
            >
              <div className="card-body text-danger-emphasis">
                <h5 className="card-title fw-bold">
                  {user.firstName} {user.lastName}
                </h5>
                 <img src={user.image} className="card-img-center"  />
                <p className="card-text fw-small">
                  <p>Street: {user.address?.address}</p>
                  <p>City: {user.address?.city}</p>
                <p>State: {user.address?.state}</p>
                <p>Age: {user.age}</p>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllUsers;
