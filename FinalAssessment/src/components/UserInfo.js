import { React, useState, useEffect } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";

export function User() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((Data) => {
        setDatas(Data);
      });
  }, []);
  return (
    <ImageList
      sx={{ width: 1000, height: 400 }}
      cols={4}
      rowHeight={164}
      component="main"
    >
      {datas.map((item) => (
        <ImageListItem key={item.name}>
          <img
            src={`${item.name}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.name}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.username}
            loading="lazy"
          />

          <ImageListItemBar
            username={item.username}
            actionIcon={
              <IconButton
                sx={{ color: "white" }}
                aria-label={`info about ${item.username}`}
              ></IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
export default User;
