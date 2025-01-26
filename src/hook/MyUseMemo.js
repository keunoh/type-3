// Call useMemo at the top level of your component 
import { theme } from "antd";
import { useMemo } from "react";
import { filterTodos } from "./utils";
import List from "../testing/List";

// to cache a calculation between re-renders:
export default function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );

  return (
    <div className={theme} >
      <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
      <ul>
        <List items={visibleTodos} />
      </ul>
    </div>
  )
}
