import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";


const CounterButtons = () => {

    const dispatch = useDispatch()

    const handleClickInc = () => {
        dispatch(inc(2,"INC"))
    }

    const handleClickDec = () => {
        dispatch(dec(2,"DEC"))
    }

    return (
        <div>
            <button onClick={ handleClickInc }> INC </button>
            <button onClick={ handleClickDec }> DEC </button>
        </div>
    );
}

export default CounterButtons;