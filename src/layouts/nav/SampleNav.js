
import { Link } from "react-router-dom";

const SampleNav = () => {


    return ( 
        <div className="flex mx-2 p-4 ">
            <div className="px-4 text-3xl border-r-2 border-gray-200 hover:text-indigo-400">
                <Link to={"/"}>MAIN</Link>
            </div>
            <div className="px-4 text-3xl border-r-2 border-gray-200 hover:text-indigo-400">
                <Link to={"/about"}>ABOUT</Link>
            </div>
            <div className="px-4 text-3xl border-r-2 border-gray-200 hover:text-indigo-400">
                <Link to={"/products/list"}>PRODUCTS</Link>
            </div>
            <div className="px-4 text-3xl border-r-2 border-gray-200 hover:text-indigo-400">
                <Link to={"/board/list"}>BOARD</Link>
            </div>
            <div className="px-4 text-3xl hover:text-indigo-400">
                <Link to={"/board/list"}>FAQ</Link>
            </div>
        </div>
     );
}
 
export default SampleNav;