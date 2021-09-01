import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = () => (
  <div className="todoapp__list">
    <p className="todoapp__list-tit">제목</p>
    <ul className="todoapp__list-ul">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  </div>
);

export default TodoItemList;
