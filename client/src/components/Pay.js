import React from 'react';
import { Button, Result } from 'antd';
import PayCreate from './PayCreate';


const Pay = () => {
  return (<div>
    <div><PayCreate></PayCreate></div>
    <div className='mt-24'> <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  /></div>
  </div>
    
  )
}

export default Pay
