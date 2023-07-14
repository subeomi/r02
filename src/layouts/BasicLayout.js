import LoginNav from "./nav/LoginNav";
import SampleNav from "./nav/SampleNav";

const BasicLayout = ({ children }) => {
    return (
        <div>
            {/*  bg-opacity-90 */}
            <div className="min-w-[1280px] bg-white flex flex-wrap items-center drop-shadow-xl">
                <div className="mx-6 p-4 text-2xl font-extrabold ml-10 cursor-pointer flex items-center">
                    <span className="text-indigo-600 pt-1 mr-1">
                        <ion-icon name="accessibility-outline"></ion-icon>
                    </span>
                    SUBEOMI
                </div>
                <div className="mx-auto">
                    <SampleNav></SampleNav>
                </div>
                <div className="mx-4 p-4 mr-10 flex">
                        <LoginNav></LoginNav>
                </div>
            </div>
            <div className="container mx-auto min-w-[1280px] bg-white">
                {children}
            </div>
        </div>
    );
}

export default BasicLayout;