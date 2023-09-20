import { NavLink,Link, Outlet } from "react-router-dom";
import 'react-awesome-slider/dist/styles.css';

const Home = () => {
    return ( 
        <div>
            <div className="hero min-h-screen container mx-auto">
        <div className=" flex flex-col lg:flex-row-reverse">

            <img src="https://i.ibb.co/TqKvj1v/delevery-woman-removebg-preview.png" className=" rounded-lg" />
 
            <div className="flex-1 p-10 lg:mt-5">
            <h1 className="text-3xl  md:text-5xl font-bold"><span className="text-fuchsia-600">No 1 Fast Food</span> delevery in bangladesh !!!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/products' className="text-xl font-semibold text-white py-3 px-4 rounded bg-fuchsia-600 shadow-lg hover:bg-fuchsia-300">Products</Link>
            </div>
        </div>
        </div>
        </div>
//         <div className="h-[600px]">
//       <AutoplaySlider
//     play={true}
//     cancelOnInteraction={false} // should stop playing on user interaction
//     interval={6000}
//   >
//     <div data-src='./img/delevery-woman-removebg-preview.png' />
//     <div data-src="/path/to/image-1.png" />
//     <div data-src="/path/to/image-2.jpg" />
//   </AutoplaySlider>
//         </div>
     );
}
 
export default Home;