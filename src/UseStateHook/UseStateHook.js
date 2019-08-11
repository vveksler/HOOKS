import React, { useState } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

const user = {
  email: "test@email.com",
  password: "supersafepassword"
};

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setMessage(null);

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleClick = e => {
    e.preventDefault();

    if (email === user.email && password === user.password)
      setMessage("Вы вошли");
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        data-testid="email-input"
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        data-testid="password-input"
      />
      <button type="button" onClick={handleClick} data-testid="submit">
        Submit
      </button>
      {message && <div data-testid="success-message">{message}</div>}
    </>
  );
};
