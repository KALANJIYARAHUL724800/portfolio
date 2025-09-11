import React, { useState } from 'react'
import Connection from '../Connection';
import { useNavigate } from 'react-router-dom';

const AdminComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    Connection.adminForm(data)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          
          alert("Successfully Login Admin..");
          navigate("/dashboard-admin");
        } else {
          alert("Invalid login credentials");
        }
        setData({ username: '', password: '' });
      })
      .catch(error => {
        alert("Failed to send message");
        setData({ username: '', password: '' });
      });
  }
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="col-md-4">
        <form className="form text-center p-4 shadow rounded bg-light" onSubmit={formSubmit}>
          <label htmlFor="username" className="form-label">Admin Name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter the name"
            className="form-control mb-3"
            value={data.username}
            onChange={handleChange}
          />

          <label htmlFor="password" className="form-label">Admin Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter the password"
            className="form-control mb-3"
            value={data.password}
            onChange={handleChange}
          />
          <button className="btn btn-success w-100" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AdminComponent