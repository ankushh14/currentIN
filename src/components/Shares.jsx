import Sharecards from "./ShareCars/Sharecards";
import logos from "../assets/stockimage.svg"

function Shares(){
    return(
        <>
            <div className="main-cont mt-2 flex flex-wrap justify-center m-1 lg:m-4">
                <Sharecards name={"Tata Consultancy Services"} symbol={"TCS"} currency={"INR"} country={"India"} logo={logos}/>
                <Sharecards name={"Tata Consultancy Services"} symbol={"TCS"} currency={"INR"} country={"India"} logo={logos}/>
                <Sharecards name={"Tata Consultancy Services"} symbol={"TCS"} currency={"INR"} country={"India"} logo={logos}/>
                <Sharecards name={"Tata Consultancy Services"} symbol={"TCS"} currency={"INR"} country={"India"} logo={logos}/>
                <Sharecards name={"Tata Consultancy Services"} symbol={"TCS"} currency={"INR"} country={"India"} logo={logos}/>
                <Sharecards name={"Tata Consultancy Services"} symbol={"TCS"} currency={"INR"} country={"India"} logo={logos}/>
                <Sharecards name={"Tata Consultancy Services"} symbol={"TCS"} currency={"INR"} country={"India"} logo={logos}/>
                <Sharecards name={"Tata Consultancy Services"} symbol={"TCS"} currency={"INR"} country={"India"} logo={logos}/>
            </div>
        </>
    )
}

export default Shares;