"use client";
import { use } from "react";
import db from "@/app/db/db.json";
import Link from "next/link";



const servicio = ({ params }: { params: Promise<{ cardsId: string }> }) => {
    const { cardsId } = use(params);

    const servicio = db.data.find((servicio) => servicio.id === Number(cardsId));

    return (
        <main className="w-full mb-3 ">
            <div className="w-full h-10  flex items-center ">

                <Link className="text-sm ml-4 hover:bg-[#c7c9cb] bg-[#F0F2F5] px-2 py-1 rounded-2xl font-semibold shado flex
                justify-center items-center gap-1.5" href={`/`}> <i className='bx bxs-left-arrow-circle text-lg'></i> <span>Volver al Inicio</span></Link>
            </div>
            <section className="w-full max-w-3xl px-4  mx-auto">
                <div className="w-full max-w-3xl h-36 overflow-hidden rounded-2xl mb-3.5 shadow">
                    <img className="w-full h-full object-cover" src={servicio?.image} alt={servicio?.image} />

                </div>
                <h2 className=" text-2xl font-semibold">{servicio?.nombre}</h2>
                <h3 className="text-md mb-3"><span className="font-semibold">Categoria:</span> {servicio?.categoria}</h3>
                <p className="mb-2.5">{servicio?.descripcion}</p>

                <div className="flex flex-col items-center gap-y-3.5">
                    {
                        servicio?.beneficios?.map((beneficio) => {
                            return (
                                <div className="w-full max-w-3xl " key={beneficio.id}>
                                    <h2>{beneficio.nombre}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </section>



        </main>
    )
}

export default servicio