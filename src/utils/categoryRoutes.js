import React from 'react';
import { HomeOutlined, EditOutlined, TagsOutlined, UserSwitchOutlined } from "@ant-design/icons";


const categoryRoutes = [
    {
        to: "/",
        icon: <HomeOutlined />,
        title: "首页"
    },
    {
        to: "/archives",
        icon: <EditOutlined />,
        title: "归档"
    },
    {
        to: "/categorys",
        icon: <TagsOutlined />,
        title: "分类"
    },
    {
        to: "/about",
        icon: <UserSwitchOutlined />,
        title: "关于"
    },
]

export default categoryRoutes;