import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Dropdown } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import './css/index.scss';
import { userLogin } from '@/api/login';
import { GITHUB_URL_OAUTH } from '@/utils/constant';
import { parseToken } from '@/utils/parse';

export default function Login() {
  // 获取 search 参数
  const [search] = useSearchParams();
  const code = search.get("code");
  // 跳转授权页面
  const handleClick = () => {
    window.location.href = GITHUB_URL_OAUTH
  }
  // 登录
  useEffect(() => {
    async function getUserInfo(code) {
      const data = await userLogin(code);
      // 获取的 token
      const token = parseToken(data);
    }
    if (code) {
      getUserInfo(code);
    }
  });
  const loginShow = (
    <p className='header-info' onClick={handleClick}>
      <span>登录</span>
      <svg className="icon login-icon" aria-hidden="true">
        <use xlinkHref="#icon-denglu"></use>
      </svg>
    </p>
  )

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
