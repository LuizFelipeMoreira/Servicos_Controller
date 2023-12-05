import React from "react";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  background: black;
  color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 70px;
`;

const Logo = styled.h1`
  font-size: 2.25rem;
  font-family: "Josefin Sans";
  font-weight: 400;
`;

const Header = () => {
  return (
    <Container>
      <Logo>BellaVision Serviços</Logo>
    </Container>
  );
};

export default Header;
