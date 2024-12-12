import { Card , Button} from 'antd'
import React from 'react'

const Cardpay = ({values}) => {
  const handleOpenJobUrl = () => {
    window.open(values.jobUrl, '_blank'); // Open the job URL in a new tab
  };
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
    <p>jobUrl: <Button type="primary" onClick={handleOpenJobUrl}>
        Apply Now
      </Button></p>
   
  </Card></div>
  )
}

export default Cardpay