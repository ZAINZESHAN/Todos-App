import Link from "next/link"
import TodoForm from "@/components/TodoForm"
import ListItem from "@/components/ListItem"

export default async function Todos() {

    let res = await fetch("http://localhost:3004/api/todos", {
        cache: "no-cache"
    })
    res = await res.json()

    return (
        <div className="min-h-screen p-10">
            <h1 className="text-4xl text-center font-bold pb-6">Todos</h1>

            <TodoForm />

            {
                res.data?.map((todo) => (
                    <ListItem todo={todo} key={todo.id} />
                ))
            }

        </div>
    )
}