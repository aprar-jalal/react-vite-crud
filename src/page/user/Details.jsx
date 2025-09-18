import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../component/loader/Loader";
import useFetch from "../../component/custom/useFetch";

function Details() {
  const { id } = useParams();
  const { data, error, isloading } = useFetch(`users/${id}`);

  console.log(data);

  if (isloading) {
    return (
      <span className="d-flex justify-content-center align-items-center vh-100 bg-secondary-subtle bg-opacity-50 backdrop-blur">
        <Loader />
      </span>
    );
  }
  if (error) {
    return <p className="alert alert-danger">{error}</p>;
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mb-5">
          <img
            src={data.image}
            className="h-100  object-fit-cover border rounded"
          />
        </div>
        <div className="col-lg-6 col-sm-12 text-danger-emphasis">
          <h2>
            {data.firstName} {data.lastName}
          </h2>
          <p>University: {data.university}</p>
          <p>UserAgent: {data.userAgent}</p>
          <p>Street: {data.address?.address}</p>
          <p>City: {data.address?.city}</p>
          <p>State: {data.address?.state}</p>
          <p>Country: {data.address?.country}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Role: {data.role}</p>
          <p>Hair Color: {data.hair?.color}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
