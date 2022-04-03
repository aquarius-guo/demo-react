import React from "react";
import { HomeOutlined, EditOutlined, TagsOutlined, UserSwitchOutlined } from "@ant-design/icons"
import "./css/index.scss";

function Category() {
  return (
    <div className="header-category">
      <ul>
        <li><HomeOutlined /><span>首页</span></li>
        <li><EditOutlined /><span>归档</span></li>
        <li><TagsOutlined /><span>分类</span></li>
        <li><UserSwitchOutlined /><span>关于</span></li>
      </ul>
    </div>
  );
}

export default Category