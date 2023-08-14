function Sharecards({name,symbol,price,logo}) {
   return(
    <>   
      <div className="card-div  rounded-md shadow-md shadow-black flex flex-col justify-evenly m-6  w-[300px]  h-[350px]">
         <div className="card-name mx-4 mt-2">
            <h1 className="text-xl font-bold">{name}</h1>
         </div>
         <div className="card-symbol mx-4  font-semibold">
            <h1>{symbol}</h1>
         </div>
         <div className="card-image mx-4 my-3 flex justify-center">
            <img src={logo} alt="logo" className="h-[20vh]" />
         </div>
         <div className="card-currency font-semibold mx-4 my-3">
            <h1>Price = {price} <span className="text-xl font-bold">$</span></h1>
         </div>
         
      </div>
    </>
   ) 
}

export default Sharecards;