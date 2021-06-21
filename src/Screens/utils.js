import { Table, Tag, Space, Spin, Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons'


export const columns = [
    {
        title: 'Sr. No.',
        dataIndex: 'index',
        key: 'index',
        render: (text, record, index) => <span>{index + 1}</span>
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        render: text => <span>{text}</span>,
    },
    {
        title: 'Patient',
        dataIndex: 'pname',
        key: 'pname',
        render: (text, record, index) => <div style={{ display: 'flex' }}>
            <Avatar size={50} icon={<UserOutlined />} />
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }}>
                <a>{record?.pname}</a>
                <span>MR No: {record?.mrno}</span>
                <span>Age: {record?.age}</span>
            </div>

        </div>
    },
    {
        title: 'Admitted On',
        dataIndex: 'adm_date',
        key: 'address',
    },
    {
        title: 'LOS',
        dataIndex: 'stay',
        key: 'stay',
    },
    {
        title: 'Physician',
        dataIndex: 'doctor',
        key: 'doctor',
        render: (text, record, index) => <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span><strong>Admiting: </strong>{record?.doctor}</span>
            <span><strong>Consulting: </strong>{record?.doctor}</span>
        </div>
    },
    {
        title: 'Complaints',
        dataIndex: 'presenting_complaint',
        key: 'presenting_complaint',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: tags => (
    //         <>
    //             {tags.map(tag => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Button type="primary">SWITCH BED</Button>
        ),
    },
];