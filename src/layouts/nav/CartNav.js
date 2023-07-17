import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";


const CartNav = () => {

    const { email, nickname } = useSelector(state => state.login)

    const { items } = useSelector(state => state.cart)

    const dispatch = useDispatch()

    useEffect(() => {

        if (!email) {
            return
        }

        dispatch(getCartThunk(email))

    }, [email])

    return (
        <div className="relative">
            <div className="text-4xl flex items-center ml-4 rounded-full w-10 h-10 hover:bg-gray-200 cursor-pointer">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
            <span
                className="w-5 h-5 flex items-center justify-center rounded-full text-white text-base bg-blue-500 absolute top-[-2px] right-[-2px]">
                {items.length}
            </span>
        </div>
    );
}

export default CartNav;