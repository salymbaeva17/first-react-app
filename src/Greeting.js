import React from "react"

const Greeting = () => {
    const user = {
        name: "Ivan",
        surname: "Ivanov",
        age: "25",

    }
    return (
        <>
            <h1>Добро пожаловать, {user.name}!</h1>
            <ul>
                <li>Имя: {user.name}</li>
                <li>Фамилия: {user.surname}</li>
                <li>Возраст: {user.age}</li>
            </ul>
        </>

    )
}

//3. создайте компоненты Header, Main и
// Footer, и передать их все в компонент App.
// должно выглядеть так :

export default Greeting