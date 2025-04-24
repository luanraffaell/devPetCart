import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import { CartContext } from "../../contexts/cartContext";

export function Header(){
    const { cart } = useContext(CartContext)
    return (
        <header className="flex items-center w-full h-22 px-28 border-b-3 border-gray-400/10">
            <nav className="flex w-full justify-between">
                <Link className="text-black font-extrabold text-4xl" to="/">DevPets</Link>
                <Link className="p-0 m-0 relative" to="/cart">
                <FiShoppingCart size={35} color="#000" />
                {cart.length > 0 && (
                    <span className='absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs'>
                    { cart.length }
                </span>
                )}
                </Link>
            </nav>

        </header>
    )
}