import React, { Component } from "react";
import Product from "./Product";
import {} from "./Product.css";

export class ProductInfo extends Component {
  products = [
    {
      title: "IKEA Steel water bottle",
      type: "Water bottle",
      description: "water bottle which made of glass",
      url: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-drink-up-personalized-glass-water-bottle-1000ml-135901-m.jpg",
      price: "Rs.480",
      rating: 4.5,
    },
    {
      title: "Copper water bottle",
      type: "Water bottle",
      description: "Personalised water bottle made of copper",
      url: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-drink-all-your-water-personalized-copper-water-bottle-146321-m.jpg",
      price: "Rs.790",
      rating: 5,
    },
    {
      title: "NutraBay water bottle",
      type: "Water bottle",
      description: "NutraBay Shaker water bottle",
      url: "https://cdn.nutrabay.com/wp-content/uploads/2022/02/NB-NUT-1021-PA-01x-768x768.jpg",
      price: "Rs.490",
      rating: 3.5,
    },
    {
      title: "Personalised Water bottle",
      type: "water bottle",
      description: "Stainless steel personalised water bottle for kids",
      url: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-personalized-water-bottle-159302-m.jpg",
      price: "Rs.690",
      rating: 4,
    },
  ];
  constructor() {
    super();
    this.state = {
      products: this.products,
    };
  }
  render() {
    return (
      <div align="center">
        <h2>Products</h2>
        {this.state.products.map((appliance) => {
          return (
            <div key={appliance.price}>
              <Product
                title={appliance.title}
                price={appliance.price}
                description={appliance.description}
                imageUrl={appliance.url}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductInfo;
