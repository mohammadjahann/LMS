import useAuth from "../../hooks/useAuth"


const UserBasket = () => {

    const { isClosing } = useAuth()

    return (
        <div
            className={` fixed right-[5%] top-[11%] w-1/3 h-[80vh] bg-cyan-50 z-10 rounded-lg shadow-2xl ${isClosing ? 'basket-out' : 'basket-in'}`}>
            UserBasket
        </div>
    )
}

export default UserBasket