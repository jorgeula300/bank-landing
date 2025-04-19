import { useRef, useEffect } from "react"

const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
            inputRef.current.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    handleSearch()
                }
            })
        }
    }, [inputRef.current?.value])
    const handleSearch = () => {
        if (inputRef.current) {
            console.log(inputRef.current.value)
        }
        console.log("search")
    }





    return (
        <div className='w-full h-10 bg-[#F0F2F5] rounded-2xl flex items-center'>
            <button onClick={handleSearch} className=' w-10 h-full cursor-pointer'><i className='bx bx-search-alt'></i></button>
            <input className='w-full h-full bg-transparent outline-none' type="text" placeholder='Buscar Producto' name='search' ref={inputRef} />
        </div>
    )
}

export default Search