
import CountDisplay from "../components/counter/CountDisplay";
import CounterButtons from "../components/counter/CounterButtons";
import TodoInput from "../components/todo/TodoInput";
import BasicLayout from "../layouts/BasicLayout";
import useCustomLogin from "../hooks/useCustomLogin";
import TodoList from "../components/todo/TodoList";

const AboutPage = () => {

    const { loginInfo } = useCustomLogin()

    return (
        <BasicLayout>
            <div className="p-4 h-full min-h-screen bg-white flex flex-col items-center">
                <div>
                    <TodoInput></TodoInput>
                </div>
                <div>
                    <TodoList></TodoList>
                </div>
            </div>
        </BasicLayout>
    );
}

export default AboutPage;