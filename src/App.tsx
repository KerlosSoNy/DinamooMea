import { Table } from "antd"
import { useEffect } from "react";
import { axiosInstance } from "./util/axios/axios";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import { Toaster } from "sonner";

function App() {
  useEffect(() => {
    axiosInstance.get('KerlosSoNy/database/posts').then((res) => {
      console.log(res)
    })
  }, [])

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div className="flex flex-row gap-4">
      <Toaster />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App
