import { toast } from "react-toastify"
import cartSlice from "../redux/student/cartSlice"
import { useAppDispatch, useAppSelector } from "../redux/student/hooks"
import useAuth from "./useAuth"
import { supabase } from "../supabase"
import { useState } from "react"
import type { Checkout, EnroledData } from "../Types"
import { useNavigate } from "react-router-dom"
import useExtractCartData from "./useExtractCartData"


const useCartManager = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const { userData, setUserData } = useAuth()

    const { totalPrice } = useExtractCartData()

    // RTK
    const cartData = useAppSelector(state => state.cartData)
    const { addToCart, removeFromCart, cartEmptier } = cartSlice.actions
    const dispatch = useAppDispatch()


    const addToCartHandler = async (ID: string) => {



        if (!userData) {
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

    const removeFromCartHandler = async (ID: string) => {

        try {

            const updatedData = cartData.filter(id => id !== ID)

            const { error } = await supabase
                .from('profiles')
                .update({
                    basket: updatedData
                })
                .eq('id', userData?.id)

            if (error) throw error

            dispatch(removeFromCart(ID))

            toast.success('محصول از سبد خرید شما حذف شد')

        } catch (error) {
            toast.error('مشکلی پیش امده است')
            console.log(error);

        }
    }

    const cartEmptierHandler = async () => {

        setLoading(true)

        try {
            const { error } = await supabase
                .from('profiles')
                .update({ basket: [] })
                .eq('id', userData?.id)

            if (error) throw error

            dispatch(cartEmptier())
            toast.success('محصولات با موفقیت حذف شدند')
        } catch (error) {
            toast.error('مشکلی پیش امده است')
            console.log(error);

        } finally {
            setLoading(false)
        }

    }

    const successPay = async () => {

        if (!userData) return;

        try {

            setLoading(true)
            const updatedData: EnroledData[] = []

            cartData.forEach(product => {
                updatedData.push({
                    courseID: product,
                    watchedLecture: []
                })
            })



            const updatedCheckouts: Checkout[] = [...userData.checkouts, {
                checkoutID: Date.now(),
                date: Date.now(),
                courses: [...cartData],
                totalPrice: totalPrice
            }]

            const { error } = await supabase
                .from('profiles')
                .update({
                    enrollments: [...userData?.enrollments ?? [], ...updatedData],
                    basket: [],
                    checkouts: updatedCheckouts
                })
                .eq('id', userData?.id)

            if (error) throw error;

            setUserData(prev => {
                if (!prev) return prev;

                return {
                    ...prev,
                    enrollments: [...prev.enrollments, ...updatedData],
                    checkouts: updatedCheckouts
                };
            });

            dispatch(cartEmptier())

            toast.success('پرداخت با موفقیت انجام شد')
            toast.info('در حال هدایت به صفحه دوره ها')

            setTimeout(() => {
                navigate('/student/my-curses')
            }, 1500);


        } catch (error) {
            toast.error('خطای ناشناخته')
            console.log(error);

        } finally {
            setLoading(false)
        }

    }




    return { addToCartHandler, loading, removeFromCartHandler, cartEmptierHandler, successPay }
}

export default useCartManager