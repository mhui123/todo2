import React, { useRef, useState } from 'react';
import Proptypes from 'prop-types';

const InputBox = ({ todoList, setTodoList }) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null); //DOM에 직접 접근할 때 사용

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      deteted: false,
    });
    setTodoList(nextTodoList);

    setText('');
    inputRef.current.focus();
  };

  return (
    <div className="todoapp__inputbox">
      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="할 일을 입력하세요"
        className="todoapp__inputbox-inp"
        onChange={onChangeInput}
      />
      <button
        type="submit"
        className="todoapp__inputbox-add-btn"
        onClick={onClickAddButton}
      >
        추가
      </button>
    </div>
  );
};

export default InputBox;

InputBox.propTypes = {
  todoList: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number.isRequired,
      text: Proptypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: Proptypes.func.isRequired,
};
