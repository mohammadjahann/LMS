import { useState } from "react"
import useCartManager from "../../hooks/useCartManager"
import useExtractCartData from "../../hooks/useExtractCartData"
import Chekout from "../../components/students/Chekout"


const Cart = () => {

    const [showCheckout, setShowCheckout] = useState(false)

    const { productsinCartData, totalPrice } = useExtractCartData()

    // RTK
    const { removeFromCartHandler, cartEmptierHandler, loading } = useCartManager()



    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 p-4 md:p-8 font-MTNIrancell-Medium relative" dir="rtl">
            {/* Chekout */}

            {showCheckout && <Chekout setShowCheckout={setShowCheckout} />}

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        سبد خرید
                    </h1>

                    {loading ? (
                        <div
                            className=" w-4 sm:w-5 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin">

                        </div>
                    ) : (
                        <button
                            onClick={cartEmptierHandler}
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition">
                            پاک کردن همه
                        </button>)}

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Products */}
                    <div className="lg:col-span-2 space-y-4">

                        {/* Product Item */}
                        {productsinCartData.map(product => (
                            <div className="bg-white rounded-2xl shadow-md p-4">
                                <div className="flex flex-col sm:flex-row gap-4">

                                    <img
                                        src={product.courseThumbnail}
                                        alt=""
                                        className="w-full sm:w-36 h-36 object-cover rounded-xl"
                                    />

                                    <div className="flex-1 flex flex-col justify-between">

                                        <div>
                                            <h2 className="text-lg font-bold text-gray-800 mb-2">
                                                {product.courseTitle}
                                            </h2>

                                            <p className="text-gray-500 text-sm line-clamp-2" dangerouslySetInnerHTML={{ __html: product.courseDescription }}>

                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-3">

                                            <div className=" flex items-center gap-2">
                                                <div className=" flex flex-col">
                                                    <span className=" bg-red-500 px-1 text-center w-11 rounded-sm text-white ">%{product.discount}</span>
                                                    <span className=" line-through text-gray-400">{product.coursePrice.toLocaleString('fa-IR')}</span>

                                                </div>
                                                <span className="text-xl font-bold text-cyan-600">
                                                    {(product.coursePrice - ((product.coursePrice * product.discount) / 100)).toLocaleString('fa-IR')} تومان
                                                </span>

                                            </div>

                                            <button
                                                onClick={() => removeFromCartHandler(product._id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition w-full sm:w-[150px]">
                                                حذف محصول
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>

                    {/* Summary */}
                    <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-6">

                        <h2 className="text-xl font-bold text-gray-800 mb-6">
                            خلاصه سفارش
                        </h2>

                        <div className="space-y-4 mb-6">

                            <div className="flex justify-between">
                                <span className="text-gray-600">
                                    تعداد محصولات
                                </span>
                                <span className="font-semibold">
                                    {productsinCartData.length}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-600">
                                    مبلغ کل
                                </span>
                                <span className="font-bold text-cyan-700">
                                    {totalPrice.toLocaleString('fa-IR')} تومان
                                </span>
                            </div>

                        </div>

                        <button
                            onClick={() => setShowCheckout(true)}
                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition">
                            تسویه حساب
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Cart