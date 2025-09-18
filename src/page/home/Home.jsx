import React from 'react'
import useFetch from '../../component/custom/useFetch'
import Loader from '../../component/loader/Loader';
import { Link } from 'react-router-dom';

function home() {
 const { data, error, isloading } = useFetch("users?limit=6");
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
        {data.map((users) => {
          return (
            <div
              key={users.id}
              className="card mb-3 col-lg-3  col-md-4 col-sm-8 text-center"
            >
              <div className="card-body text-danger-emphasis">
                <h5 className="card-title fw-bold">
                  {users.firstName} {users.lastName}
                </h5>
                <img src={users.image} className="card-img-center" />
                <div className="card-text fw-small">
                  <p>Street: {users.address?.address}</p>
                  <p>City: {users.address?.city}</p>
                  <p>State: {users.address?.state}</p>
                  <p>Age: {users.age}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link className="text-decoration-none text-danger-emphasis " to={'/AllUsers'}>Show All Users</Link>
    </div>
  );
}

export default home