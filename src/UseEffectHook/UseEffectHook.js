import React, { useEffect, useState } from "react";
import { getJoke } from "../utils";

/*
  Напишите компонент, который загрузит шутку о Чаке Норрисе
  Используйте useEffect

  Вам придётся использовать асинхронный эффект. Это имеет свои особенности.
*/

export const UseEffectHook = () => {
  const [joke, setJock] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getJoke();
      
      setJock(response.value);
    }
    fetchData();
  }, []);

  return joke && <div data-testid="joke">{joke}</div>;
};
