import Link from "next/link"

type cardProps = {
    id: number;
    image: string;
    nombre: string;
    categoria: string;
    descripcion: string;
}


const Card = ({ id, image, nombre, categoria, descripcion }: cardProps) => {

    return (
        <Link href={`/product/${id}`} className="w-full max-w-[150px] h-40 bg-[#F0F2F5] rounded-xl overflow-hidden shadow">
            <div className="w-full h-20 overflow-hidden">
                <img className="w-full h-full object-cover" src={image} alt="cardImg" />
            </div>
            <div className="px-2">
                <h2 className=" text-xs font-bold text-center">{nombre}</h2>
                <span className="text-xs">{categoria}</span>
            </div>
        </Link>
    )
}

export default Card