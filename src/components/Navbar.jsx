import { useState } from "react";

function Navbar() {
    const [Nav,setNav] = useState(true);
    return (
        <>
           <nav className="flex justify-between items-center bg-amber-50 border border-amber-100 p-4">
            <h1 className="text-2xl font-bold text-stone-700">CurrentIN</h1>
            <div className="bars flex flex-col lg:hidden cursor-pointer" onClick={()=>{setNav(!Nav);console.log(Nav)}}>
                <span className={`lines border-stone-700 border m-1 w-6 transition-all ${!Nav?"rotate-45 translate-y-2.5":""}`}></span>
                <span className={`lines border-stone-700 border m-1 w-6 transition-all ${!Nav?"-rotate-45":""}`}></span>
                <span className={`lines border-stone-700 border m-1 w-6 transition-all ${!Nav?"hidden -translate-y-2":""}`}></span>
            </div>
            
            <ul className={`nav-list absolute bg-amber-50 border border-amber-100 p-4 top-[4.5rem] flex flex-col w-screen ${!Nav?"left-0":"-left-full"} transition-all duration-500 lg:transition-none lg:static lg:flex lg:flex-row lg:w-fit lg:p-0 lg:border-none`}>
                <li className="list-items text-stone-700 m-3 lg:m-0 lg:mx-4 cursor-pointer text-center lg:hover:text-slate-950 lg:transition-colors "><i className='bx bxs-home-circle'></i>Home</li>
                <li className="list-items text-stone-700 m-3 lg:m-0 lg:mx-4 cursor-pointer text-center lg:hover:text-slate-950 lg:transition-colors"><i className='bx bx-money-withdraw'></i>Currency Converter</li>
                <li className="list-items text-stone-700 m-3 lg:m-0 lg:mx-4 cursor-pointer text-center lg:hover:text-slate-950 lg:transition-colors"><i className='bx bxs-report' ></i>Share Prices</li>
            </ul>
            
           </nav>
        </>
    );
}

export default Navbar