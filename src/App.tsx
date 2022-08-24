import React from 'react';
import styles from './App.module.css';
import { Header, Footer } from './components';
import { Row, Col } from 'antd';


function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容 content */}
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div style={{ background: "yellow" }}>多重菜单</div>
          </Col>
          <Col span={18}>
            <div style={{ background: "green" }}>跑马灯</div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div >
  );
}

export default App;
