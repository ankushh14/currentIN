import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [Nav,setNav] = useState(true);
    return (
        <>
           <nav className="flex justify-between items-center bg-black w-full  p-4">
            <Link className="cursor-pointer" exact to="/">
            <h1 className="text-2xl font-bold text-white">CurrentIN</h1>
            </Link>
            <div className="bars flex flex-col lg:hidden cursor-pointer" onClick={()=>{setNav(!Nav);}}>
                <span className={`lines  border border-white m-1 w-6 transition-all duration-300 ${!Nav?"rotate-45 translate-y-2.5":""}`}></span>
                <span className={`lines  border border-white m-1 w-6 transition-all duration-300 ${!Nav?"-rotate-45":""}`}></span>
                <span className={`lines border border-white m-1 w-6 transition-all ${!Nav?"hidden -translate-y-2":""}`}></span>
            </div>
            
            <ul className={`nav-list z-50 absolute bg-black  p-4 top-[4.5rem] flex flex-col w-screen ${!Nav?"left-0":"-left-full"} transition-all duration-300 lg:transition-none lg:static lg:flex lg:flex-row lg:w-fit lg:p-0 lg:border-none`}>
                <NavLink to = "/">
                <li className="list-items text-white m-3 lg:m-0 lg:mx-4 cursor-pointer text-center lg:hover:text-gray-300 lg:transition-colors" onClick={()=>{setNav(!Nav)}}>
                    <i className='bx bxs-home-circle'></i>Home
                </li>
                </NavLink>
                <NavLink to="/exchange">
                <li className="list-items text-white m-3 lg:m-0 lg:mx-4 cursor-pointer text-center lg:hover:text-gray-300 lg:transition-colors" onClick={()=>{setNav(!Nav)}}>
                    <i className='bx bx-money-withdraw'></i>Currency Exchange
                </li>
                </NavLink>
                <NavLink to="/coins">
                <li className="list-items text-white m-3 lg:m-0 lg:mx-4 cursor-pointer text-center lg:hover:text-gray-300 lg:transition-colors" onClick={()=>{setNav(!Nav)}}>
                    <i className='bx bxs-report' ></i>Crypto Prices
                </li>
                </NavLink>
            </ul>
            
           </nav>
        </>
    );
}

export default Navbar