import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <div>My Todo List</div>
      <div>React NORA</div>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  border: 1px solid #f2f2f2;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 1px;
  background-color: #ffffff;
  text-shadow: #a8ffd9 2px 2px;
`;
