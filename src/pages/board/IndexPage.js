import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div className="p-4 bg-white text-2xl font-extrabold text-white flex justify-center bg-opacity-25 backdrop-blur-sm">
                <div className="mx-2">List</div>
                <div className="mx-2">Register</div>
            </div>
            <div className="h-full w-full bg-slate-100 border-2">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;