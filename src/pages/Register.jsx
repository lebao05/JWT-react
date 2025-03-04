import React from "react";
import { Button, Form, Input, message } from "antd";
import { registerAPi, testApi } from "../services/api";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await registerAPi(
        values.email,
        values.username,
        values.password
      );
      console.log("Res", response);
      if (response.ER === 0) navigate("/");
    } catch (error) {
      console.error("Registration Failed:", error);
      message.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <Form
        name="registerForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
