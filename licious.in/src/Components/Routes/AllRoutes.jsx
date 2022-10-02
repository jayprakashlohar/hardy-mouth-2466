import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Address from "../../Pages/Address";
import DeliverySummary from "../../Pages/DeliverySummary";
import Payment from "../../Pages/Payment";
import Thankyou from "../../Pages/Thankyou";
import PrivateRoute from "../Private/PrivateRoute";


const AllRoutes = () => {

    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/checkout/order-summary" element={<PrivateRoute><Address /></PrivateRoute>}></Route>
            <Route path="/checkout/delivery-summary" element={<PrivateRoute><DeliverySummary /></PrivateRoute>}></Route>
            <Route path="/checkout/payments" element={<PrivateRoute><Payment /></PrivateRoute>}></Route>
            <Route path="/order-status" element={<PrivateRoute><Thankyou /></PrivateRoute>}></Route>
        </Routes>
        </>
    )
}

export default AllRoutes ;