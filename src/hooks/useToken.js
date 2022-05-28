import { useEffect, useState } from "react";
import axios from "axios";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };

    const sendUser = async () => {
      await axios
        .put(`${process.env.REACT_APP_SERVER_URL}/user/${email}`, currentUser)
        .then(function (response) {
          console.log(response, "Put request successfull");
          const accessToken = response.data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    if (user) {
      sendUser();
    }
  }, [user]);

  return [token];
};

export default useToken;
