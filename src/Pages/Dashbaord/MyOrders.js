import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import app from "../../firebase";

const auth = getAuth(app);
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const getOrders = async () => {
      if (user) {
        const email = user.email;
        const url = `${process.env.REACT_APP_SERVER_URL}/orders/filter?email=${email}`;
        const { data } = await axios.get(url);
        console.log(data);
      }
    };

    getOrders();
  }, [user]);
  return <div>MyOrders</div>;
};

export default MyOrders;
