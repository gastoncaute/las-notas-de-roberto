import Link from "next/link"

async function obtenerNotas() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const datos = await res.json()

    return datos
}

export default async function Page() {
    const notas = await obtenerNotas()

    console.log(notas)

    return (
        <ul className="overflow-y-scroll col-span-2 row-span-2">
            {notas.map((nota) => (
                <li key={nota.id}>
                    <Link href={`/notas/${nota.id}`}>{nota.title}</Link>
                    </li>
            ))}
        </ul>
    )
}