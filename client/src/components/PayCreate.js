import { Button } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import Cardpay from './Cardpay';

const PayCreate = () => {
    const [paydata,setdata]=useState({});
    const [data,setd]=useState(false);
    const submitHandler = async () => {
        try {
            let satisfied = false;
            setd(false);
            // Loop until the condition is satisfied
            while (!satisfied) {
                const datasourcepay = await axios.get("/pay");
                console.log(datasourcepay);
    
                // Check if the response condition is met
                if (datasourcepay.data.response) {
                    setd(true);
                    satisfied = true; // Exit the loop once the condition is satisfied
                }
    
                
    
                setdata(datasourcepay.data); // Update the data outside the loop to reflect the latest response
            }
        } catch (err) {
            console.log(err);
        }
    };
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