import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Dropdown, message } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import { userLogin, getUserInfo } from '@/api/login';
import { GITHUB_URL_OAUTH } from '@/utils/constant';
import { parseToken, getToken, removeToken } from '@/utils/parse';
import './css/index.scss';


export default function Login() {
  // 获取 search 参数
  const [search] = useSearchParams();
  const navigate = useNavigate();
  // 存储用户头像和名称
  const [_, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLogin, setIsLogin] = useState(getToken());


  // 跳转授权页面
  const handleClick = () => {
    window.location.href = GITHUB_URL_OAUTH
  }
  // 退出登录
  const handleLogOut = () => {
    // 删除 token
    removeToken();
    setUserName("");
    setAvatar("");
    setIsLogin("");
    navigate("/");
  }

  // 登录
  useEffect(() => {
    async function getGitToken(code) {
      try {
        const data = await userLogin(code);
        // 获取的 token
        parseToken(data);
        setIsLogin(data);
        // 跳转到首页
        navigate("/");
      } catch (error) {
        message.error("请求失败, 情稍后再试");
        navigate("/");
      }
    }
    const code = search.get("code");
    if (code) {
      getGitToken(code);
    }
  }, []);

  // 获取用户信息
  useEffect(() => {
    async function getUser() {
      const { login, avatar_url } = await getUserInfo();
      setUserName(login);
      setAvatar(avatar_url);
    };
    if (isLogin) {
      getUser();
    }
  }, [isLogin]);

  const loginShow = isLogin ? (
    <p className='header-info' onClick={handleLogOut}>
      <span>退出</span>
      <svg className="icon login-icon" aria-hidden="true">
        <use xlinkHref="#icon-denglu"></use>
      </svg>
    </p>
  ) : (
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
        {
          isLogin ? (
            <img src={avatar} alt="" />
          ) : (
            <div className='header-avatar'>
              <UserOutlined />
            </div>
          )
        }

      </div>
    </Dropdown >
  )
}
