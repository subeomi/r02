import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}

const ReadComponent = ({ pno, moveModify, moveList }) => {

    const { email } = useSelector(state => state.login)
    const dispatch = useDispatch()

    const [product, setProduct] = useState(initState)


    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        }).catch(e => {
            console.log(e)
            moveList()
        })

    }, [pno])

    return (
        <div>
            <div className="border-2 border-gray-600 p-2 font-bold text-xl">
                {product.pname}
            </div>
            <div className="border-2 border-gray-600 p-2">
                {product.pdesc}
            </div>
            <div className="border-2 border-gray-600 p-2">
                \{product.price}
            </div>
            <div className="border-2 border-gray-600 p-2 min-h-[200px]">
                <ul className="list-none">
                    {product.images.map((fname, idx) =>
                        <li key={idx}

                        >
                            <img className="border-none" src={`http://localhost/${fname}`}></img>
                        </li>)}
                </ul>
            </div>
            <div>
                <button
                    className="border-2 border-indigo-400 bg-indigo-400 text-white p-2 my-2 mr-2"
                    onClick={() => dispatch(addCartThunk({ email, pno }))}
                >ADD CART</button>

                <button className="border-2 border-indigo-400 bg-indigo-400 text-white p-2 my-2 mr-2" onClick={() => moveModify(pno)}>MODIFY</button>
                <button className="border-2 border-gray-600 p-2 my-2 mr-2" onClick={moveList}>GO LIST</button>
            </div>
        </div>
    );
}

export default ReadComponent;