import { React, useState, useEffect } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";

export function ProductInfo() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
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
        <ImageListItem key={item.id}>
          <img
            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.url}
            loading="lazy"
          />

          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: "white" }}
                aria-label={`info about ${item.title}`}
              ></IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
export default ProductInfo;
