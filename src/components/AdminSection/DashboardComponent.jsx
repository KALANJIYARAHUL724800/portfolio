import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Connection from '../Connection'
const DashboardComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const contactDatas = Connection.contactAll();
        contactDatas.then((response) => {
            setData(response.data)

        }).catch((err) => {
            alert("Data is not Found")
        })
    }, [])
    return (
        <div className='container my-4'>
            <div className="table-responsive">
                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Sender Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, index) => (
                            <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.userName}</td>
                                <td>{val.email}</td>
                                <td>{val.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn btn-danger"  // normal red button
                    onClick={Connection.handleLogout}
                >
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                </button>
            </div>

        </div>
    )
}

export default DashboardComponent