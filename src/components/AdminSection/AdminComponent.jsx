import React, { useState } from 'react'
import Connection from '../Connection';
import { useNavigate } from 'react-router-dom';

const AdminComponent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    Connection.adminForm(data)
      .then(response => {
        setLoading(false);
        console.log(response.data)
        if (response.data.token) {

          alert("Successfully Login Admin..");
          navigate("/dashboard-admin");
        } else {
          setLoading(false);
          alert("Invalid login credentials");
        }
        setData({ username: '', password: '' });
      })
      .catch(error => {
        setLoading(false);
        alert("Failed to send message");
        setData({ username: '', password: '' });
      });
  }
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="col-md-4">
        {loading && (
          <div className="text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
              alt="Loading..."
              style={{ width: '90px', height: '90px' }}
              className="img-fluid"
            />
            <p className="mt-3">Please wait...</p>
          </div>
        )}
        <form className="form text-center p-4 shadow rounded bg-light" onSubmit={formSubmit}>
          <label htmlFor="username" className="form-label">Admin Name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter the name"
            className="form-control mb-3"
            required
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
            required
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