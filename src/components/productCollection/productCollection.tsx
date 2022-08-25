import React from "react";
import styles from './productCollection.module.css';
import {Row,Col,Typography,Divider} from 'antd';

interface PropsType {
  title:JSX.Element;
  sideImage:string;
  products:any[];
}

export const ProductCollection:React.FC<PropsType> = ({title,sideImage,products}) => {
  return
}