
import { useEffect } from "react"
import CardProduct from "./CardProduct"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataProduct } from "../store/actions/productAction"

function ListProduct() {
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector(state => state.productReducers)

    useEffect(() => {
        dispatch(fetchDataProduct());
    }, [])
    console.log(data, 'halo')
    return (
        <>
            {isLoading ? (<><div>Loading</div></>) : (<></>)}
            <div className="mt-10 flex flex-wrap">
                {
                    data.map((item, key) => <CardProduct productName={item.productName} price={item.price} />)
                }
            </div>
        </>
    )
}

export default ListProduct