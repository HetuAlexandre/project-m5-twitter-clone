import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tweet from "../Tweet/Tweet";
import LoadingIcon from "../../components/LoadingIcon";

const ProfileFeed = ({ userHandle }) => {
  const [userFeed, setUserFeed] = useState(null);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    fetch(`/api/${userHandle}/feed`)
      .then((res) => res.json())
      .then((res) => {
        setUserFeed(Object.values(res.tweetsById).reverse());
        setStatus("idle");
        console.log("Profile feed", Object.values(res.tweetsById).reverse());
      })
      .catch((error) => console.error("Error (fetch user tweets)", error))

      .catch((error) => {
        console.error("Error (fetch user tweets)", error);
        setStatus("error");
      });
  }, []);

  switch (status) {
    case "loading":
      return (
        <Wrapper>
          <LoadingIcon />
        </Wrapper>
      );
    case "idle":
      return (
        <Wrapper>
          {userFeed ? (
            userFeed.map((tweet) => (
              <Tweet tweet={tweet} key={tweet.id} setUserFeed={setUserFeed} />
            ))
          ) : (
            <LoadingIcon />
          )}
        </Wrapper>
      );
  }
};

const Wrapper = styled.div`
  width: 600px;
`;

export default ProfileFeed;
