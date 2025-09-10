import React, { useEffect, useState } from 'react'
import Connection from '../Connection'
const DashboardComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const contactDatas = Connection.contactAll();
        contactDatas.then((response) => {
            console.log(response.data)
            setData(response.data)

        }).catch((err) => {
            console.log("Data is not Found")
        })
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="dflex">
                    <table className='table table-bordered table-stripped hovered'>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Sender Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.map((val,index)=>{return(
                                <tr key={index}>
                                    <td>{val.id}</td>
                                    <td>{val.userName}</td>
                                    <td>{val.email}</td>
                                    <td>{val.message}</td>
                                </tr>
                            )}) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent