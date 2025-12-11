import React,{useEffect, useState} from "react";
import OrderItem from "./OrderIItem";
import { getOrderHistory } from "../../../services/orderService";
function OrderContainer(props) {
  const status=props.status;
  const [loading,setLoading]=useState(true);
  const [orders,setList]=useState([]);
  async function getOrder() {
    try{
      const data=await getOrderHistory();
      setList(data);
    }
    catch(err){
      console.error(err);
    }
    finally{
      setLoading(false);
    }
  } 
  useEffect(()=>{
    getOrder();
  },[]);

  return (
    <div className="d-flex flex-column gap-2">
      {orders.map((order,index)=>{
        return <OrderItem key={index} order={order}/>
      })}
    </div>
  );
}
export default OrderContainer;
