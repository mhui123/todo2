import React, { useState } from 'react';
import InputBox from '../Components/InputBox';
import TodoItemList from '../Components/TodoItemList';

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage__container">
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      <TodoItemList
        title={'할 일'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />
      <TodoItemList
        title={'완료 항목'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
    </div>
  );
};

export default Home;
