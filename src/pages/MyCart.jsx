import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const MyCart = () => {
  const navigate = useNavigate();
  function goBackHandler() {
    navigate("/");
  }
  return (
    <div>
      <Container>
        <h1>My Card Page</h1>
      </Container>
      <Button onClick={goBackHandler}>Go Back</Button>
    </div>
  );
};
const Container = styled.div`
  width: 90%;
  height: 150px;
  background-color: white;
  margin: 0 auto;
  margin-top: 20px;
  text-align: start;
  border-radius: 20px;
  h1 {
    margin-left: 20px;
  }
`;
const Button = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 5px;
  border: 0;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 77px;
  margin-top: 20px;
`;
