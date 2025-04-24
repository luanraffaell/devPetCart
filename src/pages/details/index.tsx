import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { api } from '../../services/api'
import { ProductsProps } from '../../interfaces/productsProps'
import { AiOutlinePlus } from 'react-icons/ai'
import { CartContext } from '../../contexts/cartContext'
import toast from 'react-hot-toast'

export function ProductDetail(){
    const { id } = useParams()
    const[product, setProduct] = useState<ProductsProps>()
    const { addItem } = useContext(CartContext)
    const navigate = useNavigate()
    useEffect(() =>{
        async function getProduct(){
            const myProduct = await api.get(`/products/${id}`)
            setProduct(myProduct.data)
        }

        getProduct()
        
    },[])
    function handleAddItemCart(){
        addItem(product as ProductsProps)
        toast.success("Produto adicionado ao carrinho!")
        navigate("/cart")
    }
    return (
        
        <>
        {!product &&(
            <div className='flex w-full flex-col items-center mt-10'>
                <h1 className='text-3xl font-bold mb-3'>Produto não encontrado!</h1>
                <Link className='bg-gray-400 rounded text-white px-4 py-1'  to="/">Retorne a página de produtos</Link>
            </div>
        ) }
        {product &&(
            <main className='flex lg:flex-row flex-col w-full py-20'>           
            <section className='flex-1 px-10'>
                <img className='w-full h-100 object-contain  p-10 border-3 border-gray-400/30' src={product?.cover} alt={product?.title} />
            </section>
            <section className='flex-1 lg:px-60 sm:px-20 px-15 py-3 flex flex-col justify-center relative'>
                <span className="text-sm font-bold text-[#6B6565]/50">{product?.brand}</span>
                <p className="font-bold text-sm">{product?.title}</p>
                <p>{product?.description}</p>
                <strong>{product?.price.toLocaleString("pt-BR",{
                    style: 'currency',
                    currency: 'BRL'
                })}</strong>

                <button onClick={() => handleAddItemCart()}
                 className='bg-[#FFD470] w-full h-10 mt-auto  flex justify-center items-center gap-2 rounded cursor-pointer'>
                    <AiOutlinePlus size={20} color='#000' />
                     Adicionar ao Carrinho
                </button>
            </section>
        </main>
        )}
        </>
    )
}