import React from "react"
import "./Greeting.css"


const Greeting = () => {
    const user = {
        name: "Ivan",
        surname: "Ivanov",
        age: "25"
    }
    return (
        <div className="greeting">
            <h1>Добро пожаловать, {user.name}!</h1>
            <ul>
                <li>Имя: {user.name}</li>
                <li>Фамилия: {user.surname}</li>
                <li>Возраст: {user.age}</li>
            </ul>
        </div>

    )
}

export default Greeting