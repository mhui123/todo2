import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoItemList = ({ title, todoList, setTodoList, checkedList }) => (
  <div className="todoapp__list">
    <p className="todoapp__list-tit">{title}</p>

    <ul className="todoapp__list-ul">
      {todoList && //todoList 있을때만 출력
        todoList.map((todoItem) => {
          //삭제한 경우 출력하지 않음 if(true)
          if (todoItem.deleted) return null;

          if (checkedList !== todoItem.checked) return null;
          return (
            //map을 이용해 todoItem을 출력
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
    </ul>
  </div>
);

//key는 React에서 빠르게 화면변화를 인지해 효율적으로 리랜더링하기 위해 사용한다
//단 key값은 고유한 값이어야 함.(unique)
TodoItemList.propTypes = {
  title: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};
export default TodoItemList;
