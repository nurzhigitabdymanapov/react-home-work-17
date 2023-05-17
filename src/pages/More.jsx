import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { product } from "../utils/Product";
import { styled } from "styled-components";

export const More = () => {
  const params = useParams();
  const navigate = useNavigate()
  function navigateToProducts(){
      navigate("/products")
  }
  const findedProduct = product.find((el) => el.id === +params.id);
  return (
    <Container>
      <PhotoContainer>
        <Image src={findedProduct.img} alt="" />
      </PhotoContainer>
      <ContentContainer>
        <Button onClick={navigateToProducts}>Go back</Button>
        <h1>{findedProduct.title}</h1>
        <h2>{findedProduct.price}</h2>
        <h2>{findedProduct.description}</h2>
      </ContentContainer>
    </Container>
  );
};
const Button = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 5px;
    border: 0;
    background-color: blue;
    color: white;
`
const Container = styled.div`
  background-color: #ffffffae;
  width: 95%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  gap: 50px;
  border-radius: 20px;
`;
const PhotoContainer = styled.div`
  width: 300px;
`;
const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align:start ;
  margin-top: 60px;
  margin-bottom: 80px;
`;
const Image = styled.img` 
height: 400px;
transition: transform 800ms;
  &:hover{
    transform: translateY(-20px);
  }
`