import React from "react";
import { styled } from "styled-components";
import { product } from "../utils/Product";
import { Link, useNavigate } from "react-router-dom";
export const Products = () => {
  const navigate = useNavigate();
  function navigateToMac() {
    navigate("/");
  }
  return (
    <ContainerFirst>
      <ProdContainer>
        {product.map((el) => {
          return (
            <Container>
              <Link to={`${el.id}`}>
                <Image src={el.img} />
              </Link>
              <h2 className="h1">{el.title}</h2>
              <h3>{el.price}</h3>
            </Container>
          );
        })}
      </ProdContainer>
      <ButtonContainer>
        <Button onClick={navigateToMac}>Go Back</Button>
      </ButtonContainer>
    </ContainerFirst>
  );
};
const ContainerFirst = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 380px;
  height: 450px;
  background-color: #ffffff9c;
  margin-top: 20px;
  border-radius: 20px;
  
`;
const Image = styled.img`
  height: 300px;
  margin-top: 15px;
  transition: transform 800ms;
  &:hover{
    transform: translateY(-20px);
  }
`;
const ProdContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 200px;
  flex-wrap: wrap;
`;
const Button = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 5px;
  border: 0;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 65px;
`;
