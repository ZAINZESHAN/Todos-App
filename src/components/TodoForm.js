 "use client"
 
 import { addTodo } from "@/app/actions/todos";
import { useRef } from "react";

export default function TodoForm() {
    const formRef = useRef(null);
    return (
        <form ref={formRef} action={async(formData)=>{
            await addTodo(formData)
            formRef.current?.reset
        }} className="w-2/3 mx-auto flex gap-2">

            <input
                type="text"
                placeholder="Add Todos..."
                name="todo"
                className="border p-2 py-3 flex flex-grow"

            />
            <input
                type="submit"
                className="bg-purple-200 text-black rounded p-2 px-4"
                value={`Add Todo`} />

        </form>
    )
}