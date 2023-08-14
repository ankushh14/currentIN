import { Circles } from  'react-loader-spinner'

function Loader() {
    return(
        <div className="flex justify-center m-2">
        <Circles
            height="30"
            width="30"
            color="black"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
    )    
}
export default Loader;