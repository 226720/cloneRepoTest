

import React, { useState, useEffect } from "react";

import Axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = data;
    setPosts(posts);
    console.log(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
       <>
       <p key={post.id}>ID No:{post.id}
        
        </p>
        <p key={post.id}>Title:{post.title}
        
        </p>
        <p key={post.id}>Body:{post.body}
        
        </p>
        </>
      ))}
    </div>
  );
}

export default Posts;
