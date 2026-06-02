import useAuth from "../../hooks/useAuth"
import { useAppSelector } from "../../redux/student/hooks"
import type { CourseType } from "../../Types"
import { MdDelete } from "react-icons/md";
import useCartManager from "../../hooks/useCartManager";
import { RxCross2 } from "react-icons/rx";


const UserBasket = () => {

    const { isClosing, basketSeter } = useAuth()
    const cartData = useAppSelector(state => state.cartData)
    const products = useAppSelector(state => state.productsData.products)

    const cartSet = new Set(cartData)

    const productsinCartData: CourseType[] = products.filter(product => cartSet.has(product._id))

    let totalPrice = 0

    productsinCartData.forEach(product => {
        totalPrice += product.coursePrice - (product.coursePrice * product.discount) / 100
    })

    const { removeFromCartHandler } = useCartManager()




    return (
        <div
            className={`dir fixed right-[5%] top-[11%] w-[420px] h-[80vh] bg-white z-10 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-end ${isClosing ? "basket-out" : "basket-in"}`}>
            {/* Header */}
            <div className="border-b p-5 w-full flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <RxCross2 className=" cursor-pointer" onClick={basketSeter} />
                    سبد خرید
                </h2>

                <span className="text-sm text-gray-500 ">
                    {productsinCartData.length} محصول
                </span>
            </div>

            {/* Products */}
            <div className=" w-full h-[400px] flex flex-col gap-3 overflow-y-auto p-3">
                {productsinCartData.map(course => (
                    <div
                        className=" w-full bg-slate-50 flex-shrink-0 rounded-lg shadow-sm hover:shadow-xl p-2">

                        {/* Top */}
                        <div className=" flex gap-3">

                            {/* Thumbnail */}
                            <img
                                src={course.courseThumbnail}
                                alt={course.courseTitle}
                                className="w-24 h-24 rounded-xl object-cover shrink-0"
                            />

                            <div>
                                <h4>{course.courseTitle}</h4>
                                <div className=" text-gray-600 text-sm line-clamp-2" dangerouslySetInnerHTML={{ __html: course.courseDescription }}></div>
                            </div>


                        </div>

                        {/* Bottom */}
                        <div className=" flex justify-between items-center mt-2">
                            <div className="flex gap-2">
                                <div className="dir flex gap-3 items-center">
                                    <span className=" line-through text-gray-500 text-[12px]">{course.coursePrice.toLocaleString('fa-IR')}</span>
                                    <span className=" bg-rose-500 py-1 px-1 text-[10px] text-white rounded-sm">%{course.discount}</span>
                                </div>
                                <span className="text-cyan-700">{(course.coursePrice - ((course.coursePrice * course.discount) / 100)).toLocaleString('fa-IR')}</span>

                            </div>

                            <MdDelete
                                onClick={() => removeFromCartHandler(course._id)}
                                className=" text-red-500 text-[25px] hover:text-red-600 cursor-pointer transition-all duration-200" />

                        </div>

                    </div>
                ))}

            </div>

            {/* Footer */}
            <div className="border-t bg-white p-5 w-full">
                <div className="flex justify-between items-center mb-4 flex-row-reverse">
                    <span className="font-bold text-xl text-cyan-700">
                        تومان
                    </span>

                    <span className="font-bold text-2xl text-cyan-700">   {totalPrice.toLocaleString('fa-IR')}</span>

                    <span className="font-medium text-gray-600 ">
                        مبلغ قابل پرداخت :

                    </span>
                </div>

                <button className="w-full h-12 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition">
                    ادامه فرایند خرید
                </button>
            </div>
        </div>
    )
}

export default UserBasket