import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata.js";
import Loading from "../../more/Loader.js";
import { getAdminProduct } from "../../actions/ProductActions.js";
import { getAllOrders } from "../../actions/OrderAction.js";
import { getAllUsers } from "../../actions/userAction.js";

const Dashboard = () => {

  const dispatch = useDispatch();

  const { products,loading } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.AllOrders);

  const { users } = useSelector((state) => state.allUsers);

   let outOfStock = 0;
     
   products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

    useEffect(() => {
        dispatch(getAdminProduct());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
      }, [dispatch]);    

    let totalAmount = 0;
      orders &&
        orders.forEach((item) => {
          totalAmount += item.totalPrice;
        });

    return (
       <>
       {loading ?
       <Loading />
       :(
        <div className="dashboard">
        <MetaData title="Dashboard" />
        <Sidebar />
  
        <div className="dashboardContainer">
          <Typography component="h1">Dashboard</Typography>
  
          <div className="dashboardSummary">
            <div>
              <p>
                Total Amount <br /> ${totalAmount}
              </p>
            </div>
            <div className="dashboardSummaryBox2">
              <Link to="/admin/products">
                <p>Products</p>
                <p>{products && products.length}</p>
              </Link>
              <Link to="/orders">
                <p>Orders</p>
                <p>{orders && orders.length}</p>
              </Link>
              <Link to="/admin/users">
                <p>Users</p>
                <p>{users && users.length}</p>
              </Link>
            </div>
          </div>
  
          
        </div>
      </div>
       )
       }
       </>
    );
  };
export default Dashboard