import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todoItem, todoList, setTodoList }) => (
  <li className="todoapp__item">
    <input type="checkbox" className="todoapp__item-checkbox" />
    <span className="todoapp__item-ctx">{todoItem.text}</span>
    <button type="button" className="todoapp__item-edit-btn">
      수정
    </button>
    <button type="button" className="todoapp__item-delete-btn">
      삭제
    </button>
  </li>
);

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
