import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct, putProduct } from "../../api/productAPI"

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}

const ModifyComponent = ({ pno, moveList, modeRead }) => {

    const [product, setProduct] = useState(initState)
    const fileRef = useRef()

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        })

    }, [pno])

    const handleClickDelete = () => {

        deleteProduct(pno).then(date => {
            alert("해당 상품이 삭제되었습니다.")
        })

    }

    const handleChange = (e) => {
        product[e.target.name] = e.target.value
        setProduct({ ...product })
    }

    const handleClickModify = () => {
        const formData = new FormData();

        formData.append("pno", product.pno)
        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        if (product.images) {
            for (let pi of product.images) {
                formData.append("images", pi)
            }
        }

        const arr = fileRef.current.files

        for (let file of arr) {
            formData.append("files", file)
        }

        putProduct(formData).then(data => {
            alert('수정되었습니다.')
            modeRead(pno)
        })
    }

    const handleClickDelImg = (fname) => {

        // X버튼을 눌러 지울 사진을 제외한 목록만 호출
        const newArr = product.images.filter(ele => ele !== fname)

        product.images = newArr

        setProduct({...product})

    }

    return (
        <div>
            <div>
                <input
                    className="border-2 border-gray-600 p-2"
                    type="text"
                    name="pname"
                    value={product.pname}
                    onChange={handleChange}></input>
            </div>
            <div>
                <input
                    className="border-2 border-gray-600 p-2"
                    type="text"
                    name="pdesc"
                    value={product.pdesc}
                    onChange={handleChange}></input>
            </div>
            <div>
                <input
                    className="border-2 border-gray-600 p-2"
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}></input>
            </div>
            <div className="my-2">
                <input type="file" ref={fileRef} multiple name="images"></input>
            </div>
            <div className="border-2 border-gray-600 p-2">
                <ul className="list-none flex">
                    {product.images.map((fname, idx) =>
                        <li key={idx}
                            className=" m-2 text-center"
                        >
                            <img className="border-none" src={`http://localhost/s_${fname}`}></img>
                            <button className="bg-red-400 m-2 p-2" onClick={() => handleClickDelImg(fname)}>X</button>
                        </li>)}
                </ul>
            </div>
            <div>
                <button className="bg-indigo-400 text-white hover:bg-red-200 hover:text-red-500 p-2 my-2 mr-2" onClick={handleClickDelete}>DELETE</button>
                <button className="bg-indigo-400 text-white hover:bg-sky-200 hover:text-blue-600 p-2 my-2 mr-2" onClick={handleClickModify}>MODIFY</button>
                <button className="border-2 border-gray-600 p-2 my-2 mr-2" onClick={moveList}>GO LIST</button>
            </div>
        </div>
    );
}

export default ModifyComponent;