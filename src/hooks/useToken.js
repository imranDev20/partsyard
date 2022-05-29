import { useEffect, useState } from "react";
import axios from "axios";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const avatar = user?.user?.photoURL;
    const phone = user?.phone;
    const education = user?.education;
    const location = user?.location;
    const linkedIn = user?.linkedIn;

    const currentUser = {
      email: email,
      name: name,
      avatar: avatar,
      phone: phone,
      education: education,
      location: location,
      linkedIn: linkedIn,
    };

    console.log("user from useToken", user);

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
