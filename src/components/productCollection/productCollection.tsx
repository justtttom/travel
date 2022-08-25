import React from "react";
import styles from './productCollection.module.css';
import {Row,Col,Typography,Divider} from 'antd';

interface PropsType {
  title:JSX.Element;
  sideImage:string;
  products:any[];
}

export const ProductCollection:React.FC<PropsType> = ({title,sideImage,products}) => {
  return <div className={styles.content}>
    <Divider orientation="left">{title}</Divider>
    <Row>
      <Col span={4}>
        <img src={sideImage} className={styles["side-image"]} alt="" />
      </Col>
      <Col span={20}>
        <Row>
          <col span={12}>
            
          </col>
          <col span={12}></col>
            <Row>
              <col span={12}></col>
              <col span={12}></col>
            </Row>
            <Row>
            <col span={12}></col>
            <col span={12}></col>
            </Row>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
        </Row>
      </Col>
    </Row>
  </div>
}