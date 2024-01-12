
import ProductCard from "./ProductCard"
import { useState } from "react";

const ProductCards = () => {

    const [products, setProducts] = useState([
        {
          id: 1,
          name: "iPhone 14 Pro",
          image: "/phone-1.jpg",
          price: 1299,
          description:
            "The latest iPhone with a powerful A16 Bionic chip and a stunning Super Retina XDR display.",
        },
        {
          id: 2,
          name: "tecno",
          image: "/phone-2.jpg",
          price: 1199,
          description:
            "The ultimate Android phone with a powerful Snapdragon 8 Gen 3 chip and a massive 6.8-inch AMOLED display.",
        },
        {
          id: 3,
          name: "tecno",
          image: "/phone-3.jpg",
          price: 1199,
          description:
            "The ultimate Android phone with a powerful Snapdragon 8 Gen 3 chip and a massive 6.8-inch AMOLED display.",
        },
      ]);
    
  // const addToCart = (productId) => {
  //  Implement cart functionality
  //   console.log(`Adding product ${productId} to cart`);
  // };

  return (
    <div>
          <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Resell Marketplace
        </h1>
        <div className="grid lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              // addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCards