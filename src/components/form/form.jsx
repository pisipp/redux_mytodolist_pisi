import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../../redux/modules/todos";

const Form = () => {
  const id = nextId();

  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // const todos = useSelector((state) => state.todos.todos);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;

    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
          placeholder="제목을 입력하세요"
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
          placeholder="내용을 입력하세요"
        />
      </StInputGroup>
      <StAddButton>등록</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StFormLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
`;

const StAddForm = styled.form`
  background-color: #cdf4ff;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
`;

const StAddInput = styled.input`
  height: 35px;
  width: 220px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  ::placeholder{
    color: gray;
    font-weight: 400;
  }
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #ef4faf;
  width: 120px;
  color: #ffffff;
  font-weight: 500;
`;
