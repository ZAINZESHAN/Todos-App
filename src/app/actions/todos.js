
"use server"

import { revalidatePath } from "next/cache";

export async function addTodo(formData){
  const todo = formData.get("todo");
  console.log("Todo ==>>", todo)

  try {
    fetch("http://localhost:3004/api/todos", {
      method: "POST",
      body: JSON.stringify({todo})
    })
  
    revalidatePath("/todos")
  } catch (error) {
    console.log(error)
  }
}

export async function updateTodo(obj) {
  console.log("obj==in update todo=>", obj);
  try {
    await fetch("http://localhost:3004/api/todos", {
      method: "PUT",
      body: JSON.stringify(obj),
    });

    revalidatePath("/todos");
  } catch (err) {
    console.log(err);
  }
}


export async function deleteTodo(obj) {
  try {
    await fetch("http://localhost:3004/api/todos", {
      method: "DELETE",
      body: JSON.stringify(obj),
    });

    revalidatePath("/todos");
  } catch (err) {
    console.log(err);
  }
}