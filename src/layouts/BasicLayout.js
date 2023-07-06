import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 
        <div>
            <div className="min-w-[1280px] bg-black text-white flex flex-wrap items-center drop-shadow-lg bg-opacity-90">
                <div className="mx-6 p-4 text-2xl font-extrabold ml-10 cursor-pointer">
                    <span className="text-indigo-300">
                        <ion-icon name="accessibility-outline"></ion-icon>
                    </span>
                    Logo
                </div>
                <div className="mx-auto">
                <SampleNav></SampleNav>
                </div>
                <div className="mx-4 p-4 mr-10 flex">
                    <div className="mx-2 text-xl hover:text-gray-300 cursor-pointer">Sign in</div>
                    <div className="mx-2 text-xl hover:text-gray-300 cursor-pointer">Sign up</div>
                </div>
            </div>
                <div className="container mx-auto min-w-[1280px]">
                {children}
                </div>
        </div>
     );
}
 
export default BasicLayout;