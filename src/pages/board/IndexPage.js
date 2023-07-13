import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return (
        <BasicLayout>
            {/*  bg-opacity-25 backdrop-blur-sm */}
            <div className="p-4 h-full bg-white flex justify-center">
                <div className="w-[40vw]">
                    <Outlet></Outlet>
                </div>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;