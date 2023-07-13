import { useRef, useState } from "react";
import { postProduct } from "../../api/productAPI";

const initState = {
    pname: 'Ice Coffee',
    pdesc: 'I AM COFFEE.',
    price: 4000
}

const RegisterComponent = ({ moveList }) => {

    const fileRef = useRef()
    const [product, setProduct] = useState({ ...initState })

    const handleChange = (e) => {
        product[e.target.name] = e.target.value
        setProduct({ ...product })
    }

    const handleClickSave = (e) => {
        console.log(product)

        const formData = new FormData()

        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        console.dir(fileRef.current)

        const arr = fileRef.current.files

        for (let file of arr) {
            formData.append("files", file)
        }

        postProduct(formData).then(data => {
            const rno = data.result
            alert(`${rno}번 상품이 등록되었습니다.`)
            moveList()
        })

    }

    const handleClickClear = (e) => {
        fileRef.current.value = ''
    }

    return (
        <div>
            <div>
                <input className="border-2 border-gray-600 p-2" type="text" name="pname" value={product.pname} onChange={handleChange}></input>
            </div>
            <div>
                <input className="border-2 border-gray-600 p-2" type="text" name="pdesc" value={product.pdesc} onChange={handleChange}></input>
            </div>
            <div>
                <input className="border-2 border-gray-600 p-2" type="number" name="price" value={product.price} onChange={handleChange}></input>
            </div>
            <div className="my-2">
                <input type="file" ref={fileRef} multiple name="images" onChange={handleChange}></input>
            </div>
            <div>
                <button className="bg-green-200 text-green-700 p-2 m-2"
                    onClick={handleClickSave}>SAVE</button>
                <button className="bg-gray-500 text-white p-2 m-2"
                    onClick={handleClickClear}>CLEAR FILES</button>
            </div>
        </div>
    );
}

export default RegisterComponent;