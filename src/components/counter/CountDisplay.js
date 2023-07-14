import { useSelector } from "react-redux";


const CountDisplay = () => {

    // 받을 상태를 지정
    const obj = useSelector(state => state.counter)

    console.log(obj)

    return ( 
        <div className="text-4xl">
            COUNT: {obj.num}
        </div>
     );
}
 
export default CountDisplay;