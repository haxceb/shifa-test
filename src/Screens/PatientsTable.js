import React, { useEffect, useState, useContext } from 'react'

import { Table, Tag, Space, Spin } from 'antd';
import axios from 'axios';
import { columns } from './utils';
import { Redirect, useHistory } from 'react-router';
import UserContext from '../Context/MyContext';
import Search from 'antd/lib/transfer/search';

const PatientsTable = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [patientsData, setPatientsData] = useState([]);
    const [context, setContext] = useContext(UserContext);

    const history = useHistory();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            history.push('/')
        }
        setIsLoading(true);
        axios.get('http://devjs01.shifa.com.pk:3000/patients/admitted', {
            headers: {
                authorization: token
            }
        }).then(res => {
            if (res.status === 200) {
                setPatientsData(res?.data?.data);
                setIsLoading(false);
            }
        })
    }, []);

    if (isLoading) return <div style={{ marginTop: 250, marginLeft: '50%' }}>
        <Spin />
    </div>
    return <div style={{ padding: 20 }}>
        <div style={{ padding: 5, display: 'flex', justifyContent: 'space-between' }}>
            <h1>In Patients</h1>
        </div>
        <Table columns={columns} dataSource={patientsData ?? []} />
    </div>
}

export default PatientsTable;