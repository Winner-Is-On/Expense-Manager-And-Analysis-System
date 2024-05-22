import { Card } from 'antd'
import React from 'react'

const Cardpay = ({values}) => {
  return (
    <div><Card
    title={values.company}
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>position: {values.position}</p>
    <p>location: {values.location}</p>
    <p>date: {values.date}</p>
    <p>agoTime: {values.agoTime}</p>
    <p>jobUrl: {values.jobUrl}</p>
   
  </Card></div>
  )
}

export default Cardpay