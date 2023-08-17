import Sharecards from "./ShareCars/Sharecards";
import Loader from "./Loader";
import { useEffect, useState } from "react";


function Shares(){
    const [data,setData] = useState([]);
    const [page,setPage] = useState(0);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        window.addEventListener("scroll",scrollbehavior);
        startfunc();
        fetchData();
   },[])

    const startfunc = async() =>{
        const response = await fetch(`${import.meta.env.VITE_API}`,{method:"GET"});
        console.log(response.status);
    }
    
    useEffect(()=>{
        fetchData();
    },[page])

    const fetchData = async()=>{
        const response = await fetch(`${import.meta.env.VITE_API}/coinprice?page=${page}`,{method:"GET"});
        const resdata = await response.json();
        setData((prev)=>[...prev,...resdata]);
        setLoading(false)
    }



    const scrollbehavior = ()=>{
        if (window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight) {
            setLoading(true);
           setPage((prev)=>prev+1);
        }   
       }
       
    
    return(
        <>
            <div className="main-cont  flex flex-wrap justify-center m-1 mt-0 lg:m-4">
                {
                     data.map(r=>{
                        return <Sharecards name={r.naming} symbol={r.symbol} price={r.price}  logo={r.logo}/>
                     })
                }
                
            </div>
            {loading && <Loader/>}
            
        </>
    )
}

export default Shares;