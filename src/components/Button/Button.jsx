import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  padding: 20px 20px;
  font-size: 1.125rem;
  font-weight: 500;
  background: #fff;
  margin-right: 80px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #fcf9f9;
  }
`;

const Icon = styled.i`
  margin-left: 50px;
  background: #000;
  font-size: 18px;
  padding: 20px;
  border-radius: 50%;
  color: #fff;
`;

const Button = ({ text, className, icon }) => {
  return (
    <Buttons className={className}>
      {text}
      <Icon className={icon}></Icon>
    </Buttons>
  );
};

export default Button;
