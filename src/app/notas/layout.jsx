export default function Layout({ children }) {
    return(
        <section className="grid grid-cols-3 grid-rows-2 h-96">
            <menu className="col-span-1 row-span-2 bg-sky-200 text-black">
                <button>Boton 1</button>
                <button>Boton 2</button>
                <button>Boton 3</button>
            </menu>
        {children}
        </section>
    )
}