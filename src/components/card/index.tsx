import { useContext } from "react";
import { ProductsProps } from "../../interfaces/productsProps";
import { CartContext } from "../../contexts/cartContext";
import toast from "react-hot-toast";
import { Link } from "react-router";

export function CardProduct(prop: ProductsProps){
    const { addItem } = useContext(CartContext)

    function handleAddItem(prop: ProductsProps){
        toast.success("Produto adicionado com sucesso!")
        addItem(prop)
    }
    return (
        <section className="flex gap-1 flex-col w-60 h-70 cursor-pointer transition-all hover:scale-105">
                  <Link className="w-full h-36" to={`/product/${prop.id}`}>
                  <img
                    className="w-full h-36 object-contain"
                     src={prop.cover} alt={prop.title} />
                <div className="flex flex-col justify-center w-full h-full px-2 mt-2">
                    <span className="text-sm font-bold text-[#6B6565]/50">{prop.brand} </span>
                    <p className="text-black text-sm">{prop.title}</p>
                    <strong>Preço: {prop.price.toLocaleString("pt-BR",{
                        style:"currency",
                        currency: "BRL"
                    })}</strong>
                    
                </div>
                  </Link>
                <button onClick={() => handleAddItem(prop)}
                     className="bg-gray-400 text-white rounded cursor-pointer">
                        Adicionar ao carrinho
                    </button>
            </section>
    )
}