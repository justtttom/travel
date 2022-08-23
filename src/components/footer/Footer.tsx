import React from "react";
import styles from './Footer.module.css';
import { Layout, Typography } from 'antd';

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={4} style={{ textAlign: 'center' }}>
        版权所有 @ tom 旅游网
      </Typography.Title>
    </Layout.Footer>)
};