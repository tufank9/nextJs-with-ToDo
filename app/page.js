"use client"
import { useState } from "react";
import { container } from "./styles/container";
import { title } from "./styles/title";
import { inputContainer } from "./styles/inputContainer";
import { input } from "./styles/input";
import { addBtn } from "./styles/addBtn";
import { todos } from "./styles/todos";
import { todosItem } from "./styles/todosItem";
import { todosText } from "./styles/todosText";
import { deleteBtn } from "./styles/deleteBtn";
import { editBtn } from "./styles/editBtn";
import { warningText } from "./styles/warningText";

export default function App() {
  const [userInput, setUserInput] = useState('')
  const [list, setList] = useState([])

  const updateInput = (value) => {
    setUserInput(value)
  }

  const addItem = () => {
    if (userInput !== '') {
      const userInputItem = {
        id: Math.random(),
        value: userInput,
      }

      setList([...list, userInputItem])
      setUserInput('')
    }
  }

  const deleteItem = (key) => {
    const updateList =
      list.filter((item) => item.id !== key)
    setList(updateList)
  }

  const editItem = (index) => {
    const editedTodo = prompt('Edit the ToDo')
    if (editedTodo !== null && editedTodo !== '') {
      const updateTodos = [...list]
      updateTodos[index].value = editedTodo
      setList(updateTodos)
    }
  }


  return (
    <div style={container()}>
      <div style={title()}>TODO LIST</div>
      <div style={inputContainer()}>
        <input
          style={input()}
          placeholder="Add item..."
          value={userInput}
          onChange={(item) =>
            updateInput(item.target.value)}
        />
        <button style={addBtn()} onClick={addItem}>ADD</button>
      </div>

      <div style={todos()}>
        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} style={todosItem()}>
              <span style={todosText()}>{item.value}</span>
              <span>
                <button style={deleteBtn()} onClick={() => deleteItem(item.id)}>Delete</button>
                <button style={editBtn()} onClick={() => editItem(index)}>Edit</button>
              </span>
            </div>
          ))
        ) : (
          <div style={warningText()}>No itemss in the list</div>
        )}
      </div>
    </div>
  );
}
