import "./Product.css"

const Product = ({product}) => {
    const {id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity} = product
  return (
    <div className="product">
        <div className="product-img">
            <img src={img} alt="product" />
        </div>
        <div className="product-details">
           <h2>{name}</h2>
           <p>Price: ${price}</p>
           <p>Manufacturer: {seller}</p>
           <p>Rating: {ratings} stars</p>
        </div>
        <button className="btn-cart">Add To Cart</button>
    </div>
  )
}

export default Product