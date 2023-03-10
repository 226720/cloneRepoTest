import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

function Posts() {
  const [data, setData] = useState([]);
  const columns = [
    { title: "UserId", field: "userId" },
    { title: "Id", field: "id" },
    { title: "Title", field: "title" },
    { title: "Content", field: "body" },
  ];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <div className="App">
      <h4 align="center">Posts</h4>
      <MaterialTable
        title="Posts"
        data={data}
        columns={columns}
        
        
        
      />
    </div>
  );
}

export default Posts;
