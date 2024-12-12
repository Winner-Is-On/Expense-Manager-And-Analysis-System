import React from 'react';
import { Button, Result } from 'antd';
import PayCreate from './PayCreate';
import { useNavigate } from 'react-router-dom';



const Pay = () => {
  const navigate = useNavigate();
  const handleBackHomeClick = () => {
    navigate('/dashboard'); // Navigate to the '/dashboard' route
  };
  return (<div>
    <div><PayCreate></PayCreate></div>
    <div className='mt-24'> <Result
    status="500"
    title="500"
    subTitle="Sorry please wait , something went wrong."
    extra={<Button type="primary" onClick={handleBackHomeClick} >Back Home</Button>}
  /></div>
  </div>
    
  )
}

export default Pay
