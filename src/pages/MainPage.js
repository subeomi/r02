import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {

    console.log("Main...")

    return ( 
        <BasicLayout>
            <div className="bg-white">
                <h2>Main Page</h2>
            </div> 
        </BasicLayout>
     );
}
 
export default MainPage;