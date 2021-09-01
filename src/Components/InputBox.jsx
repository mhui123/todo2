import React from 'react';

const InputBox = () => (
  <div className="todoapp__inputbox">
    <input
      type="text"
      name="todoItem"
      placeholder="할 일을 입력하세요"
      className="todoapp__inputbox-inp"
    />
    <button type="submit" className="todoapp__inputbox-add-btn">
      추가
    </button>
  </div>
);

export default InputBox;
