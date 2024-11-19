

"use client";

import { deleteTodo, updateTodo } from "@/app/actions/todos";
import { useState } from "react";

export default function ListItem({ todo }) {
    const [isEdit, setIsEdit] = useState(false);
    const [task, setTask] = useState("");

    const onComplete = async () => {
        let obj = { ...todo };
        obj.isCompleted = !obj.isCompleted;
        await updateTodo(obj);
    };

    const onEdit = async () => {
        if (isEdit) {
            let obj = { ...todo };
            obj.todo = task;
            await updateTodo(obj);
            setTask("");
        } else {
            setTask(todo.todo);
        }
        setIsEdit(!isEdit);
    };

    const onDelete = async () => {
        await deleteTodo({ id: todo.id });
    };

    return (
        <div className={`border flex border-black cursor-pointer p-2 w-2/3 text-3xl mx-auto text-center m-3
        ${todo.isCompleted ? "bg-green-100" : "bg-white"}`}>

            {
                isEdit ?
                    <input className="flex flex-grow border rounded p-1 text-black" value={task} onChange={(e) => setTask(e.target.value)} />
                    :
                    <h1 className="flex flex-grow">{todo.todo}</h1>
            }

            <button
                onClick={onComplete}
                className="bg-fuchsia-200 mx-1 p-1 px-2 text-sm rounded"
            >
                {!todo.isCompleted ? "Done" : "Not Done"}
            </button>

            <button 
                onClick={onEdit} 
                className="bg-blue-200 p-1 px-2 rounded text-sm mx-1">Edit</button>

            <button 
                onClick={onDelete} // Fixed: Pass the function reference
                className="bg-red-200 p-1 px-2 rounded text-sm mx-1">Delete</button>
        </div>
    );
}
