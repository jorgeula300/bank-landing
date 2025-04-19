import Link from "next/link"


const BtnFloat = () => {
    return (
        <div className="fixed bottom-5 right-5 flex flex-col-reverse gap-3">
            <Link href="#inicio" className="  border-[#E5E8EB] text-black px-4 py-2 bg-white rounded-full shadow hover:bg-gray-400 transition"><i className='bx bxs-chevrons-up'></i></Link>

            <Link href="https://wa.me/+573122344119?text=Hola%2C%20quiero%20más%20información" target="_blank" rel="noopener noreferrer" title="Chatea con nosotros en WhatsApp" className="bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-700 transition"><i className='bx bxl-whatsapp'></i></Link>


        </div>
    )
}

export default BtnFloat