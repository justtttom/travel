import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GoldOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <Typography.Text>让旅游更轻松</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GoldOutlined />}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button>注册</Button>
            <Button>登陆</Button>
          </Button.Group>
        </div>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>Tom travel</Typography.Title>
          <Input.Search placeholder="请输入旅游目的地、主题、或者关键字" className={styles['search-input']} />
        </Layout.Header>
      </div>
    </div >
  );
}

export default App;
