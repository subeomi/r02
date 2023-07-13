import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return (
        <BasicLayout>
            {/*  bg-opacity-25 backdrop-blur-sm */}
            <div className="p-4 h-full bg-white flex justify-center">
                <div className="text-3xl">
                    <div className="p-2 m-2 font-bold hover:bg-gray-200">
                        <Link to={"list"}>
                            <ion-icon name="list-outline"></ion-icon>
                        </Link>
                    </div>
                    <div className="p-2 m-2 font-bold hover:bg-gray-200">
                        <Link to={"register"}>
                            <ion-icon name="add-outline"></ion-icon>
                        </Link>
                    </div>
                </div>
                <div className="w-[40vw]">
                    <Outlet></Outlet>
                </div>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;