"use client";
import FilterCard from "./FilterCard";
import db from "@/app/db/db.json";
import { categories } from "@/app/utils/utils";



const FilterDiv = () => {

    const categories: categories[] = db.categorias;






    return (
        <div className="w-full max-w-3xl grid md:grid-cols-4 gap-3  " >
            {
                categories.map((category: categories) => {
                    return (
                        <FilterCard key={category.id} nombre={category.nombre} descripcion={category.descripcion} />
                    )
                })

            }
        </div>
    )
}

export default FilterDiv