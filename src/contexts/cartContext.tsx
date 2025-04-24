import { createContext, ReactNode, useState } from 'react'
import { CartProps } from '../interfaces/cartProps';
import { ProductsProps } from '../interfaces/productsProps';
import { CartsPropsList } from '../types/cartPropsList';

interface CartContextData{
    cart: CartsPropsList;
    addItem: (product: ProductsProps) => void,
    removeItem:(product: CartProps) => void
    total:number
}

interface CartProviderProps{
    children:ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider( {children}: CartProviderProps){
    const[cart, setCart] = useState<CartsPropsList>([]);
    const[total,setTotal] = useState(0)

    function addItem(product:ProductsProps | CartProps){
        const existsProduct = cart.findIndex((item) => item.id === product.id)
        if(existsProduct !== -1){
            let cartList = cart;
            cartList[existsProduct].amount = cart[existsProduct].amount + 1 ;
            cartList[existsProduct].total = cart[existsProduct].amount * cart[existsProduct].price;
            setCart(cartList)
            setTotal(total => total = total + cart[existsProduct].price)
            return;
        }
        const data = {
            ...product,
            amount: 1,
            total: product.price
        }
        setCart(products => [...products, data])
        setTotal(total => total += product.price)
    }
    function removeItem(product:CartProps){
        const myProductIndex = cart.findIndex( item => item.id === product.id)
        if(cart[myProductIndex]?.amount > 1){
            let cartList = cart;
            cartList[myProductIndex].amount -= 1;
            cartList[myProductIndex].total = cartList[myProductIndex].total - cartList[myProductIndex].price;
            setCart(cartList);
            setTotal(total => total -= product.price)
            return;
        }
        const removedItem = cart.filter( item => item.id !== product.id);
        setCart(removedItem)
        setTotal(total => total -= product.price)
    }

    return(
        <CartContext.Provider value={{cart, addItem, total, removeItem}}>
            { children }
        </CartContext.Provider>
    )

}