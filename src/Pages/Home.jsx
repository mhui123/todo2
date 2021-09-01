import React from 'react';
import InputBox from '../Components/InputBox';
import TodoItemList from '../Components/TodoItemList';

const Home = () => (
  <div className="homepage__container">
    <InputBox />
    <TodoItemList />
    <TodoItemList />
  </div>
);

export default Home;
