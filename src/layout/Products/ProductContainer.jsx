const ProductsContainer = ({product}) => {
    console.log(product)
    const {strMeal, strMealThumb} = product;
    return ( 
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={strMealThumb}  className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{strMeal}</h2>
    <div className="card-actions">
      <button className="text-xl font-semibold text-white py-3 px-4 rounded bg-fuchsia-600 shadow-lg hover:bg-fuchsia-300">View More</button>
    </div>
  </div>
</div>
     );
}
 
export default ProductsContainer;