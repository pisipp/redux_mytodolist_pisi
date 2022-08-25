import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todos";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StListContainer>
      <h2>진행중</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <StFont>{todo.body}</StFont>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2 className="list-title">다했다🎉</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <StFont>{todo.body}</StFont>
                </div>
                <StDialogFooter>
                  <StButton
                    
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제
                  </StButton>
                  <StButton
                    
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
  font-size: larger;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 3px solid teal;
  border-color: #9257ff;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  color: #dd1bba;
  font-weight: 800;
  font-size: small;
  text-decoration: underline dotted;
`;


const StFont = styled.h2`
  color: #000000;
  font-weight: 400;
  font-size: medium;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  
`;

const StButton = styled.button`
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 12px;
  background-color: #a2c1ff;
  cursor: pointer;
  text-shadow: #FC0 1px 0 10px;
`;