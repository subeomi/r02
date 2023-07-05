import { Link } from "react-router-dom";

const SampleNav = () => {
    return ( 
        <div className="flex m-6 p-4 text-white font-extrabold">
            <div className="px-2 text-3xl border-r-2 border-gray-200">
                <Link to={"/"}>Main</Link>
            </div>
            <div className="px-2 text-3xl border-r-2 border-gray-200">
                <Link to={"/about"}>About</Link>
            </div>
            <div className="px-2 text-3xl">
                <Link to={"/board/list"}>Board</Link>
            </div>
        </div>
     );
}
 
export default SampleNav;