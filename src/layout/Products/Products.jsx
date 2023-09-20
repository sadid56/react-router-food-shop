import { useLoaderData } from "react-router-dom";
import ProductsContainer from "./ProductContainer";

const Products = () => {
    const productsData = useLoaderData();
    const products = productsData.meals;
    return ( 
        <div className="mt-10">
            <h1 className="text-3xl font-bold w-fit border-b-2 border-black mx-auto">Our All Foods: {products.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
            {
                products.map(product => <ProductsContainer product={product}></ProductsContainer>)
            }
            </div>
        </div>
     );
}
 
export default Products;