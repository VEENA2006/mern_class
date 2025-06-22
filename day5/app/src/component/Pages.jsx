/*import Img from "../assets/react.svg"
import Login from"./login"
import "./style/Pages.css"
function Pages(){
    return(
        <>
        <img src={Img} alt="react image" />
        <Login/>
        </>
    )
}
export default Pages;*/
import Login from "./login.jsx"
import img from "../assets/react.svg"
function Pages(){
    return(
        <div className="cent">
            <img src={img} alt="not found"/>
         <Login/> 
        </div>
    )
}
export default Pages;
