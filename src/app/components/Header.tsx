import Image from 'next/image'

const Header = () => {
    return (
        <header className='w-full h-14 flex justify-around items-center bg-white border border-[#E5E8EB] border-solid border-t-0 border-x-0 px-4  [&>div]:flex  [&>div]:gap-4 fixed z-20 '>
            <div>
                <Image src="/Logo2.png" alt="logo" width={100} height={5} />
            </div>

        </header>
    )
}

export default Header