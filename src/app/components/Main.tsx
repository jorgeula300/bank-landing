"use client"
import { useSelector } from "react-redux"

import FilterDiv from "./filter/FilterDiv"
import db from "@/app/db/db.json"
import Card from "@/app/components/Card"
type dataType = {
    id: number;
    nombre: string;
    image: string;
    categoria: string;
    descripcion: string;
}

const Main = () => {
    const selectFilter = useSelector((state: any) => state.filterslice);
    let dataDB: dataType[];

    if (selectFilter === "All") {
        dataDB = db.data;
    } else {
        dataDB = db.data.filter((e) => e.categoria === selectFilter);
    }


    return (
        <main className=" w-full max-w-3xl mx-auto mt-10 space-y-3.5">
            <h2 className="text-2xl font-semibold">Explora nuestros productos</h2>

            <FilterDiv />
            <div className=" grid grid-cols-2  md:grid-cols-4 xl:grid-cols-6 gap-4  items-center justify-items-center mx-auto">
                {
                    dataDB?.map((data: dataType) => {
                        return (
                            <Card key={data.id} id={data.id} image={data.image} nombre={data.nombre} categoria={data.categoria} descripcion={data.descripcion} />
                        )
                    })

                }



            </div>
        </main>
    )
}

export default Main