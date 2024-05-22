import { Button, Card, Table } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import Cardpay from './Cardpay';

const PayCreate = () => {
    const [paydata,setdata]=useState({});
    const [data,setd]=useState(false);
     const submitHandler =async()=>{
        try{
            const datasourcepay = await axios.get("/pay");
            console.log(datasourcepay);
            setd(true);
            setdata(datasourcepay.data);
           
        }catch(err){
            console.log(err);
        }
     }
  return (
    <div>
        <Button className='mt-24' onClick={submitHandler} type="primary">Show Jobs</Button>
        {data && paydata.response.map((values,index)=>{
            return(<Cardpay key={index} values={values}></Cardpay>)
        })}
    </div>
    
  )
}

  
  

export default PayCreate