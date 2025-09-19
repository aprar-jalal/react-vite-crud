import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../component/loader/Loader";
import useFetch from "../../component/custom/useFetch";
import { Link } from "react-router-dom";

function AllUsers() {
  const { data, error, isloading, setData } = useFetch("users");
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

  const removeUser = async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BURL_USERS}/users/${id}`
    );

    const newUsers = data.filter((user) => {
      return user.id != id;
    });

    setData(newUsers);
  };
  return (
    <table className="table mt-3 table-striped table-hover">
      <thead>
        <tr className="table-dark">
          <td>User Name</td>
          <td>User Street</td>
          <td>User City</td>
          <td>User State</td>
          <td>User Age</td>
          <td>crud</td>
        </tr>
      </thead>
      <tbody>
        {data.map((users) => (
          <tr key={users.id}>
            <td>
              {users.firstName} {users.lastName}
            </td>
            <td>{users.address?.address}</td>
            <td>{users.address?.city}</td>
            <td>{users.address?.state}</td>
            <td>{users.age}</td>
            <td className="d-flex justify-content-between">
              <Link
                className="text-decoration-none text-danger-emphasis bg-danger-subtle px-2 py-1 rounded-2 fw-bold fs-6"
                to={`/details/${users.id}`}
              >
                Details
              </Link>
              <button
                onClick={() => removeUser(users.id)}
                className="border-0 text-light bg-danger px-2 py-1 rounded-2 fw-bold fs-6"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AllUsers;
