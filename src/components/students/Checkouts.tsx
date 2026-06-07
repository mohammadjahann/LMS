import useAuth from "../../hooks/useAuth";
import CheckoutBox from "./CheckoutBox";
import { FaReceipt, FaWallet } from "react-icons/fa";

const Checkouts = () => {

    const { userData } = useAuth();

    const totalSpent =
        userData?.checkouts.reduce(
            (sum, checkout) => sum + checkout.totalPrice,
            0
        ) || 0;

    return (
        <div className="w-full dir">

            {/* Header */}

            <div className="mb-8">

                <h1
                    className="text-2xl md:text-3xl font-MTNIrancell-Bold text-slate-800">
                    صورت حساب‌های من
                </h1>

                <p className="text-slate-500 mt-2">
                    تاریخچه تمامی خریدهای شما
                </p>

            </div>

            {/* Stats */}

            <div
                className=" grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                <div
                    className="bg-cyan-50 border border-cyan-100 rounded-3xl p-5 ">

                    <FaReceipt
                        className="text-cyan-600 text-2xl" />

                    <p
                        className="mt-3 text-slate-500">
                        تعداد فاکتورها
                    </p>

                    <h3
                        className="text-3xl font-bold mt-2 text-slate-800 ">
                        {userData?.checkouts.length || 0}
                    </h3>

                </div>

                <div
                    className="bg-emerald-50 border border-emerald-100 rounded-3xl p-5 ">

                    <FaWallet
                        className="text-emerald-600 text-2xl" />

                    <p
                        className=" mt-3 text-slate-500"
                    >
                        مجموع پرداختی
                    </p>

                    <h3
                        className="text-xl md:text-2xl font-bold mt-2 text-slate-800 ">
                        {totalSpent.toLocaleString("fa-IR")} تومان
                    </h3>

                </div>

            </div>

            {/* Checkouts */}

            <div className="flex flex-col gap-4">

                {userData?.checkouts.length ? (
                    userData.checkouts.map(check => (
                        <CheckoutBox
                            key={check.checkoutID}
                            checkoutData={check}
                        />
                    ))
                ) : (
                    <div
                        className="bg-white rounded-3xl border border-slate-200 p-10 text-center">
                        <h3 className="text-slate-500">
                            هنوز خریدی انجام نشده است
                        </h3>
                    </div>
                )}

            </div>

        </div>
    );
};

export default Checkouts;