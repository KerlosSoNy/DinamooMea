import { Space, Table } from "antd";
import { Link } from "react-router-dom";

export default function TableOfPages({ data, columns, handleDelete }: Table) {
    return (
        <Table dataSource={data} columns={[...columns, {
            title: 'Action',
            key: 'action',
            render: (_, record: any) => (
                <Space size="middle">
                    <Link to={`edit/${record.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(record.id)}>Delete</button>
                </Space>
            ),
        },]} />
    )
}
