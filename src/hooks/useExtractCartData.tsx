import { useAppSelector } from "../redux/student/hooks"
import type { CourseType } from "../Types"


const useExtractCartData = () => {

    const cartData = useAppSelector(state => state.cartData)
    const products = useAppSelector(state => state.productsData.products)

    const cartSet = new Set(cartData)

    const productsinCartData: CourseType[] = products.filter(product => cartSet.has(product._id))

    let totalPrice = 0

    productsinCartData.forEach(product => {
        totalPrice += product.coursePrice - (product.coursePrice * product.discount) / 100
    })

    return { productsinCartData, totalPrice }

}

export default useExtractCartData