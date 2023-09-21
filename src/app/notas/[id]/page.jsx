async function obtenerNotaUnica(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const datos = await res.json()
    return datos
}

export default async function Page({ params }) {
    const nota = await obtenerNotaUnica(params.id)

    return (<p>{nota.title} - {nota.completed ? 'Completa' : 'Incompleta'}</p>)
}