
import useCartManager from "../../hooks/useCartManager"
import useExtractCartData from "../../hooks/useExtractCartData"
import type { Dispatch, SetStateAction } from "react"

type Props = {
    setShowCheckout: Dispatch<SetStateAction<boolean>>
}


const Chekout = ({ setShowCheckout }: Props) => {

    const { productsinCartData, totalPrice } = useExtractCartData()
    const { successPay, loading } = useCartManager()

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-20 flex items-center justify-center font-MTNIrancell-Medium"
        >
            <div
                className="w-[92%] esm:w-[80%] sm:w-[70%] md:w-[55%] lg:w-[35%] bg-white rounded-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-cyan-600 text-white p-5">
                    <h3 className="text-xl font-bold">
                        تکمیل سفارش
                    </h3>
                    <p className="text-sm text-cyan-100 mt-1">
                        اطلاعات پرداخت خود را بررسی کنید
                    </p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">

                    {/* Price Box */}
                    <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-4 flex items-center justify-between">
                        <span className="text-gray-600">
                            مبلغ قابل پرداخت
                        </span>

                        <span className="text-xl font-bold text-cyan-700">
                            {totalPrice.toLocaleString("fa-IR")} تومان
                        </span>
                    </div>

                    {/* Count Box */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between">
                        <span className="text-gray-600">
                            تعداد محصولات
                        </span>

                        <span className="font-bold text-lg">
                            {productsinCartData.length}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-200"></div>

                    {/* Payment Methods */}
                    <div className="space-y-4">

                        <h4 className="font-bold text-gray-700">
                            انتخاب درگاه پرداخت
                        </h4>

                        <label
                            htmlFor="parsian"
                            className="flex items-center justify-between border rounded-xl p-4 cursor-pointer hover:border-cyan-500 transition">
                            <span>درگاه پرداخت پارسیان</span>

                            <input
                                type="radio"
                                name="paymethod"
                                id="parsian"
                                className="w-5 h-5 accent-cyan-600"
                            />
                        </label>

                        <label
                            htmlFor="shaparak"
                            className="flex items-center justify-between border rounded-xl p-4 cursor-pointer hover:border-cyan-500 transition">
                            <span>درگاه پرداخت شاپرک</span>

                            <input
                                type="radio"
                                name="paymethod"
                                id="shaparak"
                                className="w-5 h-5 accent-cyan-600"
                            />
                        </label>

                    </div>
                </div>

                {/* Footer */}
                <div className="border-t bg-gray-50 p-5 flex flex-col sm:flex-row justify-between gap-3">

                    {loading ? (
                        <div
                            className=" w-8 h-8 mx-auto aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin">

                        </div>
                    ) : (
                        <>
                            <button
                                onClick={successPay}
                                className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-bold transition">
                                اتصال به درگاه
                            </button>
                            <button
                                onClick={() => setShowCheckout(false)}
                                className="flex-1 border border-red-300 text-red-500 hover:bg-red-50 py-3 rounded-xl font-bold transition">
                                لغو
                            </button>
                        </>
                    )}



                </div>

            </div>
        </div>
    )
}

export default Chekout