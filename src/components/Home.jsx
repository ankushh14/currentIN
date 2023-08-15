import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";

function Home(){
    const startfunc = async() =>{
        const response = await fetch(`${import.meta.env.VITE_API}`);
        console.log(response.status);
    }
    useEffect(()=>{
        startfunc();
    },[])
    return(
        <>
            <div className="main-landing  bg-center   w-full h-screen bg-[url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ">
                <div className="background-correct backdrop-blur-[2px] w-full h-full flex flex-col items-center bg-black/30 ">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent inline my-3 mt-24 lg:mt-32">CurrentIN</h1>
                <p className="text-xl m-4 mt-7 w-[300px] text-white font-bold  text-center">Discover real-time crypto prices and stay ahead in the digital market with our comprehensive website.</p>
                <div className="links-container flex flex-col justify-center items-center m-6">
                    <Link to="/exchange" className="text-white underline m-2">Currency exchange &#x2192;</Link>
                    <Link to="/coins" className="text-white underline m-2">Crypto prices &#x2192;</Link>

                </div>
                </div>
            </div>
            <div className="currency-exchange w-full h-screen mt-2 py-8 bg-zinc-900 flex flex-col items-center lg:justify-center">
                <img className="w-[200px] mt-4 " src="https://img.freepik.com/free-icon/rupee_318-642465.jpg?t=st=1692097398~exp=1692097998~hmac=63d8b8c57cdceab63fc064839cee034bf6ed82b683df60db49cd084679cf6778" alt="" />
                <h1 className="text-3xl font-bold text-white my-4 mt-8">Currency Exchange</h1>
                <p className="text-white w-[300px] text-center mt-2">Convert any currency value instantly with our user-friendly online tool.This functionality is built using TwelveData currency conversion Api.</p>
                <Link to="/exchange" className="text-white underline m-2 mt-6">Currency exchange &#x2192;</Link>
            </div>
            <div className="crypto-container w-full h-screen mt-2 mb-2 py-8 bg-zinc-900 flex flex-col items-center lg:justify-center ">
                <img className="w-[200px] mt-4 rounded-full " src="https://img.freepik.com/free-vector/illustration-bitcoin-concept_53876-8773.jpg?w=740&t=st=1692100004~exp=1692100604~hmac=436f0c0b1a77652aa35e99980f1eae103f3ab9692c4986dbc529925e698b28ef" alt="" />
                <h1 className="text-3xl font-bold text-white my-4 mt-8">Crypto Prices</h1>
                <p className="text-white w-[300px] text-center mt-2">Stay updated on the dynamic world of cryptocurrencies with real-time prices and market data, all in one accessible platform.Built using Coinranking API.</p>
                <Link to="/coins" className="text-white underline m-2 mt-6">Crypto prices &#x2192;</Link>
            </div>
            <Footer/>
        </>
    )
}

export default Home;