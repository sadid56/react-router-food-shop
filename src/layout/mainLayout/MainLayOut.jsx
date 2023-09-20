import { NavLink,Link, Outlet, useNavigation } from "react-router-dom";
import Footer from "../footer/Footer";
import Loading from "../isLoading/Loading";
import './mainLayout.css'
import { useState } from "react";
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai';

const MainLayout = () => {
    const navigation = useNavigation();
    const [open, setOpen]= useState(false)
    return ( 
        <div>
            <nav id="nav" className=" sticky top-0 flex items-center justify-between py-2 bg-gray-300 px-6 z-50">
                <div>
                    <h1 className="text-4xl font-extrabold " >Fast <span className="text-fuchsia-600">Food</span></h1>
                </div>
                <ul className={`md:flex md:static absolute space-y-7 md:space-y-0 bg-gray-300 p-5 lg:space-x-9 text-xl font-semibold text-gray-600 duration-1000
                ${open? 'top-14' :'-top-[300px]'}
                `}>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink to='/services'>Services</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    
                </ul>
                <div className="md:hidden block" onClick={() => setOpen(!open)}>
                    {
                        open === true?   <AiOutlineClose className="text-2xl"></AiOutlineClose> : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                    }
                </div>
            </nav>
<hr />
            <main className="min-h-screen px-5 md:px-0">
                {
                    navigation.state === 'loading'? <Loading></Loading> :  <Outlet></Outlet>
                }
           
            </main>
<hr />
            <Footer></Footer>
        </div>
     );
}
 
export default MainLayout;