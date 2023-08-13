function Sharecards({name,symbol,currency,country,logo}) {
   return(
    <>   
      <div className="card-div bg-sky-200 rounded-md shadow-md shadow-black flex flex-col justify-center m-6 p-5  h-[40%]">
         <div className="card-name m-1 mx-4">
            <h1 className="text-xl font-bold">{name}</h1>
         </div>
         <div className="card-symbol m-1 mx-4 font-semibold">
            <h1>{symbol}</h1>
         </div>
         <div className="card-currency m-1 mx-4">
            <h1>{currency}</h1>
         </div>
         <div className="card-image m-1 mx-4 flex justify-center">
            <img src={logo} alt="logo" className="h-[20vh]" />
         </div>
         <div className="card-country m-1 mx-4">
            <h1>{country}</h1>
         </div>
      </div>
    </>
   ) 
}

export default Sharecards;