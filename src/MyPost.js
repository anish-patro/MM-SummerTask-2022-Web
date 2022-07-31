import React, { useState, useEffect } from "react";

import {
 
  Typography,
  Container,
  
} from "@mui/material";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect((articleid) => {
    fetch(`/articles/${articleid}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  const eachPost = (articleid) => {
    fetch(`/articles/${articleid}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const likePost = (id) => {
    fetch("/articles/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        articleId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const unlikePost = (id) => {
    fetch("/articles/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        articleId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <Container className="grid-container">
      <div className="home-card">
        {data.map((item) => {
          return (
            <div className="eachpost">
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="caption">{item.date}</Typography>
              <Typography variant="caption">{item.author.firstname}</Typography>
              <Typography variant="subtitle1">{item.body}</Typography>
              <Typography variant="caption">{item.views} views</Typography>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Home;
