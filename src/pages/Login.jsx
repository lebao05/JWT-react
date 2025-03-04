import React from "react";
import { Button, Form, Input, message } from "antd";
import { loginApi, registerAPi, testApi } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../component/auth.context";
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const onFinish = async (values) => {
    try {
      const response = await loginApi(values.email, values.password);
      console.log("Res", response);
      if (response.message === "success") {
        localStorage.setItem("access_token", response.user.access_token);
        setUser({
          isAuthenticated: true,
          info: {
            email: values.email,
            username: response.user.username,
          },
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Login Failed:", error);
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
          label="Email"
          name="email"
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
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
