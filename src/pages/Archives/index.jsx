import React from 'react';
import { Timeline } from "antd";
import { FieldTimeOutlined } from "@ant-design/icons"
import "./css/index.scss";
export default function Archives() {
  return (
    <div className='archives-steps'>
      <Timeline>
        <Timeline.Item>
          <span>文章发表时间</span>
        </Timeline.Item>
        <Timeline.Item dot={<FieldTimeOutlined />}>
          <h3>2022</h3>
        </Timeline.Item>
        <Timeline.Item>
          <div>
            <span>04-15</span>
            <a href="/">队列的实现与应用</a>
          </div>
        </Timeline.Item>
        <Timeline.Item>
          <div>
            <span>04-15</span>
            <a href="/">队列的实现与应用</a>
          </div>
        </Timeline.Item>
        <Timeline.Item>
          <div>
            <span>04-15</span>
            <a href="/">队列的实现与应用</a>
          </div>
        </Timeline.Item>
        <Timeline.Item>
          <div>
            <span>04-15</span>
            <a href="/">队列的实现与应用</a>
          </div>
        </Timeline.Item>
        <Timeline.Item>
          <div>
            <span>04-15</span>
            <a href="/">队列的实现与应用</a>
          </div>
        </Timeline.Item>
        <Timeline.Item>
          <div>
            <span>04-15</span>
            <a href="/">队列的实现与应用</a>
          </div>
        </Timeline.Item>
        <Timeline.Item>
          <div>
            <span>......</span>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}
