import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <Container>
      <div>
        <h1 className="h1">IStore</h1>
      </div>
      <div>
        <StyledLink to="products">Products</StyledLink>
        <StyledLink to="mycards">My Cart</StyledLink>
        <StyledLink to="myorders">My Order</StyledLink>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .h1{
    margin-left: 50px;
    color: white;
  }
`;
const StyledLink = styled(Link)`
  color: white;
  margin-right: 50px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
`;
