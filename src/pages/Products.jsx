// 
import ProductCard from "../components/ProductCard"
import { products } from "../data"

const Products = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 mt-20">
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
  )
}

export default Products