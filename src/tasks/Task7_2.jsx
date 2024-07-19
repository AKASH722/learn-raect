export function Task7_2({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.name}>
          <img height={200} width={200} src={product.pic} alt={product.name} />
          <p>{product.name}</p>
          <p>₹{product.price}/-</p>
        </div>
      ))}
    </div>
  );
}
