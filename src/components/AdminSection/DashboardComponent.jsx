import React, { useEffect, useState } from 'react'
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
        <div className='container table-responsive'>
            <div className="row table-responsive">
                <div className="table-responsive">
                    <table className='table table-bordered table-striped table-hover'>
                        <thead className='table-responsive'>
                            <tr className='table-responsive'>
                                <th className='table-responsive'>Sno</th>
                                <th className='table-responsive'>Sender Name</th>
                                <th className='table-responsive'>Email</th>
                                <th className='table-responsive'>Message</th>
                            </tr>
                        </thead>
                        <tbody className='table-responsive'>
                            {data.map((val, index) => {
                                return (
                                    <tr key={index} className='table-responsive'>
                                        <td className='table-responsive'>{val.id}</td>
                                        <td className='table-responsive'>{val.userName}</td>
                                        <td className='table-responsive'>{val.email}</td>
                                        <td className='table-responsive'>{val.message}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger' onClick={Connection.handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent