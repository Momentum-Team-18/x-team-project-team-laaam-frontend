import React, { useState } from "react";
import axios from "axios";

const FollowButton = ({ token, clickedUserName }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followRelationship, setFollowRelationship] = useState("");
  const baseURL = "https://cards-q6a8.onrender.com/";

  const handleFollow = () => {
    axios
      .post(
        `${baseURL}api/follow_user/`,
        {
          user_this_user_is_following: clickedUserName,
        },

        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setIsFollowing(true);
        setFollowRelationship(res.data.id);
      });
  };

  console.log(followRelationship);

  const handleUnfollow = () => {
 
  axios
  .delete(`${baseURL}api/unfollow_user/${followRelationship}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
  .then((res) => {
    setIsFollowing(false);
    console.log(res.data);
  });

}

  return (
    <div>
      {!isFollowing ? (
        <button onClick={handleFollow}>Follow</button>
      ) : (
        <button onClick={handleUnfollow}>Unfollow</button>
      )}
    </div>
  );
};

export default FollowButton;
