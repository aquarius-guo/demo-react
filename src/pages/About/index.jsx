import React from 'react';
import "./css/index.scss";

export default function About() {
  return (
    <div className="about">
      <h3>
        使用技术总结
      </h3>
      <ul className='about-technology'>
        <li>html</li>
        <li>sass</li>
        <li>React, React-Dom, React-router-dom</li>
        <li>webpack</li>
        <li>Nodejs</li>
      </ul>
      <h3>
        简述
      </h3>
      <p>
        项目地址 <a href="https://github.com/aquarius-guo/demo-react">demo-react </a> 
        项目采用当前最新技术: React: ^18.0.0, React-dom: ^18.0.0, React-router-dom: ^6.3.0, webpacK: ^5.70.0, Nodejs: ^16.14.0
        , 🔎 详情请进入 github 查看
      </p>
      <p>如有好的意见或者建议, 请 email 联系: 1275401210@qq.com (目前还在找工作) </p>
    </div>
  )
}
