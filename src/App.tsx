import React from 'react';
import styles from './App.module.css';
import { Header, Footer, Carousel,SideMenu } from './components';
import { Row, Col } from 'antd';
import {productList1,productList2,productList3} from './mockup';
import sideImage from './assets/images/sider_2019_12-09.png'
import sideImage2 from './assets/images/sider_2019_02-04.png'
import sideImage3 from './assets/images/sider_2019_02-04-2.png'


function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容 content */}
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
          <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection></ProductCollection>
      </div>
      <Footer />
    </div >
  );
}

export default App;
