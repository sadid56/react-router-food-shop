import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const productsData = useLoaderData();
    const products = productsData.meals;
    return ( 
        <div>
            <div className='lg:flex'>
                <div className="flex flex-col lg:w-[30%] lg:border-r-2 border-black  h-fit lg:min-h-screen bg-gray-300 p-16">
                <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src='https://i.ibb.co/NCGYYDX/profile.jpg' />
                </div>
                </div>
                <ul className="mt-5 text-xl font-semibold space-y-5">
                    <li><a href="">Profile</a></li>
                    <li><a href="">Settings</a></li>
                    <li><a href="">Account</a></li>
                    <li><a href="">Add Money</a></li>
                </ul>
                </div>
                {/* bar chart */}
               
                <div className=' lg:w-[40%] mx-auto mt-10'>
           <div>
           <div style={{maxWidth: '1250px', height: "400px", width: '100%'}}>
            <h2 className='text-3xl font-bold w-fit border-b-2 border-black mx-auto mb-5'>Our Products Graph Chart:</h2>
            <ResponsiveContainer  width="100%" height="100%">
           <LineChart width={500} height={400} data={products}>
            <Line type="monotone" dataKey="idMeal" stroke="red" />
            <XAxis dataKey="strMeal"></XAxis>
            <YAxis></YAxis>
            <CartesianGrid></CartesianGrid>
            <Tooltip></Tooltip>
            <Legend></Legend>
            </LineChart>
            </ResponsiveContainer>
           </div>
           </div>
                </div>

                <div className='lg:w-[30%] lg:border-l-2 border-black mt-24 lg:mt-0'>

                

                <div className="w-full h-fit lg:min-h-screen p-4 text-black sm:p-8 bg-gray-300">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none  ">Latest Customers</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/NCGYYDX/profile.jpg" alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium  truncate ">
                            Neil Sims
                        </p>
                        <p className="text-sm ">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold  ">
                        $320
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/NCGYYDX/profile.jpg" alt="Bonnie image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium  truncate ">
                            Bonnie Green
                        </p>
                        <p className="text-sm ">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold  ">
                        $3467
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/NCGYYDX/profile.jpg" alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium  truncate ">
                            Michael Gough
                        </p>
                        <p className="text-sm ">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold  ">
                        $67
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/NCGYYDX/profile.jpg" alt="Lana image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium  truncate ">
                            Lana Byrd
                        </p>
                        <p className="text-sm ">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold  ">
                        $367
                    </div>
                </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/NCGYYDX/profile.jpg" alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium  truncate ">
                            Thomes Lean
                        </p>
                        <p className="text-sm ">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold  ">
                        $2367
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>


                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;