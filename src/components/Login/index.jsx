import React from 'react';
import { Dropdown } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import './css/index.scss';

const loginShow = (
  <p className='header-info'>
    <span>登录</span>
    <svg className="icon login-icon" aria-hidden="true">
      <use xlinkHref="#icon-denglu"></use>
    </svg>
  </p>
)


export default function Login() {
  return (
    <Dropdown overlay={loginShow}>
      <div className='header-login'>
        <div className='header-avatar'>
          <UserOutlined />
        </div>
      </div>
    </Dropdown>
  )
}
