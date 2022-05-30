import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      if (user) {
        const email = user.email;
        const url = `${process.env.REACT_APP_SERVER_URL}/user/${email}`;
        await axios
          .get(url, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then(function (response) {
            console.log(response, "request successfull");
            setCurrentUser(response.data);
          })
          .catch(function (error) {
            console.log(error);
            if (
              error.response.status === 401 ||
              error.response.status === 403
            ) {
              signOut(auth);
              localStorage.removeItem("accessToken");
              navigate("/");
            }
          });
      }
    };
    getUserInfo();
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(currentUser);

    const email = currentUser?.email;
    const name = currentUser?.name;
    const avatar = currentUser?.avatar;

    const phone = e.target.phone.value;
    const location = e.target.location.value;
    const education = e.target.education.value;
    const linkedIn = e.target.linkedIn.value;

    const updatedInfo = {
      email,
      name,
      avatar,
      phone,
      location,
      education,
      linkedIn,
    };

    const sendUser = async () => {
      await axios
        .put(`${process.env.REACT_APP_SERVER_URL}/user/${email}`, updatedInfo)
        .then(function (response) {
          console.log(response, "Put request successfull");
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    if (user) {
      sendUser();
      setUpdateProfile(false);
    }
  };

  return (
    <main>
      <h2 className="text-2xl font-medium mt-10">Hello, {currentUser.name}</h2>
      <div className="flex mt-10">
        <div className="mr-20">
          <div className="w-28 h-28 rounded-full overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src={currentUser.avatar}
              alt=""
              referrerPolicy="no-referrer"
            />
          </div>
          <button
            onClick={() => setUpdateProfile(!updateProfile)}
            className="btn btn-sm mt-5"
          >
            Edit profile
          </button>
        </div>
        {!updateProfile && (
          <div>
            <div className="mb-5">
              <h3 className="text-sm font-medium ">Full Name: </h3>
              <p className="text-2xl">{currentUser.name}</p>
            </div>
            <div className="mb-5">
              <h3 className="text-sm font-medium">Email: </h3>
              <p className="text-2xl">{currentUser.email}</p>
            </div>
            <div className="mb-5">
              <h3 className="text-sm font-medium">Phone: </h3>
              <p className="text-2xl">
                {currentUser?.phone
                  ? currentUser?.phone
                  : "Please provide phone number"}
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-sm font-medium">Education: </h3>
              <p className="text-2xl">
                {currentUser?.education
                  ? currentUser?.education
                  : "Please provide your education"}
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-sm font-medium">Location: </h3>
              <p className="text-2xl">
                {currentUser?.location
                  ? currentUser?.location
                  : "Please provide your location"}
              </p>
            </div>
          </div>
        )}

        {updateProfile && (
          <div className="w-full">
            <form
              onSubmit={(e) => handleSubmit(e)}
              action=""
              className="flex flex-col items-start w-full"
            >
              <input
                className="input input-bordered w-full max-w-xs my-3"
                name="phone"
                type="text"
                placeholder="Your phone.."
              />
              <input
                className="input input-bordered w-full max-w-xs my-3"
                name="education"
                type="text"
                placeholder="Education"
              />
              <input
                className="input input-bordered w-full max-w-xs my-3"
                name="location"
                type="text"
                placeholder="Location"
              />
              <input
                className="input input-bordered w-full max-w-xs my-3"
                name="linkedIn"
                type="text"
                placeholder="Linked In"
              />
              <button className="btn" type="submit">
                Update Info
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyProfile;
