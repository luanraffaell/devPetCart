import { useEffect, useState } from "react";
import { CardProduct } from "../../components/card";
import { ProductsPropList } from "../../types/productPropsList";
import { api } from "../../services/api";

export function Home() {
    const [products, setProducts] = useState<ProductsPropList>([])

    useEffect(() => {
        async function getData() {
            const prod = await api.get("/products")
            setProducts(prod.data)
        }

        getData()
    }, [])

    return (
        <div className="w-full lg:px-28 sm:px-15 px-5 mt-8">
            <div className="flex items-center w-full gap-2">
                <h1 className="text-black font-bold text-2xl">Produtos:</h1>
            </div>
            <main className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-9 gap-5">
                {products.map((item) =>(
                    <CardProduct
                        brand={item.brand}
                        cover={item.cover}
                        price={item.price}
                        description={item.description}
                        title={item.title}
                        id={item.id}
                        key={item.id}
                      />
                ))}
            </main>
        </div>
    )
}