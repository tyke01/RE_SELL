
const ProductCard = ({
  id,
  name,
  image,
  price,
  description,
  addToCart,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md bg-white p-4 mb-8">
      <img
        src={image}
        alt={name}
        className="w-full object-cover rounded-lg h-48"
      />
      <h3 className="text-xl font-bold my-2">{name}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">$ {price}</span>
        <button
          onClick={() => addToCart(id)}
          className="inline-block px-4 py-2 rounded-lg bg-blue-500 text-white font-bold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;