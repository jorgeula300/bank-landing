
const Banner = () => {
    return (
        <section className="w-full max-w-3xl mx-auto space-y-3 px-2">
            <div className="w-full  max-w-3xl h-52 relative mx-auto overflow-hidden rounded-2xl shadow">
                <img className="w-full h-full object-cover" src="/Bank.png" alt="bank" />
                <div className=" absolute top-0 left-0 w-full h-full bg-[#0003] backdrop-blur-[0.8px] px-2 flex flex-col justify-center text-white ">
                    <div className="w-full flex flex-col justify-center items-center gap-2 ">
                        <h2 className="text-2xl font-bold  text-principal ">Bienvenido a FinCo</h2>
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                <h2 className=" text-xl font-bold">¡Bienvenido a FinCo, tu aliado financiero de confianza!</h2>
                <p className="text-sm">En FinCo, estamos comprometidos con ayudarte a alcanzar tus metas a través de soluciones financieras simples, seguras y adaptadas a tu estilo de vida. Desde cuentas de ahorro hasta inversiones inteligentes, nuestro propósito es brindarte el respaldo y la tecnología que necesitás para crecer.</p>
                <p>Gracias por confiar en nosotros.</p>
                <p> Con FinCo, tu futuro empieza hoy.</p>
            </div>
        </section>

    )
}

export default Banner