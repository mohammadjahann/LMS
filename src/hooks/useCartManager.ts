import { toast } from "react-toastify"
import cartSlice from "../redux/student/cartSlice"
import { useAppDispatch, useAppSelector } from "../redux/student/hooks"
import useAuth from "./useAuth"
import { supabase } from "../supabase"
import { useState } from "react"


const useCartManager = () => {

    const [loading, setLoading] = useState(false)

    const { user, userData, setUserData } = useAuth()

    // RTK
    const cartData = useAppSelector(state => state.cartData)
    const { addToCart } = cartSlice.actions
    const dispatch = useAppDispatch()


    const addToCartHandler = async (ID: string) => {



        if (!user) {
            toast.error('لطفا ابتدا وارد اکانت خود شوید')
            return
        }


        const isInCart = cartData.includes(ID)

        if (isInCart) {
            toast.error("این محصول در سبد خرید شما موجود میباشد")
            return
        }

        const isEnrolled = userData?.enrollments.some(product => product.courseID === ID)

        if (isEnrolled) {
            toast.error("شما دانشجو ای دوره هستید")
            return
        }


        setLoading(true)
        const updatedCart = [...cartData, ID]

        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    basket: updatedCart
                })
                .eq('id', userData?.id)

            if (error) throw new Error(error.message)

            dispatch(addToCart(ID))
            toast.success('با موفقیت به سبد خرید افزوده شد');

            setUserData(prev => {
                if (!prev) return null

                return {
                    ...prev,
                    basket: updatedCart
                }
            })


        } catch (er) {
            console.log(er);

            toast.error('خطای ناشناخته');
        } finally {
            setLoading(false)
        }



    }


    return { addToCartHandler, loading }
}

export default useCartManager