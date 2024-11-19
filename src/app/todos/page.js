// import { addTodo } from "../actions/todos"

// export default async function Todos() {
//     let res = await fetch("http://localhost:3000/api/todos", {
//       cache: "no-cache",
//     });
//     res = await res.json();

//     return (
//       <div className="min-h-screen p-10">
//         <h1 className="text-3xl text-center font-bold pb-6">Todos</h1>

//             <form action={addTodo} className="w-2/3 mx-auto flex gap-2">

//                 <input 
//                 type="text"
//                 placeholder="Add Todos..." 
//                 name="todo"
//                 className="border p-2 py-3 flex flex-grow"
//                 />
//                 <input 
//                 type="submit"
//                 className="bg-black text-white rounded p-2 px-4" 
//                 value={`Add Todo`} />

//             </form>

//                 {
//                     res.data?.map((todo) => {
//                         // console.log("todo ==> ",todo)

//                         return(

//                         <Link key={todo.id} href={`/todos/${todo.id}`}><h1 className="border-2 p-2 w-2/3 text-3xl mx-auto text-center m-3">
//                             {todo}</h1></Link>
//                     )})
//                 }
//         </div>
//     )
// }
import Link from "next/link"
import TodoForm from "@/components/TodoForm"
import ListItem from "@/components/ListItem"

export default async function Todos() {

    let res = await fetch("http://localhost:3002/api/todos", {
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