import axios from "axios";
import React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useFetch from "../../component/custom/useFetch";
import { Bounce, toast } from "react-toastify";

function Create() {
  const { data, setData } = useFetch("users");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const createUser = async (data) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BURL_USERS}/users/add`,
      data
    );
    setData((prev) => [...prev, response.data]);
    console.log(response);
    if (response.status === 201) {
      toast.success("user Added successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate("/Allusers");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(createUser)}
        className=" container vh-100 d-flex justify-content-center align-items-center flex-column gap-3"
      >
        <h2 className="text-danger-emphasis fw-bold">Create User</h2>
        <div className="col-lg-6 col-md-8 col-12 bg-danger-subtle p-5">
          <div className="form-floating mb-3">
            <input
              {...register("firstName", { required: "pleas enter you Name" })}
              type="text"
              className="form-control"
              id="userName"
              placeholder=""
            />
            <label htmlFor="userName">User First Name</label>
            {errors.firstName ? (
              <p className="text-danger">{errors.firstName.message}</p>
            ) : null}
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              {...register("email", { required: "pleas enter your email" })}
              className="form-control"
              id="userEmail"
              placeholder=""
            />
            <label htmlFor="userEmail">Email Address</label>
            {errors.email ? (
              <p className="text-danger">{errors.email.message}</p>
            ) : null}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              {...register("password", {
                required: "pleas enter your password",
                minLength: { value: 3, message: "too short" },
                maxLength: { value: 10, message: "too long" },
              })}
              className="form-control"
              id="Password"
              placeholder="Password"
            />
            <label htmlFor="Password">Password</label>
            {errors.password ? (
              <p className="text-danger">{errors.password.message}</p>
            ) : null}
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              {...register("phone", {
                required: "pleas enter your number",
                maxLength: { value: 8, message: "pleas enter only 8 digits" },
              })}
              className="form-control"
              id="Phone"
              placeholder=""
            />
            <label htmlFor="Phone">Phone</label>
            {errors.phone ? (
              <p className="text-danger">{errors.phone.message}</p>
            ) : null}
          </div>
          <div className="form-floating mb-3">
            <input
              {...register("age", { required: "pleas enter you age" })}
              type="text"
              className="form-control"
              id="userAge"
              placeholder=""
            />
            <label htmlFor="userAge">User Age</label>
            {errors.age ? (
              <p className="text-danger">{errors.age.message}</p>
            ) : null}
          </div>
        </div>
        <button className="btn p-2 btn-outline-secondary" type="submit">
          Create
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default Create;
