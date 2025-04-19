"use client";
import { useDispatch } from "react-redux"
import { setFilter } from "@/store/slices/filter.slice";

type Props = {
    nombre: string,
    descripcion: string
}

const FilterCard = ({ nombre, descripcion }: Props) => {
    const dispatch = useDispatch();
    const handleButon = () => {
        dispatch(setFilter(nombre));
    }
    return (
        <button className="bg-[#F0F2F5] px-3 py-0.5 rounded-2xl  text-center cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis" onClick={handleButon} type="button">{nombre}</button>
    )
}

export default FilterCard