import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import { Link } from 'react-router'

export function CartPage(){
    const { cart, total, addItem, removeItem } = useContext(CartContext)
    return (
         <div className="w-full px-28 mt-8">
                   <div className="flex items-center w-full gap-2">
                       <h1 className="text-black font-bold text-2xl">Carrinho de compras:</h1>
                   </div>
                   {cart.length < 1 && (
                    <div className='flex w-full flex-col items-center justify-center'>
                        <p className='mt-10 font-bold text-3xl'>Seu carrinho está vazio!</p>
                        <Link className='bg-gray-400 text-white px-2 py-1 rounded' to="/">Voltar a página de produtos!</Link>
                    </div>
                    
                   )}
                   { cart.length > 0 && cart.map((item) => (
                    <section key={item.id}
                     className="w-full h-36 flex items-center justify-between px-4 mt-9 gap-5 border-b-3 border-gray-400/10">
                    <div className="flex-1">
                      <img className="w-28 h-28 object-contain"
                       src={item.cover}
                       alt={item.title} />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-bold text-[#6B6565]/50">{item.brand}</span>
                      <p className="text-black text-sm">{item.title}</p>
                    </div>
                    <div className="flex flex-1 justify-end gap-10">
                      <div className="flex gap-3">
                          <button className="cursor-pointer" onClick={() => addItem(item as any)}>+</button>
                          {item.amount}
                          <button className="cursor-pointer"  onClick={() => removeItem(item)}>-</button>
                      </div>
                      <strong>{item.total.toLocaleString("pt-BR",{
                        style:'currency',
                        currency: 'BRL'
                      })}</strong>
                    </div>
                 </section>
                   )) }
                   {cart.length > 0 &&(
                    <div className='flex items-center justify-between w-full h-28 px-10'>
                    <p>{ cart.length } items</p>
                    <p>Subtotal: {total.toLocaleString("pt-BR",{
                        style: 'currency',
                        currency: 'BRL'
                    })}</p>
                   </div>
                   )}
               </div>
    )
}