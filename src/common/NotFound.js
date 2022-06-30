import not_found from '../images/not_found.jpg'
import Header from "./Header";

const NotFound = () =>
    <>
        <Header/>
        <h1 className={"text-center"}>Not Found</h1>
        <div className={"position-absolute h-75 w-100 m-0 d-flex align-items-center justify-content-center"}>
            <img src={not_found} height={"100%"} alt={"not found"}/>
        </div>
    </>

export default NotFound