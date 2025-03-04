import { Table } from "antd";
import { useEffect, useState } from "react";
import { getAllUsers } from "../services/api";

const User = (props) => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllUsers();
      console.log(response);
      if (response.ER === 0) setDataSource(response.users);
    };
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} bordered rowKey={"_id"} />
  );
};

export default User;
