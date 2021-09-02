import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };

  return (
    <li className="todoapp__item">
      <input
        type="checkbox"
        className="todoapp__item-checkbox"
        checked={todoItem.checked}
        onChange={onChangeCheckbox}
      />
      <span
        className={`todoapp__item-ctx ${
          todoItem.checked ? 'todoapp__item-ctx-checked' : ''
        }`}
      >
        {todoItem.text}
      </span>
      {!todoItem.checked ? (
        <button type="button" className="todoapp__item-edit-btn">
          수정
        </button>
      ) : null}

      <button type="button" className="todoapp__item-delete-btn">
        삭제
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};
export default TodoItem;
