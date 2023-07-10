import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div className="p-4 h-full bg-amber-50 flex justify-center bg-opacity-25 backdrop-blur-sm">
                <div className="w-[40vw]">
                <Outlet></Outlet>
                </div>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;