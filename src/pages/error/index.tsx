import { Link } from "react-router";

export function Error(){
    return (
        <div className="flex flex-col w-full h-screen items-center justify-center">
            <h1 className="text-8xl  font-extrabold">404</h1>
            <h2 className="font-medium text-2xl">Página não encontrada!</h2>
            <Link className="bg-gray-400 px-2 py-1 rounded cursor-pointer text-white" to="/">Página inicial</Link>
        </div>
    )
}