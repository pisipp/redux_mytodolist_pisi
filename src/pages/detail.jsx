import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos.js";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID : {todo.id}</div>
            <StButton
              onClick={() => {
                navigate("/");
              }}
            >
              이전 페이지로
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(119, 119, 119);
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  font-size: small;
  color: darkgray;
`;

const StTitle = styled.h1`
  padding: 0 24px;
  font-size: large;
`;

const StBody = styled.main`
  padding: 0 24px;
  font-size: small;
`;

const StButton = styled.button`
  border: 0px solid;
  height: 40px;
  width: 120px;
  background-color: #8c09c4;
  color: white;
  border-radius: 12px;
  cursor: pointer;
`;
