// import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", {
        name,
        email,
        phone,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-60 bg-white rounded p-3">
          <form onSubmit={Submit}>
            <div className="form-group mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
