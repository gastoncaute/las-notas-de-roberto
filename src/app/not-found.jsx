import Link from "next/link";

export default function Error404() {
    return (
        <section>
            <p>No se encontro la pagina!</p>
            <Link href='/'>Volver al inicio</Link>
        </section>
    )
}